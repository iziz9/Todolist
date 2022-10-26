# 📌 할 일 관리(Todo)

주어진 API를 활용해 '[완성 예시](https://beautiful-daifuku-b9462c.netlify.app/)' 처럼 자유롭게 할 일 관리 프로젝트를 만들어보세요.

#### 과제 기간:

- 수행 기간: 오늘 ~ 2022.12.07(수) 까찌
- 리뷰 기간: 
  - 수강생끼리: 12.08(목) ~ 12.13(화)
  - 리뷰어 1차: 12.08(목) ~ 12.13(화)
  - 리뷰어 2차: 12.19(월) ~ 12.21(수)
  
#### 제출 방법:

`main` 혹은 다른 사람의 브랜치로 절대 병합하지 않도록 주의하세요!    
혹시 문제가 발생한 경우, 바로 강사에게 알려주세요!

1. 현재 깃헙 저장소를 클론!
2. 확인 가능하도록 본명으로 브랜치 생성! `ParkYoungWoong`
3. 과제 수행 후 원격 저장소로 푸시! `git push origin ParkYoungWoong`
4. 현재 깃헙 저장소에서 `main` 브랜치로 Pull Request 생성하면 제출 완료!
5. Pull Request 설명을 꼼꼼하게 작성!

## 요구사항

필수 요구사항은 꼭 달성해야 하는 목표로, 수정/삭제는 불가하고 추가는 가능합니다.    
선택 요구사항은 단순 예시로, 자유롭게 추가/수정/삭제해서 구현해보세요.  
각 요구사항은 달성 후 마크다운에서 `- [x]`로 표시하세요.

### :exclamation: 필수

- [ ] 할 일 목록(List)이 출력돼야 합니다.
- [ ] 할 일 항목(Item)을 새롭게 추가할 수 있어야 합니다.
- [ ] 할 일 항목을 수정할 수 있어야 합니다.
- [ ] 할 일 항목을 삭제할 수 있어야 합니다.
- [ ] jQuery, React, Vue 등 JS 라이브러리와 프레임워크는 사용하지 않아야 합니다.
- [ ] 실제 서비스로 배포하고 접근 가능한 링크를 추가해야 합니다.

### :grey_question: 선택

- [ ] 할 일 항목의 순서를 바꿀 수 있도록 만들어보세요.
- [ ] 할 일을 완료하지 않은 항목과 완료한 항목을 분류해서 출력해보세요.
- [ ] 할 일을 완료한 항목을 한 번에 삭제할 수 있도록 만들어보세요.
- [ ] 할 일 항목의 최신 수정일을 표시해보세요.
- [ ] 할 일 목록이 출력되기 전에 로딩 애니메이션이 보이도록 만들어보세요.
- [ ] 기타 동작이 완료되기 전에 로딩 애니메이션이 보이도록 만들어보세요.
- [ ] 차별화가 가능하도록 프로젝트를 최대한 예쁘게 만들어보세요.
- [ ] 할 일과 관련된 기타 기능도 고려해보세요.

## API 사용법

- 요청 주소(Endpoint): `https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos`

모든 API 요청(Request) `headers`에 아래 정보가 꼭 포함돼야 합니다!  
`username`은 `KDT3_ParkYoungWoong`와 같이 본명을 포함해야 합니다!  
확인할 수 없는 사용자의 DB 정보는 임의로 삭제될 수 있습니다!  

```json
{
  "content-type": "application/json",
  "apikey": "FcKdtJs202209",
  "username": "<YOUR_NAME>"
}
```

API 사용 예시:

```js
async function createTodo() {
  const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'apikey': 'FcKdtJs202209',
      'username': 'KDT3_ParkYoungWoong'
    },
    body: JSON.stringify({
      title: '아침 먹기!'
    })
  })
  const json = await res.json()
  console.log(json)

  return json
}
```

### 목록 조회

전체 할 일 목록을 조회합니다.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos
  \ -X 'GET'
