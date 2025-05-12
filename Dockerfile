# Use a multi-stage build to optimize the image size

# Stage 1: Build the React frontend
FROM node:18 AS frontend-builder
WORKDIR /app
COPY front-end/package.json front-end/package-lock.json ./
RUN npm install
COPY front-end/ ./
RUN npm run build

# Stage 2: Build the Java backend
FROM maven:3.9.4-eclipse-temurin-17 AS backend-builder
WORKDIR /app
COPY back-end/pom.xml ./
RUN mvn dependency:go-offline
COPY back-end/ ./
RUN mvn package -DskipTests

# Stage 3: Create the final image
FROM eclipse-temurin:17-jre
WORKDIR /app

# Copy the built frontend
COPY --from=frontend-builder /app/build ./frontend

# Copy the built backend JAR
COPY --from=backend-builder /app/target/*.jar app.jar

# Expose the backend port
EXPOSE 8080

# Set the entry point to run the Java application
ENTRYPOINT ["java", "-jar", "app.jar"]