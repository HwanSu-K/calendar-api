# calendar API

## 조회

### Request

#### URL

```
GET /calendar HTTP/1.1
Host: api.kumas.dev
Authorization: {USER_ID}
Content-type: application/x-www-form-urlencoded;charset=utf-8
```

#### Header

| Name          | Description | Required |
| ------------- | ----------- | -------- |
| Authorization | 회원번호    | O        |

### Response

| Name      | Type     | Description |
| --------- | -------- | ----------- |
| id        | String   | 회원번호    |
| content   | String   | 내용        |
| dateStart | Datetime | 시작일      |
| dateEnd   | Datetime | 종료일      |

## 등록

### Request

#### URL

```
POST /calendar HTTP/1.1
Host: api.kumas.dev
Authorization: {USER_ID}
Content-type: application/x-www-form-urlencoded;charset=utf-8
```

#### Header

| Name          | Description | Required |
| ------------- | ----------- | -------- |
| Authorization | 회원번호    | O        |

#### Parameter

| Name      | Type     | Description |
| --------- | -------- | ----------- |
| content   | String   | 내용        |
| dateStart | Datetime | 시작일      |
| dateEnd   | Datetime | 종료일      |

## 수정

### Request

#### URL

```
PUT /calendar/{id} HTTP/1.1
Host: api.kumas.dev
Authorization: {USER_ID}
Content-type: application/x-www-form-urlencoded;charset=utf-8
```

#### Header

| Name          | Description | Required |
| ------------- | ----------- | -------- |
| Authorization | 회원번호    | O        |

#### Parameter

| Name      | Type     | Description |
| --------- | -------- | ----------- |
| content   | String   | 내용        |
| dateStart | Datetime | 시작일      |
| dateEnd   | Datetime | 종료일      |

## 삭제

### Request

#### URL

```
DELETE /calendar/{id} HTTP/1.1
Host: api.kumas.dev
Authorization: {USER_ID}
Content-type: application/x-www-form-urlencoded;charset=utf-8
```

#### Header

| Name          | Description | Required |
| ------------- | ----------- | -------- |
| Authorization | 회원번호    | O        |
