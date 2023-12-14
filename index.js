var taskCounter = 1; // Initialize a counter variable
function addTask() {
    // Get the input field and vlaue
    var taskInput = document.getElementById('task');
    var taskList = document.getElementById('task-list');

    if( taskInput.value.trim() !== '') {
        var newTask = document.createElement('li');
        newTask.textContent = taskCounter + '.' + taskInput.value;
        taskList.appendChild(newTask);
        taskInput.value = '';
        taskCounter++;

        newTask.addEventListener('click', function() {
            newTask.classList.toggle ('completed');
        });
    }

    newTask.addEventListener('contextmenu',function(e) {
        e.preventDefault();
        newTask.remove();
    });


}

