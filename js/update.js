import { putTodo } from "./requests";

// done 상태 변경
export function completeTodo(target) {
  const todoItem = target.closest('.todo-wrap');
  todoItem.classList.toggle('done');
  const todoInputEl = todoItem.querySelector('input');

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
  todoInputEl.readOnly = true;
  putTodo(todoInputEl.value, target.dataset.id, false);
}

export function editTodo(target) {
  const todoDiv = target.closest('.todo');
  const todoInputEl = todoDiv.querySelector('input');
  todoInputEl.readOnly = false;
  todoInputEl.focus();
  todoDiv.classList.add('edit');
}

