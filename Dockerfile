
FROM node:22-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies for TypeScript compilation
RUN npm ci

# Copy backend source code
COPY tsconfig.json ./
COPY src ./src

# Compile TypeScript into JavaScript
RUN npm run build

# Remove development dependencies
RUN npm prune --omit=dev

ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "start"]
