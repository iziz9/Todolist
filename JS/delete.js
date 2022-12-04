import { url, header, selectors } from './store.js';

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

// done 리스트 전체삭제
export const deleteAllClickEvent =
  selectors.deleteAllBtnEl.addEventListener('click', async (event) => {
    HTMLCollection.prototype.forEach = Array.prototype.forEach; // HTMLCollection에 forEach 프로토타입 생성

    const doneListEls = document.getElementsByClassName('done')

    doneListEls.forEach((item) => {
      console.log(item);

      // item.classList.add('delete');
      // item.addEventListener('transitionend', () => {
      //   item.remove();
      // })
    });
    const res = await fetch(url + `${item.dataset.id}`, {
      method: 'DELETE',
      headers: header
    })
    return res;
  });
// forEach에 await넣으면 안됨... promise all로 다시해보기