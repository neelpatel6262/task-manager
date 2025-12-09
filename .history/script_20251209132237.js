    const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');
    const tasksList = document.getElementById('tasksList');
    const taskCount = document.getElementById('taskCount');
    const clearAllBtn = document.getElementById('clearAllBtn');
    const emptyState = document.getElementById('emptyState');
    const prioritySelect = document.getElementById('prioritySelect');

    let tasks = [];


    document.addEventListener('DOMContentLoaded', function () {
      loadTasks();
      setupEventListeners();
      updateUI();
    });


    function setupEventListeners() {

      addBtn.addEventListener('click', addTask);


      taskInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
          addTask();
        }
      });


      clearAllBtn.addEventListener('click', clearAllTasks);


      taskInput.addEventListener('input', function () {
        const isEmpty = taskInput.value.trim() === '';
        addBtn.style.opacity = isEmpty ? '0.6' : '1';
        addBtn.style.cursor = isEmpty ? 'not-allowed' : 'pointer';
      });
    }


    function addTask() {
      const taskText = taskInput.value.trim(); // Remove extra spaces
      const priority = prioritySelect.value; // Get selected priority

      if (taskText === '') {
        taskInput.style.borderColor = '#ef4444';
        taskInput.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';

        setTimeout(() => {
          taskInput.style.borderColor = '#e2e8f0';
          taskInput.style.boxShadow = 'none';
        }, 1000);

        return;
      }

      if (taskText.length > 100) {
        alert('Task is too long. Please keep it under 100 characters.');
        return;
      }

      const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false,
        priority: priority, // Add priority to task object
        createdAt: new Date().toISOString()
      };

      tasks.unshift(newTask);

      taskInput.value = '';
      prioritySelect.value = 'medium'; // Reset to default priority

      saveTasks();
      updateUI();

      addBtn.style.transform = 'scale(0.95)';
      setTimeout(() => {
        addBtn.style.transform = 'scale(1)';
      }, 150);
    }


    function toggleTask(taskId) {
      const taskIndex = tasks.findIndex(task => task.id === taskId);

      if (taskIndex !== -1) {
        tasks[taskIndex].completed = !tasks[taskIndex].completed;
        saveTasks();
        updateUI();
      }
    }


    function deleteTask(taskId) {
      const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);

      if (taskElement) {

        taskElement.classList.add('removing');


        setTimeout(() => {
          tasks = tasks.filter(task => task.id !== taskId);
          saveTasks();
          updateUI();
        }, 300);
      }
    }


    function clearAllTasks() {
      if (tasks.length === 0) return;

      const confirmed = confirm(`Are you sure you want to delete all ${tasks.length} tasks? This action cannot be undone.`);

      if (confirmed) {

        const taskElements = document.querySelectorAll('.task-item');
        taskElements.forEach((element, index) => {
          setTimeout(() => {
            element.classList.add('removing');
          }, index * 50);
        });


        setTimeout(() => {
          tasks = [];
          saveTasks();
          updateUI();
        }, 300 + (taskElements.length * 50));
      }
    }


    function updateUI() {
      renderTasks();
      updateTaskCounter();
      updateEmptyState();
      updateClearButton();
    }


    function renderTasks() {
      tasksList.innerHTML = ''; // Clear existing tasks

      tasks.forEach(task => {
        const taskElement = createTaskElement(task);
        tasksList.appendChild(taskElement);
      });
    }


    function createTaskElement(task) {
      const li = document.createElement('li');
      li.className = `task-item ${task.completed ? 'completed' : ''} priority-${task.priority}`;
      li.setAttribute('data-task-id', task.id);

      // Determine priority icon/text
      let priorityIcon = '';
      switch(task.priority) {
        case 'high':
          priorityIcon = '🔴';
          break;
        case 'medium':
          priorityIcon = '🟡';
          break;
        case 'low':
          priorityIcon = '🟢';
          break;
      }

      li.innerHTML = `
                <div class="task-priority">${priorityIcon}</div>
                <div class="task-checkbox ${task.completed ? 'checked' : ''}" 
                     onclick="toggleTask(${task.id})" 
                     role="checkbox" 
                     aria-checked="${task.completed}"
                     tabindex="0">
                </div>
                <span class="task-text">${escapeHtml(task.text)}</span>
                <button class="delete-btn" 
                        onclick="deleteTask(${task.id})" 
                        aria-label="Delete task"
                        title="Delete task">
                </button>
            `;

      const checkbox = li.querySelector('.task-checkbox');
      checkbox.addEventListener('keypress', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleTask(task.id);
        }
      });

      return li;
    }


    function updateTaskCounter() {
      const remainingTasks = tasks.filter(task => !task.completed).length;
      const totalTasks = tasks.length;

      if (totalTasks === 0) {
        taskCount.textContent = '0';
      } else if (remainingTasks === 0) {
        taskCount.textContent = '0';


        if (totalTasks > 0) {
          taskCount.parentElement.style.color = '#059669';
          setTimeout(() => {
            taskCount.parentElement.style.color = '#64748b';
          }, 2000);
        }
      } else {
        taskCount.textContent = remainingTasks;
      }
    }


    function updateEmptyState() {
      if (tasks.length === 0) {
        emptyState.classList.remove('hidden');
        tasksList.classList.add('hidden');
      } else {
        emptyState.classList.add('hidden');
        tasksList.classList.remove('hidden');
      }
    }


    function updateClearButton() {
      if (tasks.length === 0) {
        clearAllBtn.classList.add('hidden');
      } else {
        clearAllBtn.classList.remove('hidden');
      }
    }

    function saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(tasks));
      console.log('Tasks saved to localStorage:', tasks.length, 'tasks');
    }

    function loadTasks() {
      const storedTasks = localStorage.getItem('tasks');
      if (storedTasks) {
        tasks = JSON.parse(storedTasks);
      } else {
        tasks = [];
      }
      console.log('Tasks loaded from localStorage');
    }

    function escapeHtml(text) {
      const div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML;
    }


    document.addEventListener('keydown', function (e) {

      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        if (document.activeElement !== taskInput) {
          taskInput.focus();
        } else {
          addTask();
        }
      }


      if (e.key === 'Escape') {
        if (document.activeElement === taskInput) {
          taskInput.blur();
          taskInput.value = '';
        }
      }
    });

    window.addEventListener('load', function () {
      taskInput.focus();
      console.log('To-Do List App loaded successfully!');
    });



    