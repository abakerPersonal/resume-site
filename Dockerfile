FROM node:23

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source code
COPY . .

# Expose the app on port 3000
EXPOSE 3000

# Run the application
CMD ["npm", "run", "start"]