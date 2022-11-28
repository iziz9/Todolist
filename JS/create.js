const todoInputEl = document.querySelector("#todo-input");
const addBtnEl = document.querySelector("#add-btn");
const todoContainerEl = document.getElementById("todo-container");
const todoListEl = todoContainerEl.querySelector("#todo-list");

// todo 생성 (버튼 클릭시)
const inputBtnEvent = addBtnEl.addEventListener('click', () => {
  createHandler();
})
// todo 생성 (Enter 누를 때)
const inputKeyupEvent = todoInputEl.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    createHandler();
  }
})
// todo 생성 핸들러
function createHandler(){
  if(todoInputEl.value.length ===0) {
    alert("내용을 입력해주세요");
    return;
  } else {
    createToDoElement(todoInputEl.value);
  }
}

// todo 내용 생성
function createToDoElement(value) {
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  const todoContent = document.createElement('input');
  todoContent.value = value;
  todoContent.readOnly = true;
  todoContent.classList.add('todo-item');

  const fragment = new DocumentFragment();
  fragment.appendChild(todoContent);
  fragment.appendChild(
    createBtn('complete-btn', 'complete-btn', ['fas', 'fa-check'])
  );
  fragment.appendChild(
    createBtn('edit-btn', 'edit-btn', ['fas', 'fa-edit'])
  );
  fragment.appendChild(
    createBtn('delete-btn', 'delete-btn', ['fas', 'fa-trash'])
  );
  fragment.appendChild(
    createBtn('save-btn', 'save-btn', ['fas', 'fa-save'])
  );
  todoDiv.appendChild(fragment);
  todoListEl.appendChild(todoDiv);
  todoInputEl.value = '';
}

function createBtn(btnId, btnClass, iconClass) {
  const btn = document.createElement('button');
  const icon = document.createElement('i');
  icon.classList.add(...iconClass);
  btn.appendChild(icon);
  btn.id = btnId;
  btn.classList.add(btnClass);
  return btn;
}

export {
  todoInputEl, 
  todoListEl,
  todoContainerEl,
  addBtnEl,
  inputBtnEvent,
  inputKeyupEvent,
  createHandler,
  createToDoElement,
  createBtn
}