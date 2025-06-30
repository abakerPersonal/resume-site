FROM node:23

WORKDIR /usr/src/app

COPY package*.json ./
COPY packages/resume-api/package*.json ./packages/resume-api/
COPY packages/types/package*.json ./packages/types/
RUN npm install

COPY ../../ ./

EXPOSE 9000
CMD ["npm", "run", "start"]