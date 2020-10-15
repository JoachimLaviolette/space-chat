FROM node:12.16.1
RUN npm config set strict-ssl false
WORKDIR /frontend
COPY package*.json ./
RUN npm install -f
COPY . .
EXPOSE 8080
CMD [ "npm", "start" ]