```

요청 데이터 타입 및 예시:

-

응답 데이터 타입 및 예시:

```ts
type ResponseValue = Todo[] // 할 일 목록

interface Todo {
  id: string // 할 일 ID
  order: number // 할 일 순서
  title: string // 할 일 제목
  done: boolean // 할 일 완료 여부
  createdAt: string // 할 일 생성일
  updatedAt: string // 할 일 수정일
}
```

```json
[
  {
    "id": "mnIwaAPIAE1ayQmqekiR",
    "order": 0,
    "title": "JS 공부하기",
    "done": false,
    "createdAt": "2021-10-28T05:18:51.868Z",
    "updatedAt": "2021-10-28T05:18:51.868Z"
  },
  {
    "id": "tMzPImGoWtRdJ6yyVv2y",
    "order": 1,
    "title": "과제 PullRequest(PR) 생성",
    "done": true,
    "createdAt": "2021-10-28T04:16:53.980Z",
    "updatedAt": "2021-10-28T09:40:17.955Z"
  },
  {
    "id": "Rq8BebKihCgteHHhMIRS",
    "order": 2,
    "title": "API 스터디",
    "done": false,
    "createdAt": "2021-10-28T04:17:02.510Z",
    "updatedAt": "2021-10-28T04:17:02.510Z"
  }
]
```

### 목록 순서 변경

할 일 목록의 순서를 변경합니다.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/reorder
  \ -X 'PUT'
```

요청 데이터 타입 및 예시:

```ts
interface RequestBody {
  todoIds: string[] // 새롭게 정렬할 할 일 ID 목록 (필수!)
}
```

```json
{
  "todoIds": [
    "mnIwaAPIAE1ayQmqekiR",
    "tMzPImGoWtRdJ6yyVv2y",
    "GHrvr3LaPx1g7y2sNuaC",
    "Rq8BebKihCgteHHhMIRS"
  ]
}
```

응답 데이터 타입 및 예시:

```ts
type ResponseValue = true // 순서 변경 여부
```

### 항목 추가

할 일 항목을 새롭게 추가합니다.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos
  \ -X 'POST'
```

요청 데이터 타입 및 예시:

```ts
interface RequestBody {
  title: string // 할 일 제목 (필수!)
  order?: number // 할 일 순서
}
```

```json
{
  "title": "KDT 과정 설계 미팅",
  "order": 2
}
```

응답 데이터 타입 및 예시:

```ts
interface ResponseValue {
  id: string
  order: number
  title: string
  done: boolean
  createdAt: string
  updatedAt: string
}
```

```json
{
  "id": "7P8dOM4voAv8a8cfoeKZ",
  "order": 0,
  "title": "KDT 과정 설계 미팅",
  "done": false,
  "createdAt": "2021-10-29T07:20:02.749Z",
  "updatedAt": "2021-10-29T07:20:02.749Z"
}
```

### 항목 수정

특정 할 일 항목을 수정합니다.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/:todoId
  \ -X 'PUT'
```

요청 데이터 타입 및 예시:

```ts
interface RequestBody {
  title: string // 할 일 제목 (필수!)
  done: boolean // 할 일 완료 여부 (필수!)
  order: number // 할 일 순서
}
```

```json
{
  "title": "Bootstrap 스타일 추가",
  "done": false,
  "order": 2
}
```

응답 데이터 타입 및 예시:

```json
{
  "id": "7P8dOM4voAv8a8cfoeKZ",
  "title": "Bootstrap 스타일 추가",
  "done": false,
  "order": 2,
  "createdAt": "2021-10-29T07:20:02.749Z",
  "updatedAt": "2021-10-29T07:20:02.749Z"
}
```

### 항목 삭제

특정 할 일 항목을 삭제합니다.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/:todoId
  \ -X 'DELETE'
```

요청 데이터 타입 및 예시:

-

응답 데이터 타입 및 예시:

```ts
type ResponseValue = true
```
