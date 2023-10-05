let todoList = JSON.parse(localStorage.getItem('todolist')) || [];
console.log(JSON.parse(localStorage.getItem('todolist')));
newTodo();

console.log(JSON.parse(localStorage.getItem('todolist')));

function newTodo() {
    
    document.querySelector('.js-todo-container').innerHTML = ''
    console.log(todoList.length)
    console.log(todoList)
    console.log(document.querySelector('.js-todo-container'));
    for (let i = 0; i < todoList.length; i++) { 
        let { comp, date } = todoList[i];
        document.querySelector('.js-todo-container').innerHTML += `<span class="name">${comp}</span>
            <span class="date">${date}</span>
            <button class="delete-button" onclick="
            todoList.splice(${i}, 1);
            newTodo();
            ">Delete</button>`
    }
    const storagedList = JSON.stringify(todoList);
    localStorage.setItem('todolist', storagedList)

}

function addComponent() {
    const comp = document.querySelector('.js-input').value
    const date = document.querySelector('.js-date').value
    const obj = {
        comp,
        date
    }
    todoList.push(obj);
    newTodo()
}