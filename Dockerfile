FROM node:14.15.1-buster
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]