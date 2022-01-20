"use strict";

const toDoList = document.querySelector(".todo-list"); 
const input = document.querySelector(".input");
const btnAdd = document.querySelector('.btn-add');
const addNoteItem = document.querySelector("#addNoteItem");

toDoList.addEventListener('click', onToDoListClick);

btnAdd.addEventListener('click', onBtnAddClick);

function onToDoListClick(event){
    const listItem = event.target.closest(".list-item");
    const getBtn = event.target.classList.contains('delBtn');

    if(!getBtn){
        listItem.classList.toggle("green");
    }
    
    if(getBtn){
        listItem.remove();
    }
}

function onBtnAddClick (){
    const listItemText = getInputValue();
    listItemText.trim() === '' ? showErr() : addToList(listItemText);
    inputClear();
}

function addToList(message){
    const toDoItem = addNoteItem.innerHTML.replace('{{message}}', message);
    toDoList.insertAdjacentHTML("beforeend", toDoItem);
}

function getInputValue(){
    return input.value;
}

function showErr(){
    alert('you should fill the field');
    return;
}

function inputClear(){
    input.value = "";
}