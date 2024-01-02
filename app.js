// SELECTORS
const toDoInput = document.querySelector('#todo-input');
const addBtn = document.querySelector('.add-btn')
const toDoList = document.querySelector('.todo-list');
const clearListBtn = document.querySelector('.clear-list-btn');

// EVENT LISTENERS
addBtn.addEventListener('click', addToDo);
toDoList.addEventListener('click', checkCrossEdit);
clearListBtn.addEventListener('click', clearList);

// FUNCTIONS
function addToDo(e) {
    // prevent form from refreshing
    e.preventDefault(); 

    // if input is empty, don't create todo item
    if (!toDoInput.value) {
        return;
    }

    // create new div element
    const newDiv = document.createElement('div');
    newDiv.classList.add('todo-item-container');
    
    // create new check button
    const checkBtn = document.createElement('button');
    checkBtn.classList.add('check-btn');
    checkBtn.innerHTML = '<i class="fi fi-br-check"></i>';
    newDiv.appendChild(checkBtn);

    // create new cross button
    const crossBtn = document.createElement('button');
    crossBtn.classList.add('cross-btn');
    crossBtn.innerHTML = '<i class="fi fi-br-cross"></i>';
    newDiv.appendChild(crossBtn);

    // create new edit button
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.innerHTML = '<i class="fi fi-br-pen-clip"></i>';
    newDiv.appendChild(editBtn);

    // create new li element
    const toDoItem = document.createElement('li');
    toDoItem.classList.add('todo-item');
    toDoItem.innerHTML = toDoInput.value;
    newDiv.appendChild(toDoItem);

    // append div to the todo list
    toDoList.appendChild(newDiv);

    // clear input
    toDoInput.value = "";
}

function checkCrossEdit(e) {
    const target = e.target;
    const todo = target.parentElement;

    switch (target.classList[0]) {
        // user clicks the check btn
        case 'check-btn':
            todo.classList.toggle('checked');
            todo.children[3].classList.toggle('strike');
            break;
        // user clicks the cross btn
        case 'cross-btn':
            todo.remove();
            break;
        // user clicks the edit btn
        case 'edit-btn':
            toDoInput.value = todo.children[3].innerText;
            todo.remove();
            toDoInput.focus();
            break;
        // user clicks anywhere else
        default:
            break;
    }
}

function clearList(e) {
    // array of todos
    const todos = [...toDoList.children];
    // remove each todo from list
    todos.forEach(todo => {
        todo.remove()
    });
}