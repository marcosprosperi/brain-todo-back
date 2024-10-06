FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build

COPY . .

EXPOSE 9000

CMD ["node", "./dist/index.js"]