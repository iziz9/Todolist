export const url = 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/'
export const {API_KEY} = process.env;
export const header = {
  'content-type': 'application/json',
  'apikey': `${API_KEY}`,
  'username': 'KDT3_KangHyeonJu'
}

export const selectors = {
  'inputText': document.querySelector("#todo-input"),
  'formEl': document.querySelector("#input-area"),
  'todoListEl': document.querySelector("#todo-list"),
  'todoContainerEl': document.getElementById("todo-container"),
  'inputContainerEl': document.getElementById('input-container'),
  'radioAreaEl': document.querySelector('#radio-area'),
  'filterRadioBtnEls': document.querySelectorAll('input[name="filter"]'),
  'deleteAllBtnEl': document.querySelector('.delete-all'),
  'loadingIconEl': document.querySelector('.loading'),
  'youtubeEl': document.querySelector('.youtube')
}

export function loadingIconVisible() {
  selectors.loadingIconEl.style.display = "flex";
}
export function loadingIconHide() {
  selectors.loadingIconEl.style.display = "none";
}