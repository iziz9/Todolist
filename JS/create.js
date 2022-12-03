import { url, header, selectors } from './store.js'


// submit 이벤트
const submitEvent = selectors.formEl.addEventListener('submit', async (event) => {
  event.preventDefault();
  createHandler();
  selectors.todoListEl.textContent = '';
  await renderTodo();
})

// todo 생성을 위한 post 핸들러
async function createHandler() {
  if (selectors.inputText.value.length === 0) {
    alert("내용을 입력해주세요!");
    return;
  } else {
    postTodo(selectors.inputText.value);
  }
}


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

// get 요청 보내기
async function getTodo() {
  const res = await fetch(url, {
    method: 'GET',
    headers: header
  })
  const getResult = await res.json()
  if (!getResult || getResult.length === 0) {
    alert('할 일을 추가해주세요')
  }
  else {
    // getResult.forEach(item => renderTodo(item));
    return getResult
  }
}


// todo 내용 생성
async function renderTodo() {
  const list = await getTodo()
  list.forEach(item => {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    if (item.done === true) {
      todoDiv.classList.add('done');
    }
    // text & button
    const todoContent = document.createElement('input');
    todoContent.value = item.title;
    todoContent.readOnly = true;
    todoContent.classList.add('todo-item');

    const fragment = new DocumentFragment();
    fragment.appendChild(todoContent);
    fragment.appendChild(
      createBtn('complete-btn', 'complete-btn', ['fas', 'fa-check'], item.id)
    );
    fragment.appendChild(
      createBtn('edit-btn', 'edit-btn', ['fas', 'fa-edit'], item.id)
    );
    fragment.appendChild(
      createBtn('delete-btn', 'delete-btn', ['fas', 'fa-trash'], item.id)
    );
    fragment.appendChild(
      createBtn('save-btn', 'save-btn', ['fas', 'fa-save'], item.id)
    );
    todoDiv.appendChild(fragment);

    const secondFragment = new DocumentFragment();
    const dateDiv = document.createElement('div');
    dateDiv.classList.add('date-div');

    // created date
    const todoDate = document.createElement('span');
    const date = new Date(item.createdAt);
    date.setHours(date.getHours() + 9);
    const dateFormat = date.toISOString().replace('T', ' ').substring(0, 16);
    todoDate.textContent = `Created At ${dateFormat}`
    todoDate.classList.add('todo-date');
    dateDiv.appendChild(todoDate);

    // updated date
    const todoUpdate = document.createElement('span');
    const update = new Date(item.updatedAt);
    update.setHours(update.getHours() + 9);
    const updateFormat = update.toISOString().replace('T', ' ').substring(0, 16);
    todoUpdate.textContent = `Updated At ${updateFormat}`
    todoUpdate.classList.add('todo-update');
    dateDiv.appendChild(todoUpdate);

    secondFragment.appendChild(dateDiv);

    selectors.todoListEl.appendChild(todoDiv);
    selectors.todoListEl.appendChild(secondFragment);
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
  btn.dataset.id = `${itemId}`
  return btn;
}

// // forEach 빼고 테스트...
// function renderTodo(item) {
//   console.log(item)
//   const todoDiv = document.createElement('div');
//   todoDiv.classList.add('todo');

//   const todoContent = document.createElement('input');
//   todoContent.value = item.title;
//   todoContent.readOnly = true;
//   todoContent.classList.add('todo-item');

//   const fragment = new DocumentFragment();
//   fragment.appendChild(todoContent);
//   fragment.appendChild(
//     createBtn('complete-btn', 'complete-btn', ['fas', 'fa-check'])
//   );
//   fragment.appendChild(
//     createBtn('edit-btn', 'edit-btn', ['fas', 'fa-edit'])
//   );
//   fragment.appendChild(
//     createBtn('delete-btn', 'delete-btn', ['fas', 'fa-trash'], item.id)
//   );
//   fragment.appendChild(
//     createBtn('save-btn', 'save-btn', ['fas', 'fa-save'])
//   );

//   // fragment.appendChild(
//   //   생성날짜 넣어주기...order는 뭐지?
//   // )

//   todoDiv.appendChild(fragment);
//   selectors.todoListEl.appendChild(todoDiv);
//   selectors.inputText.value = '';
// }

export {
  submitEvent,
  getTodo,
  createHandler,
  renderTodo,
  createBtn,
  postTodo
}
