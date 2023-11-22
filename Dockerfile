FROM node:12-alpine

# Set the working directory in the container
WORKDIR /src

# Copy package.json and package-lock.json to the working directory
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the local source files to the working directory
COPY . .

# Expose port 3000 to the outside world
EXPOSE 8080

# Command to run the application
CMD ["npm", "start"]
