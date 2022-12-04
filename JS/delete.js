import { url, header, selectors } from './store.js';

const deleteArr = [];

// 삭제 API 요청
async function deleteTodo(btn) {
  const res = await fetch(url + `${btn.dataset.id}`, {
    method: 'DELETE',
    headers: header
  })
  return res;
}

// 리스트에서 삭제
export async function deleteEachItem(btn) {
  const todoItem = btn.closest('.todo-wrap');
  todoItem.classList.add('delete');
  todoItem.addEventListener('transitionend', () => {
    todoItem.remove();
  })
  await deleteTodo(btn);
}

// done 리스트 전체삭제
export const deleteAllClickEvent =
  selectors.deleteAllBtnEl.addEventListener('click', async (event) => {
    // HTMLCollection에 forEach 프로토타입 생성
    HTMLCollection.prototype.forEach = Array.prototype.forEach;

    const doneListEls = document.getElementsByClassName('done')

    doneListEls.forEach((item) => {
      deleteArr.push(item);

      // item.classList.add('delete');
      // item.addEventListener('transitionend', () => {
      //   item.remove();
      // })

    });
    // deleteTodo(item);
    return deleteArr;
  });
console.log(deleteArr);


// forEach에 await넣으면 안됨... promise all로 다시해보기
// 배열 만들어서 넣어주고... 배열을 삭제?