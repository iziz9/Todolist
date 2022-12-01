import API_KEY from './apikey.js';
import { getTodo } from './create.js';

export async function deleteTodo(btn) {// 리스트 삭제
  const list = await getTodo();
  const todoDiv = btn.closest('.todo');
  todoDiv.addEventListener('transitionend', () => {
    todoDiv.remove();
  })
  todoDiv.classList.add('delete');
  const res = await fetch(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${btn.dataset.id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      'apikey': `${API_KEY}`,
      'username': 'KDT3_KangHyeonJu'
    }
  })
}
