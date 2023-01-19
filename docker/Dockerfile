# Multi Stage Production Dockerfile
# Stage 1: Build Angular app

# We need the node container so we can use node, angular cli
# alias as node so in the next stage we can refer back to this stage
FROM node:18.10.0-alpine3.16 as builder
LABEL author="Richard Ottinger"

WORKDIR /usr/src/app

#COPY package.json package.json
COPY . .
#RUN npm install --silent
RUN npm install

# copy the source code to the container and run the build process
#COPY . .

# the -- before --prod is escaping so it won't treat --prod as a separate command and not work correctly
#RUN npm run build -- --production
RUN npm run build

# Stage 2:
FROM nginx:stable-alpine

LABEL maintainer="richard.ottinger@eastexcrude.com"

# setup a volume for some of the caching it does
# optional but will control where the cache file in nginx get put
VOLUME /var/cache/nginx

COPY --from=builder /usr/src/app/dist/client /usr/share/nginx/html
# this is going to help with the routes
# there are other things you can do here as well
# you can put SSL certificates
# your caching settings for the browsers
# headers, etc

COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

# -t tag the image: user/image-name:version
# Dockerfile is the default file name for a docker file else use -f to specify the name of the file
# -f used when there are multiple docker files. this specifies which file we are trying to build
# . means look in this folder for that file...called the build context

# docker build -t rnottinger/nginx-angular -f nginx.prod.dockerfile .
# docker run -d -p 8080:80 rnottinger/nginx-angular
