# Base Image
FROM node:18-alpine

# Work Dir
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Expose app port
EXPOSE 3000

# Run the app
CMD [ "npm", "start" ]
