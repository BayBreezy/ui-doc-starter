FROM node:20.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV SITE_URL=http://localhost:3030

RUN npm run build