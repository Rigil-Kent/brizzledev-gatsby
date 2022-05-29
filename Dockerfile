FROM node:14.15.1-alpine AS builder

RUN apk add --no-cache \
	make g++ && \
	apk add vips-dev fftw-dev --update-cache \
	&& rm -fR /var/cache/apk/*

WORKDIR /app

COPY . /app/

RUN npm install

RUN npm install -g gatsby-cli

RUN npm install sass --save-dev

RUN gatsby build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/public .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
