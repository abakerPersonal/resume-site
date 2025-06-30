FROM node:23

WORKDIR /usr/src/app

COPY package*.json ./
COPY ../../package*.json ../../
RUN npm install

COPY . .

EXPOSE 9000
CMD ["npm", "run", "start"]