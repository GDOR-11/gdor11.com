FROM denoland/deno:2.9.0 AS base-stage
WORKDIR /usr/local/app

COPY deno.json deno.lock ./
RUN ["deno", "install"]


EXPOSE 8080

RUN ["useradd", "srvr"]
USER srvr

COPY . ./

FROM base-stage AS dev
ENTRYPOINT ["deno", "run", "--allow-env", "--allow-net", "--watch", "main.ts"]

FROM base-stage AS prod
ENTRYPOINT ["deno", "run", "--allow-env", "--allow-net", "main.ts"]
