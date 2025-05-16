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

# Stage 3: Create the final image with Nginx and Java backend
FROM nginx:latest AS final-stage
WORKDIR /app

# Copy built frontend files to Nginx's serving directory
COPY --from=frontend-builder /app/build /usr/share/nginx/html

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built backend JAR file
COPY --from=backend-builder /app/target/*.jar /app/app.jar

# Expose the correct ports
EXPOSE 80 5000

# Start backend and Nginx
CMD ["sh", "-c", "java -jar /app/app.jar & nginx -g 'daemon off;'"]