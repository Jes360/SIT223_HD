FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
# Install Jest globally for testing
RUN npm install jest -g
RUN npm install -g sonar-scanner && chmod +x /usr/local/lib/node_modules/sonar-scanner/bin/sonar-scanner
COPY . .
EXPOSE 3001
CMD ["node", "app.js"]
