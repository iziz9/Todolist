import API_KEY from './apikey.js';

export const url = 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/'

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
}
