import { selectors } from './store.js';
import { deleteTodo, getTodo } from './requests.js';

// 리스트에서 개별 삭제
export async function deleteEachItem(id) {
  const todoItem = document.querySelectorAll('.todo-wrap');
  todoItem.forEach(item => {
    if (item.dataset.id === id) {
      item.classList.add('delete');
      item.addEventListener('transitionend', () => {
        item.remove();
      })
    }
  })
  await deleteTodo(id);
}


// delete all 버튼 클릭이벤트
selectors.deleteAllBtnEl.addEventListener('click', (event) => {
  if (window.confirm("Are you sure you want to delete them all?")) {
    deleteAll();
  }
});

// delete all 이벤트 핸들러
export async function deleteAll() {
  const deleteArr = [];
  try {
    const res = await getTodo();
    res.forEach(item => {
      if (item.done === true) {
        deleteArr.push(deleteTodo(item.id), deleteEachItem(item.id));
      }
    })
    await Promise.all(deleteArr);
  } catch (err) {
    alert("Sorry! Try again...")
  }
};
