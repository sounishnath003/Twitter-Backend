<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

# Twitter-backend with NestJS 

**Inspired & Learning from:**
(Scaler Architecture OPEN SOURCE PROJECTS)
Backend API for Moo using Nest framework (NodeJS + TypeScript + MySQL)


## Main Repository: [Scaler-Twitter-Backend-Node](https://github.com/scaleracademy/twitter-backend-node)


## Setup

### Database
NOTE: In parallel space, think root is a manual users, not a super user. Lol

```sql
create database twitterDB;
create user root with password '' ;
grant all privileges on database twitterDB to root ;
```


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
