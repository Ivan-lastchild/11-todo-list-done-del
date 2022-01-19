"use strict";

const toDoList = document.querySelector(".todo-list"); 
const input = document.querySelector(".input");
const btnAdd = document.querySelector('.btn-add');
const addNoteItem = document.querySelector("#addNoteItem");

toDoList.addEventListener('click', onToDoListClick);

btnAdd.addEventListener('click', onBtnAddClick);

function onToDoListClick(event){
    const listItem = event.target.closest(".list-item");

    removeItem(event, listItem);
    doneItem(event, listItem);
}

function onBtnAddClick (){
    const listItemText = getInputValue();
    listItemText.trim() === '' ? showErr() : addToList(listItemText);
    inputClear();
}

function removeItem(e, elemRemove){
    if(e.target.classList.contains('delBtn')){
        elemRemove.remove();
    }
}

function doneItem(e, paintElem){
    if(!e.target.classList.contains('delBtn')){
        paintElem.classList.toggle("green");
    }
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