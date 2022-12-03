import { url, header } from './store.js';

// 수정 api 요청
export async function putTodo(text, id, done) {
  const res = await fetch(url + `${id}`, {
    method: 'PUT',
    headers: header,
    body: JSON.stringify({
      title: `${text}`,
      done: done
    })
  })
  const postResult = await res.json()
  return postResult;
}

// done 상태 변경
export function completeTodo(target) {
  const todoItem = target.closest('.todo-wrap');
  todoItem.classList.toggle('done');
  const todoInputEl = todoItem.querySelector('input');

  todoItem.classList.contains('done')
    ? putTodo(todoInputEl.value, target.dataset.id, true)
    : putTodo(todoInputEl.value, target.dataset.id, false)
}

// 텍스트 변경사항 저장
export function saveTodo(target) {
  const todoDiv = target.closest('.todo');
  todoDiv.classList.remove('edit');
  const todoInputEl = todoDiv.querySelector('input');
  todoInputEl.readOnly = true;
  putTodo(todoInputEl.value, target.dataset.id, false);
}

export function editTodo(target) {
  const todoDiv = target.closest('.todo');
  const todoInputEl = todoDiv.querySelector('input');
  todoInputEl.readOnly = false;
  todoInputEl.focus();
  todoDiv.classList.add('edit');
}

