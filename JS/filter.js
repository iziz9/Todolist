import { selectors } from "./store.js";

// radio 클릭 이벤트
export function addRadioBtnEvent() {
  for (const filterRadioBtnEl of selectors.filterRadioBtnEls) {
    filterRadioBtnEl.addEventListener('click', (e) => {
      const { value } = e.target;
      filterTodo(value);
    });
  }
};

export function filterTodo(status) {
  const todoListEl = document.querySelector("#todo-list");
  const todoDivEls = todoListEl.querySelectorAll('div.todo');
  for (const todoDivEl of todoDivEls) {
    switch (status) {
      case 'ALL':
        todoDivEl.style.display = 'flex';
        break;
      case 'DONE':
        todoDivEl.style.display = todoDivEl.classList.contains('done')
          ? 'flex'
          : 'none';
        break;
      case 'TODO':
        todoDivEl.style.display = todoDivEl.classList.contains('done')
          ? 'none'
          : 'flex';
        break;
    }
  }
}
