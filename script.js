const addTaskBtn = document.querySelector('#add-task-btn');
const task = document.querySelector('#task-input').value.trim;
const taskList = document.querySelector('#task-list');

function addTask(){
    const li = document.createElement('li');
    if(task !== ""){
        li.textContent = task.value;
        taskList.appendChild(li);
        task.textContent = '';
    }
}



