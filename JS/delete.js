import { getTodo, renderTodo } from './read.js';
import { url, header, selectors } from './store.js';

// 삭제 API 요청
async function deleteTodo(id) {
  try {
    const res = await fetch(url + `${id}`, {
      method: 'DELETE',
      headers: header
    })
    return res;
  } catch (err) {
    alert("Sorry! Try again...")
  }
}

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


export async function deleteAll() {
  const deleteArr = [];
  try {
    const res = await getTodo();
    res.forEach(item => {
      if (item.done === true) {
        deleteArr.push(deleteTodo(item.id), deleteEachItem(item.id));
        console.log(item)
      }
    })
    await Promise.all(deleteArr);
  } catch (err) {
    alert("Sorry! Try again...")
  }
};
