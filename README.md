# Express + TypeScript

Simple json api server sample with Express, Mongoose and TypeScript.

## Run

```bash
# rewrite your environment variable
cp .env.sample .env

# if you use MongoDB with docker, execute it.
docker-compose up -d

# develop mode
yarn dev

# production mode (build TypeScript to JavaScript, and launch server)
yarn start
```

## LICENSE

MIT