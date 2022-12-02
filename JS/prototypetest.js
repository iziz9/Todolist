
const Todo = new Todo();

Todo.prototype.api = async function (method) {
  const res = await fetch(url, {
    method: 'POST',
    headers: header
  })
}