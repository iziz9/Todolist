import { url, header } from './store.js';

// post API 요청
export async function postTodo(text) {
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
    alert("Sorry! Try again...");
  }
}

// delete API 요청
export async function deleteTodo(id) {
  try {
    const res = await fetch(url + `${id}`, {
      method: 'DELETE',
      headers: header
    })
    return res;
  } catch (err) {
    alert("Sorry! Try again...")
  }
}

// get API 요청
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

// put API 요청
export async function putTodo(text, id, done) {
  try {
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
  } catch (err) {
    alert("Sorry! Try again...")
  }
}