# Stage 1: Install dependencies and build application
FROM node:21 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies (excluding dev dependencies)
RUN npm ci --production

ENV NITRO_PORT=5000
# Copy the rest of the application code
COPY . .

# Stage 2: Copy built application without node_modules
FROM node:21-alpine AS final

# Set working directory
WORKDIR /app

# Copy only the necessary files from the previous stage
COPY --from=builder /app .

# Expose port (if needed)
EXPOSE 5000

# Command to run the application
CMD ["node", ".output/server/index.mjs"]

