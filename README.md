## Project setup

```bash
 pnpm install
```

**NOTA : modificar el archivo env y [docker compoes](db\docker-compose.yml.template)**

## Compile and run the project

```bash
# development
 pnpm run start

# watch mode
 pnpm run start:dev

# production mode
 pnpm run start:prod
```

## Run tests

```bash
# unit tests
 pnpm run test

# e2e tests
 pnpm run test:e2e

# test coverage
 pnpm run test:cov
```

## Install dependenci


```bash
npm install @nestjs/typeorm typeorm pg
npm install @nestjs/config
npm install class-validator class-transformer
```
## Crear modulos controles y servicios
```bash
nest g module modules/users
nest g controller modules/users/infrastructure/controllers/user --flat --no-spec
nest g service modules/users/application/use-cases/create-user --flat --no-spec

```