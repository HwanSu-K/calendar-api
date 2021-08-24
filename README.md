# calender API

## 조회

### Request

#### URL

```
GET /calender HTTP/1.1
Host: kumas.dev:8001
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
POST /calender HTTP/1.1
Host: kumas.dev:8001
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
PUT /calender/{id} HTTP/1.1
Host: kumas.dev:8001
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
DELETE /calender/{id} HTTP/1.1
Host: kumas.dev:8001
Authorization: {USER_ID}
Content-type: application/x-www-form-urlencoded;charset=utf-8
```

#### Header

| Name          | Description | Required |
| ------------- | ----------- | -------- |
| Authorization | 회원번호    | O        |
