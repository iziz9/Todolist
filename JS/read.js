import { url, header, selectors, loadingIconVisible, loadingIconHide } from './store.js'
import { createdDate, updatedDate, createText, createEachBtn } from './content.js'

// get 요청 보내기
export async function getTodo() {
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: header
    })
    const getResult = await res.json()
    if (!getResult || getResult.length === 0) {
      alert('Please enter your wish!')
    }
    else {
      return getResult
    }
  } catch (err) {
    alert(err, "Sorry! Try again...")
  }
}

// 리스트 렌더링
export async function renderTodo() {
  loadingIconVisible()
  const list = await getTodo()
  list.forEach(item => {
    const todoWrap = document.createElement('div');
    todoWrap.classList.add('todo-wrap');
    todoWrap.dataset.id = item.id;
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // 완료버튼 클릭 시 완료 탭으로 이동시키기 위한 클래스 부여
    if (item.done === true) {
      todoWrap.classList.add('done');
    }

    const todoContent = document.createElement('input');
    createText(item, todoContent);
    createEachBtn(todoDiv, todoContent, item);

    const secondFragment = new DocumentFragment();
    const dateDiv = document.createElement('div');
    dateDiv.classList.add('date-div');
    createdDate(item, dateDiv);
    updatedDate(item, dateDiv);
    secondFragment.appendChild(dateDiv);

    todoWrap.append(todoDiv, dateDiv);
    selectors.todoListEl.appendChild(todoWrap);
    selectors.todoListEl.appendChild(secondFragment);
    selectors.inputText.value = '';
  })
  loadingIconHide();
}
