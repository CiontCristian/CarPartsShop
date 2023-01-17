FROM --platform=$BUILDPLATFORM node:17.0.1-bullseye-slim

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

RUN npm install -g @angular/cli

COPY . .
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
