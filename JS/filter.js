const todoContainerEl = document.getElementById("todo-container");
const inputContainerEl = document.getElementById('input-container');
const radioAreaEl = inputContainerEl.querySelector('#radio-area');
const filterRadioBtnEls = radioAreaEl.querySelectorAll('input[name="filter"]');

// radio 클릭 이벤트
export function addRadioBtnEvent() {
  for (const filterRadioBtnEl of filterRadioBtnEls) {
    filterRadioBtnEl.addEventListener('click', (e) => {
      const { value } = e.target;
      filterTodo(value);
    });
  }
};

export function filterTodo(status) {
  const todoListEl = todoContainerEl.querySelector("#todo-list");
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

export {
  todoContainerEl,
  inputContainerEl,
  radioAreaEl,
  filterRadioBtnEls,
}