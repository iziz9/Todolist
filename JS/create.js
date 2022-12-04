import { url, header, selectors } from './store.js'
import { renderTodo } from './read.js';


// submit 이벤트
const submitEvent = selectors.formEl.addEventListener('submit', async (event) => {
  event.preventDefault();
  await createHandler();
  selectors.todoListEl.textContent = '';
  renderTodo();
})

// todo 생성을 위한 post 핸들러
async function createHandler() {
  if (selectors.inputText.value.length === 0) {
    alert("내용을 입력해주세요!");
    return;
  } else {
    await postTodo(selectors.inputText.value);
  }
}

// post 요청 보내기
async function postTodo(text) {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: header,
      body: JSON.stringify({
        title: `${text}`
      })
    })
    const postResult = await res.json()
    return postResult;
  } catch (err) {
    console.log(err);
    alert("Sorry! Try again...");
  }
}

export {
  submitEvent,
  createHandler,
  postTodo
}
