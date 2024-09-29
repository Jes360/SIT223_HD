# Use a specific version of node based on Alpine for a lightweight image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or npm-shrinkwrap.json)
COPY package*.json ./

# Install all dependencies, including 'devDependencies' for testing
# Necessary to ensure tools like Jest are available in the container
RUN npm install --only=development

# Copy the rest of your application code into the container
COPY . .

# Expose the port the app runs on
EXPOSE 3001

# The default command to run the application
CMD ["node", "app.js"]
