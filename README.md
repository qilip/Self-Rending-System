# Self-Rending-System

> 2019-2 \'도메인 분석 및 설계\' 데모 프로젝트

## Members
* 201820744 김문만
* 201820745 박수빈
* 201820735 신상민
* 201820708 심지수
* 201420529 김태우

## Description

해당 프로젝트는 데모용 프로젝트입니다. 보안/인증 처리는 구현하지 않았습니다.

## Technoledge Stack
* Nuxt.js
* Koa.js
* MongoDB
* Tailwind CSS

## Directory Structure
```
SelfRendingSystem/
	api/
	assets/
	components/
	layouts/
	middleware/
	models/             # MongoDB schemas
	pages/              # Vue components
	plugins/
	server/
	static/
	store/
	test/
	jest.config.js
	jsconfig.json
	nuxt.config.js
	package-lock.json
	package.json
	README.md
	tailwind.config.js
```

## API
### Low-Level

```
GET    /api/items/descriptions
POST   /api/items/descriptions/new

GET    /api/items/descriptions/:id
PATCH  /api/items/descriptions/:id
DELETE /api/items/descriptions/:id
```

```
GET    /api/items
POST   /api/items/new

GET    /api/items/:id
PATCH  /api/items/:id
DELETE /api/items/:id
```

```
GET    /api/customers
POST   /api/customers/new

GET    /api/customers/:id
PATCH  /api/customers/:id
```

```
GET    /api/manage/rules

GET    /api/manage/rules/:id
PATCH  /api/manage/rules/:id
```

### High-Level

```
GET    /api/customers/:id/check
```

```
GET    /api/manage/analysis
POST   /api/manage/analysis
```

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
