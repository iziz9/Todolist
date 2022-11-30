import API_KEY from './apikey.js';

const todoInputEl = document.querySelector("#todo-input");
const addBtnEl = document.querySelector("#add-btn");
const todoContainerEl = document.getElementById("todo-container");
const todoListEl = todoContainerEl.querySelector("#todo-list");

// post 요청 보내기
async function postTodo(text) {
  const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'apikey': `${API_KEY}`,
      'username': 'KDT3_KangHyeonJu'
    },
    body: JSON.stringify({
      title: `${text}`
    })
  })
  const postResult = await res.json()
  // createToDoElement();
  return postResult;
}


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
function createHandler() {
  if (todoInputEl.value.length === 0) {
    alert("내용을 입력해주세요");
    return;
  } else {
    postTodo(todoInputEl.value);
  }
}


// get 요청 보내기
async function getTodo() {
  const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos', {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'apikey': `${API_KEY}`,
      'username': 'KDT3_KangHyeonJu'
    }
  })
  const getResult = await res.json()
  //못받아오면..?
  //?????
  
  //받아오면!
  console.log(getResult)
  return getResult
}


// todo 내용 생성
async function createToDoElement() {
  const list = await getTodo();

  list.forEach(item => {
    const order = item.order;
    const title = item.title;
    const done = item.done;
    const createdAt = item.createdAt;
    const updatedAt = item.updatedAt;
  
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
  
    const todoContent = document.createElement('input');
    todoContent.value = title;
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
  
    // fragment.appendChild(
  
    // )
  
    todoDiv.appendChild(fragment);
    todoListEl.appendChild(todoDiv);
    todoInputEl.value = '';
  })
}

// 목록에 버튼 생성
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
  createBtn,
  postTodo
}

// function getTodos() {
  //API 로직상관없이
  //return todos 결과가 나오면됨. 
  // 내용부터 만들필요 없이 함수부터 만들고 안의 로직은 나중에...
  // 함수에서 나올 결과를 먼저 생각해보기 -> 추상화
  //readTOdo(){ }
  //createTodo(){ } ,,,,,,,,
// }


//함수.prototype.deleteItem = function(id){
//   
//}