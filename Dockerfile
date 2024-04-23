# Use a Node.js base image with a specific version
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the application source code to the container
COPY . .

# Expose a port that the application listens on
EXPOSE 3000

# Define the command to run your application
CMD ["node", "app.js"]
