FROM node:23

WORKDIR /usr/src/app

COPY package*.json ./
COPY packages/resume-client/package*.json ./packages/resume-client/
COPY packages/types/package*.json ./packages/types/
RUN npm install

COPY ../../ ./

RUN npm run build

# Serve with a lightweight static server
FROM nginx:alpine
COPY --from=build /usr/src/app/packages/resume-client/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]