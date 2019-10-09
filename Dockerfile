# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /usr/app

# copy app and install client dependencies
COPY ./package.json ./
RUN npm install --silent
COPY ./ ./

# start client
CMD ["npm", "start"]

