const addTaskBtn = document.querySelector('#add-task-btn');
const task = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');


function addTask(){
    const li = document.createElement('li');
  
   const html = `<li><input id="tick-completed" type="checkbox">${task.value}<button id="dlt-btn">Delete</button></li>`;

    if(task.value !== ''){
        taskList.insertAdjacentHTML("afterend", html);
        
    }else{
        alert('Please enter a task to your list!');
    }
    task.value = '';
}



