FROM node:20-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install --only=development

# Add a command to check installed Jest version
RUN npx jest --version

COPY . .

EXPOSE 3001

CMD ["npm", "test"]
