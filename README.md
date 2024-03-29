# Self Rending System

> 2019-2 \'도메인 분석 및 설계\' 데모 프로젝트

## Members

### Team 도분설스토리 (Dobunseol Story)

* 201820744 김문만
* 201820745 박수빈
* 201820735 신상민
* 201820708 심지수
* 201420529 김태우

## Description

해당 프로젝트는 데모용 프로젝트입니다. 보안/인증 처리는 구현하지 않았습니다.

직접 실행을 위해서는 .env에 MongoDB 서버의 주소가 필요합니다.

테스트 주소: https://srs.abys.dev

*최초 접속시 Dyno 시작을 위해 수 초 이상 걸릴 수 있습니다.*

### Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start
```

## Technology Stack

### Frontend

* Nuxt.js
* Tailwind CSS

### Backend

* Koa.js
* MongoDB

## Directory Structure

```
SelfRendingSystem/
	api/                # Koa APIs
	assets/
	components/         # Vue components
	layouts/            # Vue layouts
	models/             # MongoDB schemas
	pages/              # Vue pages
	server/
	static/
	jsconfig.json
	nuxt.config.js
	package-lock.json
	package.json
	README.md
	tailwind.config.js
```

## API

### Item Description

```text
GET    /api/items/descriptions
POST   /api/items/descriptions/new

GET    /api/items/descriptions/:id
PATCH  /api/items/descriptions/:id
DELETE /api/items/descriptions/:id
```

### Item

```text
GET    /api/items
POST   /api/items/new

GET    /api/items/:id
PATCH  /api/items/:id
DELETE /api/items/:id
```

### Customer

```text
GET    /api/customers
POST   /api/customers/new

GET    /api/customers/:id
DELETE /api/customers/:id
PATCH  /api/customers/:id
```

### Manage

```text
GET    /api/manage/rules

GET    /api/manage/rules/:id
PATCH  /api/manage/rules/:id
```

### Record

```text
GET    /api/records
```

### Transaction

```text
POST   /api/payment
POST   /api/refund
POST   /api/rent
POST   /api/return
```
