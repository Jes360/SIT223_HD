FROM node:20-alpine
WORKDIR /app

# Ensure both dependencies and devDependencies are installed
COPY package*.json ./
RUN npm install --also=dev

COPY . .
EXPOSE 3001

# Use npm test as the default command
CMD ["npm", "test"]
