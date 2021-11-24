# Calendar API

## 소개

- 일정을 관리할수 있는 HTTP API 입니다.
- restAPI 규격에 준수하며 작성했습니다.

## API Docs

[API 문서](https://api.kumas.dev/calendar/api-docs/)

## 도구 및 기술

- `node.js` `express` `sequelize` `mysql` `ec2` `rds` `nginx`

## 담당 역할

- 백엔드, DB설계

## 작업 내용

- ~~vultr에서 리눅스 호스팅을 받아 작업하였습니다.~~
- AWS의 EC2, RDS을 이용하여 배포되었습니다.
- sequelize을 이용하여 ORM(Object-Relational Mapping) 방식의 설계를 하였습니다.
- ~~apache의 가상호스팅 기능으로 하위 도메인의 포트를 연결해주었습니다.~~
- nginx의 proxy_pass를 이용하여 하위 도메인을 연결하였습니다.
