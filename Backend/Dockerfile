FROM node:20-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install --only=development

# Explicitly set the PATH to include local node binaries
ENV PATH="./node_modules/.bin:$PATH"

COPY . .

EXPOSE 3001

CMD ["npm", "test"]
