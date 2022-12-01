import {url, header, selectors} from './store.js'

// post 요청 보내기
async function postTodo(text) {
  const res = await fetch(url, {
    method: 'POST',
    headers: header,
    body: JSON.stringify({
      title: `${text}`
    })
  })
  const postResult = await res.json()
  return postResult;
}

// submit 이벤트
const submitEvent = selectors.formEl.addEventListener('submit', async (event) => {
  event.preventDefault();
  createHandler();
})

// todo 생성 핸들러
function createHandler() {
  if (selectors.inputText.value.length === 0) {
    alert("내용을 입력해주세요");
    return;
  } else {
    postTodo(selectors.inputText.value);
  }
}


// get 요청 보내기
async function getTodo() {
  const res = await fetch(url, {
    method: 'GET',
    headers: header
  })
  const getResult = await res.json()
  //못받아오면..?
  //?????
  
  //받아오면?
  return getResult
}


// todo 내용 생성
async function renderTodo() {
  const list = await getTodo();
  list.forEach(item => {
    console.log(item);

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
  
    const todoContent = document.createElement('input');
    todoContent.value = item.title;
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
      createBtn('delete-btn', 'delete-btn', ['fas', 'fa-trash'], item.id)
    );
    fragment.appendChild(
      createBtn('save-btn', 'save-btn', ['fas', 'fa-save'])
    );
  
    // fragment.appendChild(
      // 생성날짜 넣어주기...order는 뭐지?
    // )
  
    todoDiv.appendChild(fragment);
    selectors.todoListEl.appendChild(todoDiv);
    selectors.inputText.value = '';
  })
}


// 목록에 버튼 생성
function createBtn(btnId, btnClass, iconClass, itemId) { 
  const btn = document.createElement('button');
  const icon = document.createElement('i');
  icon.classList.add(...iconClass);
  btn.appendChild(icon);
  btn.id = btnId;
  btn.classList.add(btnClass);

  if (btn.id === "delete-btn") { 
    btn.dataset.id = `${itemId}`
  }
  return btn;
}

export {
  submitEvent,
  getTodo,
  createHandler,
  renderTodo,
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
