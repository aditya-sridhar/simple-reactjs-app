FROM node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --verbose

COPY . .

EXPOSE 3000

CMD ["npm","start"]
