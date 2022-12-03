import { url, header, selectors } from './store.js'

// get 요청 보내기
export async function getTodo() {
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
export async function renderTodo() {
  const list = await getTodo()
  list.forEach(item => {
    const todoWrap = document.createElement('div');
    todoWrap.classList.add('todo-wrap');

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    if (item.done === true) {
      todoWrap.classList.add('done');
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

    todoWrap.append(todoDiv, dateDiv);
    selectors.todoListEl.appendChild(todoWrap);
    selectors.todoListEl.appendChild(secondFragment);
    selectors.inputText.value = '';
  })
}

// 목록에 버튼 생성
export function createBtn(btnId, btnClass, iconClass, itemId) {
  const btn = document.createElement('button');
  const icon = document.createElement('i');
  icon.classList.add(...iconClass);
  btn.appendChild(icon);
  btn.id = btnId;
  btn.classList.add(btnClass);
  btn.dataset.id = `${itemId}`
  return btn;
}
