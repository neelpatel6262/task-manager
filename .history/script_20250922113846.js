// DOM Elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const tasksList = document.getElementById('tasksList');
const taskCount = document.getElementById('taskCount');
const clearAllBtn = document.getElementById('clearAllBtn');
const emptyState = document.getElementById('emptyState');

// Tasks array
let tasks = [];

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    loadTasks();
    setupEventListeners();
    updateUI();
});

// Event Listeners
function setupEventListeners() {
    // Add task button click
    addBtn.addEventListener('click', addTask);
    
    // Enter key press in input
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
    
    // Clear all tasks button
    clearAllBtn.addEventListener('click', clearAllTasks);
    
    // Input validation and button state
    taskInput.addEventListener('input', function() {
        const isEmpty = taskInput.value.trim() === '';
        addBtn.style.opacity = isEmpty ? '0.6' : '1';
        addBtn.style.cursor = isEmpty ? 'not-allowed' : 'pointer';
    });
}

// Add new task
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        // Show error animation
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
    
    // Create new task object
    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false,
        createdAt: new Date().toISOString()
    };
    
    // Add to tasks array
    tasks.unshift(newTask); // Add to beginning for newest first
    
    // Clear input
    taskInput.value = '';
    
    // Save and update UI
    saveTasks();
    updateUI();
    
    // Success feedback
    addBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        addBtn.style.transform = 'scale(1)';
    }, 150);
}

// Toggle task completion
function toggleTask(taskId) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    
    if (taskIndex !== -1) {
        tasks[taskIndex].completed = !tasks[taskIndex].completed;
        saveTasks();
        updateUI();
    }
}

// Delete task
function deleteTask(taskId) {
    const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
    
    if (taskElement) {
        // Add removing animation
        taskElement.classList.add('removing');
        
        // Remove from array after animation
        setTimeout(() => {
            tasks = tasks.filter(task => task.id !== taskId);
            saveTasks();
            updateUI();
        }, 300);
    }
}

// Clear all tasks
function clearAllTasks() {
    if (tasks.length === 0) return;
    
    const confirmed = confirm(`Are you sure you want to delete all ${tasks.length} tasks? This action cannot be undone.`);
    
    if (confirmed) {
        // Add removing animation to all tasks
        const taskElements = document.querySelectorAll('.task-item');
        taskElements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('removing');
            }, index * 50);
        });
        
        // Clear tasks after animation
        setTimeout(() => {
            tasks = [];
            saveTasks();
            updateUI();
        }, 300 + (taskElements.length * 50));
    }
}

// Update UI
function updateUI() {
    renderTasks();
    updateTaskCounter();
    updateEmptyState();
    updateClearButton();
}

// Render tasks list
function renderTasks() {
    tasksList.innerHTML = '';
    
    tasks.forEach(task => {
        const taskElement = createTaskElement(task);
        tasksList.appendChild(taskElement);
    });
}

// Create task element
function createTaskElement(task) {
    const li = document.createElement('li');
    li.className = `task-item ${task.completed ? 'completed' : ''}`;
    li.setAttribute('data-task-id', task.id);
    
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
    
    // Add keyboard support for checkbox
    const checkbox = li.querySelector('.task-checkbox');
    checkbox.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleTask(task.id);
        }
    });
    
    return li;
}

// Update task counter
function updateTaskCounter() {
    const remainingTasks = tasks.filter(task => !task.completed).length;
    const totalTasks = tasks.length;
    
    if (totalTasks === 0) {
        taskCount.textContent = '0';
    } else if (remainingTasks === 0) {
        taskCount.textContent = '0';
        
        // Celebration animation when all tasks are completed
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

// Update empty state visibility
function updateEmptyState() {
    if (tasks.length === 0) {
        emptyState.classList.remove('hidden');
        tasksList.classList.add('hidden');
    } else {
        emptyState.classList.add('hidden');
        tasksList.classList.remove('hidden');
    }
}

// Update clear all button visibility
function updateClearButton() {
    if (tasks.length === 0) {
        clearAllBtn.classList.add('hidden');
    } else {
        clearAllBtn.classList.remove('hidden');
    }
}

// Save tasks to localStorage
function saveTasks() {
    try {
        localStorage.setItem('todoTasks', JSON.stringify(tasks));
    } catch (error) {
        console.error('Error saving tasks to localStorage:', error);
        alert('Unable to save tasks. Your browser might have storage limitations.');
    }
}

// Load tasks from localStorage
function loadTasks() {
    try {
        const savedTasks = localStorage.getItem('todoTasks');
        if (savedTasks) {
            tasks = JSON.parse(savedTasks);
            
            // Validate loaded data
            tasks = tasks.filter(task => 
                task && 
                typeof task.id === 'number' && 
                typeof task.text === 'string' && 
                typeof task.completed === 'boolean'
            );
        }
    } catch (error) {
        console.error('Error loading tasks from localStorage:', error);
        tasks = [];
        alert('Unable to load saved tasks. Starting fresh.');
    }
}

// Utility function to escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + Enter to add task
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        if (document.activeElement !== taskInput) {
            taskInput.focus();
        } else {
            addTask();
        }
    }
    
    // Escape to clear input or unfocus
    if (e.key === 'Escape') {
        if (document.activeElement === taskInput) {
            taskInput.blur();
            taskInput.value = '';
        }
    }
});

// Focus input on page load
window.addEventListener('load', function() {
    taskInput.focus();
});

// Service worker registration for offline support (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // You can add service worker registration here if needed
        console.log('To-Do List App loaded successfully!');
    });
}