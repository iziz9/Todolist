import { renderTodo } from './create.js';
import { addRadioBtnEvent} from './filter.js'
import { deleteTodo } from './delete.js';
import { selectors } from './store.js'

// 초기화
addRadioBtnEvent();
renderTodo();


// 리스트 버튼 클릭 이벤트
selectors.todoListEl.addEventListener('click', (event) => {
  const { target } = event; // 버튼 + 아이콘
  const btn = target.closest('button'); // 현재 엘리먼트에서 본인 포함 가장 가까운 조상 반환, 조상요소에 이벤트 위임
  if (!btn) { return; }
  if (btn.matches('#delete-btn')) { // 선택하려는 엘리먼트가 맞는지 확인
    deleteTodo(btn); //not target!
  } else if (btn.matches('#edit-btn')) {
    editTodo(btn);
  } else if (btn.matches('#save-btn')) {
    saveTodo(btn);
  } else if (btn.matches('#complete-btn')) {
    completeTodo(btn);
  }
})

function completeTodo(target) {
  const todoDiv = target.closest('.todo');
  todoDiv.classList.toggle('done');
  //수정api -> done으로 상태 변경 넣기
}

function saveTodo(target) {
  const todoDiv = target.closest('.todo');
  todoDiv.classList.remove('edit');
  const todoInputEl = todoDiv.querySelector('input');
  todoInputEl.readOnly = true;
  //수정api -> title변경 넣기
}

function editTodo(target) {
  const todoDiv = target.closest('.todo');
  const todoInputEl = todoDiv.querySelector('input');
  todoInputEl.readOnly = false;
  todoInputEl.focus();
  todoDiv.classList.add('edit');
}

