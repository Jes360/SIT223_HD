FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
# Install Jest globally for testing
RUN npm install jest -g
COPY . .
EXPOSE 3001
CMD ["node", "app.js"]
