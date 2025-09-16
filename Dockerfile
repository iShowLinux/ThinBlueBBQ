# Use Node.js 18 Alpine as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci


# Copy source code
COPY . .

# Expose port (Vite default is 5173, but your config shows 8080)
EXPOSE 8080

# Start the development server
CMD ["npm", "run", "dev"]
