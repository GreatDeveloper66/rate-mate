# Use a multi-stage build to optimize the image size

# Stage 1: Build the React frontend
FROM node:18 AS frontend-builder
WORKDIR /app
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# Stage 2: Build the Java backend
FROM maven:3.9.9-eclipse-temurin-21 AS backend-builder
WORKDIR /app
COPY backend/ratematebackend/ ./
RUN mvn dependency:go-offline
RUN mvn package -DskipTests

# Stage 3: Create the final image
FROM eclipse-temurin:21-jre
WORKDIR /app

# Copy the built frontend
COPY --from=frontend-builder /app/build ./frontend

# Copy the built backend JAR
COPY --from=backend-builder /app/target/*.jar app.jar

# Expose the backend port
EXPOSE 8080

# Set the entry point to run the Java application
ENTRYPOINT ["java", "-jar", "app.jar"]