
// created date
export function createdDate(item, dateDiv) {
  const todoDate = document.createElement('span');
  const date = new Date(item.createdAt);
  date.setHours(date.getHours() + 9);
  const dateFormat = date.toISOString().replace('T', ' ').substring(0, 16);
  todoDate.textContent = `Created At ${dateFormat}`
  todoDate.classList.add('todo-date');
  dateDiv.appendChild(todoDate);
  return dateDiv;
}

// updated date
export function updatedDate(item, dateDiv) {
  const todoUpdate = document.createElement('span');
  const update = new Date(item.updatedAt);
  update.setHours(update.getHours() + 9);
  const updateFormat = update.toISOString().replace('T', ' ').substring(0, 16);
  todoUpdate.textContent = `Updated At ${updateFormat}`
  todoUpdate.classList.add('todo-update');
  dateDiv.appendChild(todoUpdate);
  return dateDiv;
}

// 리스트에 텍스트 생성
export function createText(item, todoContent) {
  todoContent.value = item.title;
  todoContent.readOnly = true;
  todoContent.classList.add('todo-item');
  return todoContent;
}

// 리스트에 각 버튼 생성
export function createEachBtn(todoDiv, todoContent, item) {
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
  return todoDiv;
}

// 버튼 생성 핸들러
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