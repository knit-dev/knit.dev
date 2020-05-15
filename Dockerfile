# develop stage
FROM node:latest as develop-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . . 
EXPOSE 3000
ENV HOST 0.0.0.0

# generate stage
FROM develop-stage as generate-stage
RUN npm run generate

# # production stage
FROM generate-stage as production-stage
# install simple http server for serving static content
RUN npm install -g http-server
CMD [ "http-server", "dist", "-p3000" ]