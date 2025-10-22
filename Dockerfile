# Step 1: Build stage
FROM node:18-alpine AS builder
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Production stage
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /src ./
EXPOSE 3000
CMD ["npm", "start"]