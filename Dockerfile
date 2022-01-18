FROM node:16

WORKDIR /app

COPY package.json ./

RUN npm install --global npm node-gyp
RUN npm install express

COPY . .

ENV PORT 3000

EXPOSE 3000
EXPOSE 8080
EXPOSE 443
EXPOSE 80

CMD [ "npm", "start" ]