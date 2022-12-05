import { renderTodo } from './read.js';
import { filterClickEvent } from './filter.js'
import { deleteEachItem } from './delete.js';
import { selectors } from './store.js'
import { completeTodo, saveTodo, editTodo } from './update.js';
import { submitEvent, createHandler, postTodo } from './create.js';

// 초기화
filterClickEvent();
renderTodo();

// 리스트 버튼 클릭 이벤트
selectors.todoListEl.addEventListener('click', (event) => {
  const { target } = event; // 버튼 + 아이콘
  const btn = target.closest('button'); // 현재 엘리먼트에서 본인 포함 가장 가까운 조상 반환, 조상요소에 이벤트 위임
  if (!btn) { return; }
  if (btn.matches('#delete-btn')) { // 선택하려는 엘리먼트가 맞는지 확인
    deleteEachItem(btn.dataset.id);
  } else if (btn.matches('#edit-btn')) {
    editTodo(btn);
  } else if (btn.matches('#save-btn')) {
    saveTodo(btn);
  } else if (btn.matches('#complete-btn')) {
    completeTodo(btn);
  }
})
