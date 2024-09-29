# Using a specific version of node image that's based on Alpine Linux
FROM node:20-alpine

# Sets the working directory for any RUN, CMD, ENTRYPOINT, COPY, and ADD instructions that follow
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install all dependencies, including 'devDependencies' for testing purposes
# This is crucial if Jest is listed under 'devDependencies'
RUN npm install --only=development

# Copy the rest of your application code to the container
COPY . .

# Expose the port the application runs on
EXPOSE 3001

# Default command to run when starting the container
CMD ["npm", "test"]
