import { getTodo, renderTodo } from './create.js';
import { addRadioBtnEvent } from './filter.js'
import { deleteTodo } from './delete.js';
import { url, header, selectors } from './store.js'

// 초기화
addRadioBtnEvent();
renderTodo();
// getTodo()


// 리스트 버튼 클릭 이벤트
selectors.todoListEl.addEventListener('click', (event) => {
  const { target } = event; // 버튼 + 아이콘
  const btn = target.closest('button'); // 현재 엘리먼트에서 본인 포함 가장 가까운 조상 반환, 조상요소에 이벤트 위임
  if (!btn) { return; }
  if (btn.matches('#delete-btn')) { // 선택하려는 엘리먼트가 맞는지 확인
    deleteTodo(btn);
  } else if (btn.matches('#edit-btn')) {
    editTodo(btn);
  } else if (btn.matches('#save-btn')) {
    saveTodo(btn);
  } else if (btn.matches('#complete-btn')) {
    completeTodo(btn);
  }
})

// done 처리하기
function completeTodo(target) {
  const todoDiv = target.closest('.todo');
  todoDiv.classList.toggle('done');
  console.log(todoDiv.classList);
  const todoInputEl = todoDiv.querySelector('input');

  todoDiv.classList.contains('done')
    ? putTodo(todoInputEl.value, target.dataset.id, true)
    : putTodo(todoInputEl.value, target.dataset.id, false)
}

// 텍스트 변경사항 저장
function saveTodo(target) {
  console.log(target)
  const todoDiv = target.closest('.todo');
  todoDiv.classList.remove('edit');
  const todoInputEl = todoDiv.querySelector('input');
  todoInputEl.readOnly = true;
  putTodo(todoInputEl.value, target.dataset.id, false); //수정된 텍스트 넣어줌
}

// 수정 api 요청
async function putTodo(text, id, done) {
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

function editTodo(target) {
  const todoDiv = target.closest('.todo');
  const todoInputEl = todoDiv.querySelector('input');
  todoInputEl.readOnly = false;
  todoInputEl.focus();
  todoDiv.classList.add('edit');
}

