import { url, header } from './store.js';

// 리스트 삭제
export async function deleteTodo(btn) {
  const todoItem = btn.closest('.todo-wrap');
  todoItem.classList.add('delete');
  todoItem.addEventListener('transitionend', () => {
    todoItem.remove();
  })

  const res = await fetch(url + `${btn.dataset.id}`, {
    method: 'DELETE',
    headers: header
  })
  return res;
}
