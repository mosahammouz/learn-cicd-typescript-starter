FROM --platform=linux/amd64 node:22-slim

WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy all files
COPY . .

# Build the frontend
RUN npm run build

# Install serve to serve static files
RUN npm install -g serve

# Serve the build folder on port 80 in single-page mode
CMD ["serve", "-s", "build", "-l", "80"]