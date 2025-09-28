
    // DOM Elements - Get references to HTML elements we need to interact with
    const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');
    const tasksList = document.getElementById('tasksList');
    const taskCount = document.getElementById('taskCount');
    const clearAllBtn = document.getElementById('clearAllBtn');
    const emptyState = document.getElementById('emptyState');

    // Tasks array - This stores all our tasks in memory
    let tasks = [];

    // Initialize the app when DOM is fully loaded
    document.addEventListener('DOMContentLoaded', function () {
      loadTasks();        // Load saved tasks from memory (removed localStorage)
      setupEventListeners(); // Set up all click and keyboard events
      updateUI();         // Update the display
    });

    // Event Listeners - Set up all the interactions
    function setupEventListeners() {
      // Add task when button is clicked
      addBtn.addEventListener('click', addTask);

      // Add task when Enter key is pressed in input field
      taskInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
          addTask();
        }
      });

      // Clear all tasks when button is clicked
      clearAllBtn.addEventListener('click', clearAllTasks);

      // Visual feedback when typing in input
      taskInput.addEventListener('input', function () {
        const isEmpty = taskInput.value.trim() === '';
        addBtn.style.opacity = isEmpty ? '0.6' : '1';
        addBtn.style.cursor = isEmpty ? 'not-allowed' : 'pointer';
      });
    }

    // Add new task function
    function addTask() {
      const taskText = taskInput.value.trim(); // Remove extra spaces

      // Validation: Check if input is empty
      if (taskText === '') {
        // Show red border for error feedback
        taskInput.style.borderColor = '#ef4444';
        taskInput.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';

        // Reset border color after 1 second
        setTimeout(() => {
          taskInput.style.borderColor = '#e2e8f0';
          taskInput.style.boxShadow = 'none';
        }, 1000);

        return; // Exit function if validation fails
      }

      // Validation: Check if task is too long
      if (taskText.length > 100) {
        alert('Task is too long. Please keep it under 100 characters.');
        return;
      }

      // Create new task object with unique ID
      const newTask = {
        id: Date.now(),           // Unique ID based on current time
        text: taskText,           // The task description
        completed: false,         // Whether task is done
        createdAt: new Date().toISOString() // When task was created
      };

      // Add new task to the beginning of array (newest first)
      tasks.unshift(newTask);

      // Clear the input field
      taskInput.value = '';

      // Save tasks and update display
      saveTasks();
      updateUI();

      // Button animation feedback
      addBtn.style.transform = 'scale(0.95)';
      setTimeout(() => {
        addBtn.style.transform = 'scale(1)';
      }, 150);
    }

    // Toggle task completion (check/uncheck)
    function toggleTask(taskId) {
      const taskIndex = tasks.findIndex(task => task.id === taskId);

      if (taskIndex !== -1) {
        tasks[taskIndex].completed = !tasks[taskIndex].completed;
        saveTasks();
        updateUI();
      }
    }

    // Delete a specific task
    function deleteTask(taskId) {
      const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);

      if (taskElement) {
        // Add slide-out animation
        taskElement.classList.add('removing');

        // Remove from array after animation completes
        setTimeout(() => {
          tasks = tasks.filter(task => task.id !== taskId);
          saveTasks();
          updateUI();
        }, 300);
      }
    }

    // Clear all tasks with confirmation
    function clearAllTasks() {
      if (tasks.length === 0) return; // Do nothing if no tasks

      const confirmed = confirm(`Are you sure you want to delete all ${tasks.length} tasks? This action cannot be undone.`);

      if (confirmed) {
        // Animate all tasks sliding out
        const taskElements = document.querySelectorAll('.task-item');
        taskElements.forEach((element, index) => {
          setTimeout(() => {
            element.classList.add('removing');
          }, index * 50); // Stagger the animations
        });

        // Clear tasks after animations complete
        setTimeout(() => {
          tasks = [];
          saveTasks();
          updateUI();
        }, 300 + (taskElements.length * 50));
      }
    }

    // Update all UI elements
    function updateUI() {
      renderTasks();       // Show all tasks
      updateTaskCounter();  // Update remaining tasks count
      updateEmptyState();   // Show/hide "no tasks" message
      updateClearButton();  // Show/hide clear all button
    }

    // Render all tasks in the list
    function renderTasks() {
      tasksList.innerHTML = ''; // Clear existing tasks

      tasks.forEach(task => {
        const taskElement = createTaskElement(task);
        tasksList.appendChild(taskElement);
      });
    }

    // Create HTML element for a single task
    function createTaskElement(task) {
      const li = document.createElement('li');
      li.className = `task-item ${task.completed ? 'completed' : ''}`;
      li.setAttribute('data-task-id', task.id);

      // Create the HTML structure for the task
      li.innerHTML = `
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

      // Add keyboard support for accessibility
      const checkbox = li.querySelector('.task-checkbox');
      checkbox.addEventListener('keypress', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleTask(task.id);
        }
      });

      return li;
    }

    // Update the task counter display
    function updateTaskCounter() {
      const remainingTasks = tasks.filter(task => !task.completed).length;
      const totalTasks = tasks.length;

      if (totalTasks === 0) {
        taskCount.textContent = '0';
      } else if (remainingTasks === 0) {
        taskCount.textContent = '0';

        // Celebration when all tasks are completed
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

    // Show/hide empty state message
    function updateEmptyState() {
      if (tasks.length === 0) {
        emptyState.classList.remove('hidden');
        tasksList.classList.add('hidden');
      } else {
        emptyState.classList.add('hidden');
        tasksList.classList.remove('hidden');
      }
    }

    // Show/hide clear all button
    function updateClearButton() {
      if (tasks.length === 0) {
        clearAllBtn.classList.add('hidden');
      } else {
        clearAllBtn.classList.remove('hidden');
      }
    }

    // Save tasks to memory (localStorage removed for compatibility)
    function saveTasks() {
      // In a real application, you might save to a server or database
      // For now, tasks only persist during the browser session
      console.log('Tasks saved to memory:', tasks.length, 'tasks');
    }

    // Load tasks from memory (localStorage removed for compatibility)
    function loadTasks() {
      // In a real application, you might load from a server or database
      // For now, starting with empty tasks array
      tasks = [];
      console.log('Tasks loaded from memory');
    }

    // Security function to prevent XSS attacks
    function escapeHtml(text) {
      const div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML;
    }

    // Keyboard shortcuts for better user experience
    document.addEventListener('keydown', function (e) {
      // Ctrl/Cmd + Enter to add task quickly
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        if (document.activeElement !== taskInput) {
          taskInput.focus();
        } else {
          addTask();
        }
      }

      // Escape key to clear input or unfocus
      if (e.key === 'Escape') {
        if (document.activeElement === taskInput) {
          taskInput.blur();
          taskInput.value = '';
        }
      }
    });

    // Auto-focus input when page loads
    window.addEventListener('load', function () {
      taskInput.focus();
      console.log('To-Do List App loaded successfully!');
    });
    

