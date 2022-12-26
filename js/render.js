import { selectors, loadingIconVisible, loadingIconHide } from './store.js'
import { makeDate, createText, createEachBtn } from './content.js'
import { getTodo } from './requests.js'


// 리스트 렌더링
export async function renderTodo() {
  loadingIconVisible()
  const lists = await getTodo()
  lists.forEach(list => {
    const todoWrap = document.createElement('div');
    todoWrap.classList.add('todo-wrap');
    todoWrap.dataset.id = list.id;
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // 완료버튼 클릭 시 완료 탭으로 이동시키기 위한 클래스 부여
    if (list.done === true) {
      todoWrap.classList.add('done');
    }

    const todoContent = document.createElement('input');
    createText(list, todoContent);
    createEachBtn(todoDiv, todoContent, list);

    const secondFragment = new DocumentFragment();
    const dateDiv = document.createElement('div');
    dateDiv.classList.add('date-div');
    makeDate(list, dateDiv, 'created');
    makeDate(list, dateDiv, 'updated');
    secondFragment.appendChild(dateDiv);

    todoWrap.append(todoDiv, dateDiv);
    selectors.todoListEl.appendChild(todoWrap);
    selectors.todoListEl.appendChild(secondFragment);
    selectors.inputText.value = '';
  })
  loadingIconHide();
}
