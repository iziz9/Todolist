import { putTodo } from "./requests";

// done 상태 변경 (리팩토링하니 수정하면 done이 풀리는 오류가....)
export function completeTodo(target) {
  const todoItem = target.closest('.todo-wrap');
  todoItem.classList.toggle('done');
  const todoInputEl = todoItem.querySelector('input');

  // todoItem.classList.contains('done')
  //   ? putTodo(todoInputEl.value, target.dataset.id, true)
  //   : putTodo(todoInputEl.value, target.dataset.id, false)

  putTodo(
    todoInputEl.value,
    target.dataset.id,
    todoItem.classList.contains('done') ? true : false
  );
}

// 텍스트 변경사항 저장
export function saveTodo(target) {
  const todoDiv = target.closest('.todo');
  todoDiv.classList.remove('edit');
  const todoInputEl = todoDiv.querySelector('input');
  if (todoInputEl.value.length >= 1) {
    todoInputEl.readOnly = true;
    putTodo(todoInputEl.value, target.dataset.id, false)
  } else {
    alert("내용을 입력해주세요")
  }
}

export function editTodo(target) {
  const todoDiv = target.closest('.todo');
  const todoInputEl = todoDiv.querySelector('input');
  todoInputEl.readOnly = false;
  todoInputEl.focus();
  todoDiv.classList.add('edit');
}

