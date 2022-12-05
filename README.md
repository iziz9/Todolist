# 📌 할 일 관리(Todo)

주어진 API를 활용해 '[완성 예시](https://beautiful-daifuku-b9462c.netlify.app/)' 처럼 자유롭게 할 일 관리 프로젝트를 만들어보세요.

[배포 사이트]()

---

## 기술 스택

- 
- 
- 

---

## 기능 구현

- CRUD 기능 전체 구현 완료
- 완료/미완료 상태별로 탭을 구분해 출력하는 기능 추가
- API KEY 숨김
- 생성 일시, 수정 일시 표시
- 기능별로 모듈 분리

  `create.js` : API post 요청

  `read.js` : API get 요청

  `update.js` : API put 요청

  `delete.js` : API delete 요청

  `content.js` : 리스트 컨텐트 생성 기능

  `filter.js` : 컨텐트 완료상태에 따른 필터링 기능

  `store.js` : API 요청에 사용할 텍스트, 중복 사용되는 변수 저장

---

## 어려웠던 점 & 피드백 요청

- API 요청에 문제가 생길 경우에 대비해 try, catch를 요청 함수 안에 넣어보았는데 제대로 동작하지 않습니다. 어떤 부분이 문제인지 궁금합니다 ㅠㅠ
- 
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
- [ ] 실제 서비스로 배포하고 접근 가능한 링크를 추가해야 합니다.

### :grey_question: 선택

- [ ] 가능하다면, 타입스크립트를 사용해보세요.
- [ ] 할 일 항목의 순서를 바꿀 수 있도록 만들어보세요.
- [x] 할 일을 완료하지 않은 항목과 완료한 항목을 분류해서 출력해보세요.
- [ ] 할 일을 완료한 항목을 한 번에 삭제할 수 있도록 만들어보세요.
- [x] 할 일 항목의 최신 수정일을 표시해보세요.
- [x] 할 일 목록이 출력되기 전에 로딩 애니메이션이 보이도록 만들어보세요.
- [ ] 기타 동작이 완료되기 전에 로딩 애니메이션이 보이도록 만들어보세요.
- [x] 차별화가 가능하도록 프로젝트를 최대한 예쁘게 만들어보세요.
- [ ] 할 일과 관련된 기타 기능도 고려해보세요.

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