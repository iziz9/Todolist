# 📌 할 일 관리(Todo)

주어진 API를 활용해 '[완성 예시](https://beautiful-daifuku-b9462c.netlify.app/)' 처럼 자유롭게 할 일 관리 프로젝트를 만들어보세요.

[배포 사이트]( )

---

## 기술 스택

- Programming

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=SASS&logoColor=white)

- Deploy

![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

- Etc

![env](https://img.shields.io/badge/.ENV-ECD53F?style=for-the-badge&logo=.ENV&logoColor=white) ![Parcel](https://img.shields.io/badge/PARCEL-8DD6F9?style=for-the-badge&logoColor=white)

---

## 기능 구현

- CRUD 기능 전체 구현 완료
- 완료/미완료 상태별로 탭을 구분해 출력하는 기능 추가
- `get!` 버튼을 눌렀을 때만 `delete all` 버튼이 표시되도록 구현
- `delete all` 버튼을 누르면 `alert`로 확인 후 `get`탭의 모든 내용 삭제
- 유튜브 아이콘을 누르면 랜덤 링크로 연결됩니다!
- API KEY 숨김
- 생성 일시, 수정 일시 표시
- 기능별로 모듈 분리

  `create.js` : API post 요청

  `read.js` : API get 요청

  `update.js` : API put 요청

  `delete.js` : API delete 요청

  `content.js` : 리스트 컨텐트 생성 기능

  `filter.js` : 컨텐트 완료상태에 따른 목록 필터링 기능

  `store.js` : API 요청에 사용할 텍스트, 중복 사용되는 변수 저장

---

## 어려웠던 점 & 피드백 요청

- API 요청에 문제가 생길 경우에 대비해 try, catch를 요청 함수 안에 넣어보았는데 제대로 동작하지 않는 것 같습니다.(`deleteAll` 함수 완성 전, `promise.all`을 사용하지 않아 api 요청이 정상적으로 가지 않았는데 alert창이 뜨지 않았습니다.) 이렇게 사용하는 게 맞는지 아니면 추가 코드가 필요한지 궁금합니다.

- 모듈을 더 나눌 수 있을 것 같은데 파일이 너무 많아지는 것 같아 연관된 기능별로 묶어두었습니다. 모듈은 어느 정도로 분리하는 게 좋을까요? 

- `read.js` 파일의 `getTodo` 함수 안에서 getREsult.forEach (item => renderTodo(item)) 으로 렌더함수를 미리 호출하는 방법과,
지금 제출한 대로 renderTodo 함수에서 getTodo를 호출하는 것 중 어떤 게 더 좋은 방법일지 궁금합니다.

-

---

## 요구사항

필수 요구사항은 꼭 달성해야 하는 목표로, 수정/삭제는 불가하고 추가는 가능합니다.    
선택 요구사항은 단순 예시로, 자유롭게 추가/수정/삭제해서 구현해보세요.  
각 요구사항은 달성 후 마크다운에서 `- [x]`로 표시하세요.

### :exclamation: 필수

- [x] 할 일 목록(List)이 출력돼야 합니다.
- [x] 할 일 항목(Item)을 새롭게 추가할 수 있어야 합니다.
- [x] 할 일 항목을 수정할 수 있어야 합니다.
- [x] 할 일 항목을 삭제할 수 있어야 합니다.
- [x] jQuery, React, Vue 등 JS 라이브러리와 프레임워크는 사용하지 않아야 합니다.
- [x] 실제 서비스로 배포하고 접근 가능한 링크를 추가해야 합니다.

### :grey_question: 선택

- [ ] 가능하다면, 타입스크립트를 사용해보세요.
- [ ] 할 일 항목의 순서를 바꿀 수 있도록 만들어보세요.
- [x] 할 일을 완료하지 않은 항목과 완료한 항목을 분류해서 출력해보세요.
- [x] 할 일을 완료한 항목을 한 번에 삭제할 수 있도록 만들어보세요.
- [x] 할 일 항목의 최신 수정일을 표시해보세요.
- [x] 할 일 목록이 출력되기 전에 로딩 애니메이션이 보이도록 만들어보세요.
- [ ] 기타 동작이 완료되기 전에 로딩 애니메이션이 보이도록 만들어보세요.
- [x] 차별화가 가능하도록 프로젝트를 최대한 예쁘게 만들어보세요.
- [x] 할 일과 관련된 기타 기능도 고려해보세요.

---

🥦 사용한 자료

- [favicon](https://www.flaticon.com/free-icons/tree) Flaticon
- [background image]() © Rae Kang


---

#### 과제 기간:

- 수행 기간: 오늘 ~ 2022.12.07(수) 까지
- 리뷰 기간: 
  - 수강생끼리: 12.08(목) ~ 12.13(화)
  - 리뷰어 1차: 12.08(목) ~ 12.13(화)
  - 리뷰어 2차: 12.19(월) ~ 12.21(수)
  
---