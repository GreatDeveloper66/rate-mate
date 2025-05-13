# Use an official Nginx image to serve the frontend
FROM nginx:latest

# Set the working directory
WORKDIR /usr/share/nginx/html

# Copy the built React app into the Nginx web server directory
COPY build/ .

# Expose port 80 for web traffic
EXPOSE 80