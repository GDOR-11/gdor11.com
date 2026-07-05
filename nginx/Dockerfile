FROM nginx:1.31.2 AS dev
WORKDIR /etc/nginx

RUN rm ./nginx.conf
COPY nginx-dev.conf ./nginx.conf

EXPOSE 80

FROM nginx:1.31.2 AS prod
RUN rm ./nginx.conf
COPY nginx.conf ./nginx.conf

EXPOSE 80
EXPOSE 443
