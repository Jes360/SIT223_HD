FROM node:20-alpine
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install all dependencies including devDependencies
RUN npm install --only=development

# Copy the rest of your application
COPY . .

EXPOSE 3001

# Set default command
CMD ["npm", "test"]
