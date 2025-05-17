# Use official Node.js image for better caching
FROM node:22-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies efficiently
COPY package.json package-lock.json ./
RUN npm ci --cache .npm --prefer-offline

# Copy the rest of the app's code
COPY . .

# Build Next.js for production
RUN npx next build

# Expose Next.js default port
EXPOSE 3000

# Start Next.js server
CMD ["sh", "-c", "npm run build && npm start"]
