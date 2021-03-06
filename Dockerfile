# Use Node runtime
FROM node:9.11.1-alpine

# Make current directory the project root
WORKDIR /app

# Copy node packages (copying both makes good use of cached Docker layers)
COPY package*.json ./

# Install project dependencies
RUN npm install

# Add your source files
COPY . .  

# Build application with minification
RUN npm run build

# Serve dist folder
CMD ["npm", "run", "start"]  