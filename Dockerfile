FROM ubuntu:21.04

WORKDIR /app

COPY package.json ./
# Env prep
RUN apt update 
RUN export DEBIAN_FRONTEND=noninteractive
RUN ln -fs /usr/share/zoneinfo/America/New_York /etc/localtime
RUN apt-get install -y tzdata
RUN dpkg-reconfigure --frontend noninteractive tzdata
# App installation
RUN apt install npm -y
RUN npm install --global npm node-gyp
RUN npm install --save express

COPY . .

ENV PORT 3000

EXPOSE 3000
EXPOSE 8080
EXPOSE 443
EXPOSE 80

CMD [ "node", "server.js" ]