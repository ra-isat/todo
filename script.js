"use strict";

const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed');

const todoData = [];

const render = function() {

todoList.textContent = '';
todoCompleted.textContent = '';

    // if(headerInput.value !== '') {
        todoData.forEach(function(item) {
        const li = document.createElement('li');
        li.classList.add('todo-item');

        li.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
        '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
        '</div>';
    

        if(item.completed) {
            todoCompleted.append(li);
        } else {
            todoList.append(li);
        } 
    

        const btnTodoComplete = li.querySelector('.todo-complete');
        btnTodoComplete.addEventListener('click', function(){
            item.completed = !item.completed;
            render();
        });

        const btnTodoRemove = li.querySelector('.todo-remove');
        btnTodoRemove.addEventListener('click', function(){
            li.remove();
            todoData.splice(todoData.indexOf(item), 1);
        });
    });

    // }
    
};

todoControl.addEventListener('submit', function(event){
    event.preventDefault();

    const newTodo = {
        value: headerInput.value,
        completed: false,
    };

    todoData.push(newTodo);

    headerInput.value = '';

    render();
});

render();

let word = prompt('word?', '').split('');
let j = word.length - 1;
let letter;

 for(let i = 0; i < j; i++) {
     letter = word[i];
     word[i] = word[j];
     word[j] = letter;
     j--;
 }
 console.log(word.join(''));
