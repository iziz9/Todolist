import {
  todoInputEl, 
  todoListEl,
  todoContainerEl,
  addBtnEl,
  inputBtnEvent,
  inputKeyupEvent,
  createHandler,
  createToDoElement,
  createBtn
} from './create.js';

const inputContainerEl = document.getElementById('input-container');
const inputAreaEl = document.querySelector("#input-area");
const radioAreaEl = inputContainerEl.querySelector('#radio-area');
const filterRadioBtnEls = radioAreaEl.querySelectorAll('input[name="filter]');

// function addRadioBtnEvent() {
//   for (const filterRadioBtnEl of filterRadioBtnEls) {
//     filterRadioBtnEl.addEventListener('click', onClickRadioBtn(this))
//   }
// };

// function onClickRadioBtn(event) {
//   const {value} = event.target;
//   console.log(value);
// };


async function createTodo() {
  const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'apikey': 'FcKdtJs202209',
      'username': 'KDT3_ParkYoungWoong'
    },
    body: JSON.stringify({
      title: '아침 먹기!'
    })
  })
  const json = await res.json()
  console.log(json)

  return json
}




// todo 삭제 이벤트
todoListEl.addEventListener('click', (event) => {
  const {target} = event; // 버튼 + 아이콘
  const btn = target.closest('button'); // 현재 엘리먼트에서 본인 포함 가장 가까운 조상 반환, 조상요소에 이벤트 위임
  if (!btn){return;}
  if(btn.matches('#delete-btn')) { // 쿼리셀렉터 스트링으로 선택하려는 엘리먼트가 맞는지 확인
    deleteTodo(target);
  } else if (btn.matches('#edit-btn')) {
    editTodo(target);
  } else if (btn.matches('#save-btn')) {
    saveTodo(target);
  } else if (btn.matches('#complete-btn')) {
    completeTodo(target);
  }
})


function completeTodo(target) {
  const todoDiv = target.closest('.todo');
  todoDiv.classList.toggle('done');
}

function saveTodo(target) {
  const todoDiv = target.closest('.todo');
  todoDiv.classList.remove('edit');
  const todoInputEl = todoDiv.querySelector('input');
  todoInputEl.readOnly = true;
}

function editTodo(target) {
  const todoDiv = target.closest('.todo');
  const todoInputEl = todoDiv.querySelector('input');
  todoInputEl.readOnly = false;
  todoInputEl.focus();
  todoDiv.classList.add('edit');
}

function deleteTodo(target) {
  const todoDiv = target.closest('.todo');
  todoDiv.addEventListener('transitionend', () => {
    todoDiv.remove();
  })
  todoDiv.classList.add('delete');
}




// document.addEventListener('DOMContentLoaded', () => {
//   const todoList = new todoList();
// })

