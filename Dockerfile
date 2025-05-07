# start from node
FROM node:16-alpine

WORKDIR /app

# Copy only manifests first (for caching)
COPY package.json package-lock.json ./

# Remove the openssl flag from "start" and install
RUN sed -i -e 's/cross-env NODE_OPTIONS=--openssl-legacy-provider //g' package.json \
 && npm ci --legacy-peer-deps

# Copy everything else (will be overlaid by a volume for live reload)
COPY . .

# Expose CRA's default dev port
EXPOSE 3000

# Run the dev server
CMD ["npm", "start"]
