# Use official Node.js image as base
FROM node:latest

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Install PM2 globally
RUN npm install -g pm2

# Copy application code
COPY . .

# Expose port 3000
EXPOSE 3000

# Command to run the application with PM2 start
CMD ["pm2", "start", "app.js", "--no-daemon"]
