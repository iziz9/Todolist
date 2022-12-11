import { renderTodo } from './render.js';
import { filterClickEvent } from './filter.js'
import { deleteEachItem } from './delete.js';
import { selectors } from './store.js'
import { completeTodo, saveTodo, editTodo } from './update.js';
import { randomPlaylist } from './playlist.js';
import { postTodo, deleteTodo } from './requests.js';

// 초기화
filterClickEvent();
renderTodo();
selectors.youtubeEl.addEventListener('click', (e) => {
  randomPlaylist();
})

// submit 이벤트 발생 시
export const submitEvent = selectors.formEl.addEventListener('submit', async (event) => {
  event.preventDefault();
  await createHandler();
  selectors.todoListEl.textContent = '';
  renderTodo();
})

// todo 생성을 위한 post 핸들러
export async function createHandler() {
  if (selectors.inputText.value.length === 0) {
    return alert("Please enter your wish!");
  }
  await postTodo(selectors.inputText.value);
}

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
