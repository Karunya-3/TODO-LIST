document.addEventListener('DOMContentLoaded', function() {
    const task = document.getElementById('task');
    const Btn = document.getElementById('Btn');
    const taskList = document.getElementById('taskList');
  
    Btn.addEventListener('click', function() {
      const taskText = task.value;
      if (taskText !== '') {
        addTask(taskText);
        task.value = '';
      }
      if (taskText===''){
        alert("Enter any Task");
      }
    });
  
    function addTask(taskText) {
      const li = document.createElement('li');
      li.innerText = taskText;
      li.innerHTML += '<span class="delete-btn">DEL</span>';
      taskList.appendChild(li);
    }
  
    taskList.addEventListener('click', function(e) {
      if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.classList.add('deleted');
      } else {
        e.target.classList.toggle('completed');
      }
    });
  });
  