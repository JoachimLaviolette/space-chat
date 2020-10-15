FROM node:12.16.1
WORKDIR /backend
COPY package*.json ./
RUN npm i -g nodemon
RUN npm i
COPY . .
EXPOSE 5000
CMD [ "nodemon", "server.js" ]