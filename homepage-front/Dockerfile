FROM node:26.4.0 AS base-stage
WORKDIR /usr/local/app

COPY package.json package-lock.json ./
RUN ["npm", "install"]

COPY . ./

FROM base-stage AS dev
CMD ["npx", "vite", "build", "--watch"]

FROM base-stage AS prod
RUN ["npx", "vite", "build"]
