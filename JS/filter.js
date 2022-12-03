import { selectors } from "./store.js";

// 목록 필터링
export function filterTodo(status) {
  const todoListEl = document.querySelector("#todo-list");
  const todoDivEls = todoListEl.querySelectorAll('.todo-wrap');
  for (const todoDivEl of todoDivEls) {
    switch (status) {
      case 'ALL':
        todoDivEl.style.display = 'block';
        break;
      case 'DONE':
        todoDivEl.style.display = todoDivEl.classList.contains('done')
          ? 'block'
          : 'none';
        break;
      case 'TODO':
        todoDivEl.style.display = todoDivEl.classList.contains('done')
          ? 'none'
          : 'block';
        break;
    }
  }
}

// 필터버튼 클릭이벤트
export function filterClickEvent() {
  for (const filterRadioBtnEl of selectors.filterRadioBtnEls) {
    filterRadioBtnEl.addEventListener('click', (e) => {
      const { value } = e.target;
      filterTodo(value);
    });
  }
};

