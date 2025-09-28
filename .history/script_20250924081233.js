// DOM Elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const tasksList = document.getElementById('tasksList');
const taskCount = document.getElementById('taskCount');
const clearAllBtn = document.getElementById('clearAllBtn');
const emptyState = document.getElementById('emptyState');

// AI Elements
const aiToggleBtn = document.getElementById('aiToggleBtn');
const aiFeatures = document.getElementById('aiFeatures');
const aiPrompt = document.getElementById('aiPrompt');
const generateTasks = document.getElementById('generateTasks');
const analyzeTasksBtn = document.getElementById('analyzeTasksBtn');
const taskAnalysis = document.getElementById('taskAnalysis');
const getAdviceBtn = document.getElementById('getAdviceBtn');
const productivityTips = document.getElementById('productivityTips');
const prioritizeBtn = document.getElementById('prioritizeBtn');
const aiSuggestBtn = document.getElementById('aiSuggestBtn');
const aiSuggestions = document.getElementById('aiSuggestions');
const suggestionsList = document.getElementById('suggestionsList');
const closeSuggestions = document.getElementById('closeSuggestions');
const smartSortBtn = document.getElementById('smartSortBtn');
const quickStartBtn = document.getElementById('quickStartBtn');
const aiModal = document.getElementById('aiModal');
const loadingText = document.getElementById('loadingText');

// Tasks array with enhanced structure
let tasks = [];

// AI Features Database
const aiDatabase = {
  taskTemplates: {
    'birthday party': [
      'Create guest list',
      'Send invitations',
      'Book venue',
      'Order cake',
      'Plan decorations',
      'Prepare playlist',
      'Buy gifts',
      'Arrange catering'
    ],
    'workout routine': [
      'Set fitness goals',
      'Choose workout schedule',
      'Buy gym membership',
      'Get workout clothes',
      'Plan meal prep',
      'Track progress',
      'Find workout buddy',
      'Schedule rest days'
    ],
    'study plan': [
      'Create study schedule',
      'Organize study materials',
      'Set learning goals',
      'Find study location',
      'Join study group',
      'Take practice tests',
      'Review notes daily',
      'Plan breaks'
    ],
    'travel planning': [
      'Research destination',
      'Book flights',
      'Reserve accommodation',
      'Plan itinerary',
      'Get travel insurance',
      'Pack luggage',
      'Exchange currency',
      'Check passport validity'
    ],
    'home improvement': [
      'Set budget',
      'Research contractors',
      'Get permits',
      'Buy materials',
      'Create timeline',
      'Prepare workspace',
      'Safety preparations',
      'Plan cleanup'
    ],
    'job search': [
      'Update resume',
      'Create LinkedIn profile',
      'Research companies',
      'Apply to positions',
      'Prepare for interviews',
      'Network with professionals',
      'Follow up on applications',
      'Practice interview questions'
    ],
    'wedding planning': [
      'Set wedding budget',
      'Choose venue',
      'Select vendors',
      'Send invitations',
      'Plan menu',
      'Book photographer',
      'Choose decorations',
      'Arrange transportation'
    ]
  },
  
  productivityTips: [
    '🎯 Use the 2-minute rule: If a task takes less than 2 minutes, do it now!',
    '🍅 Try the Pomodoro Technique: Work for 25 minutes, then take a 5-minute break.',
    '📝 Write down 3 most important tasks each morning and tackle them first.',
    '🚫 Eliminate distractions: Turn off notifications during focused work time.',
    '⚡ Batch similar tasks together to maintain focus and efficiency.',
    '🎉 Celebrate small wins to maintain motivation throughout the day.',
    '🌅 Tackle your most challenging task when your energy is highest.',
    '📱 Use technology wisely: Let apps help, but don\'t let them overwhelm you.',
    '🔄 Review and adjust your goals weekly to stay on track.',
    '💤 Take regular breaks to prevent burnout and maintain creativity.',
    '🎨 Use visual aids like mind maps or kanban boards to organize thoughts.',
    '🏃‍♀️ Start with small, achievable goals to build momentum.',
    '🤝 Delegate tasks when possible to focus on what matters most.'
  ],

  taskSuggestions: {
    work: [
      'Schedule team meeting',
      'Review project timeline',
      'Update documentation',
      'Respond to emails',
      'Prepare presentation',
      'Call client',
      'Submit report',
      'Plan next sprint'
    ],
    health: [
      'Drink 8 glasses of water',
      'Take a 20-minute walk',
      'Do stretching exercises',
      'Prepare healthy meal',
      'Schedule doctor checkup',
      'Meditate for 10 minutes',
      'Get 8 hours of sleep',
      'Take vitamins'
    ],
    personal: [
      'Call family member',
      'Read for 30 minutes',
      'Organize workspace',
      'Plan weekend activities',
      'Update budget',
      'Write in journal',
      'Clean living space',
      'Practice hobby'
    ],
    learning: [
      'Watch educational video',
      'Practice new skill',
      'Read industry articles',
      'Take online course',
      'Join webinar',
      'Complete tutorial',
      'Review notes',
      'Set learning goals'
    ],
    home: [
      'Clean living room',
      'Do laundry',
      'Organize closet',
      'Pay bills',
      'Water plants',
      'Grocery shopping',
      'Fix broken items',
      'Plan meals'
    ]
  }
};

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
  loadTasks();
  setupEventListeners();
  updateUI();
});

// Event Listeners Setup
function setupEventListeners() {
  // Basic task functionality
  addBtn.addEventListener('click', addTask);
  taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      addTask();
    }
  });
  clearAllBtn.addEventListener('click', clearAllTasks);
  taskInput.addEventListener('input', handleInputChange);

  // AI Features
  aiToggleBtn.addEventListener('click', toggleAIPanel);
  generateTasks.addEventListener('click', generateAITasks);
  analyzeTasksBtn.addEventListener('click', analyzeMyTasks);
  getAdviceBtn.addEventListener('click', getProductivityAdvice);
  prioritizeBtn.addEventListener('click', prioritizeTasks);
  aiSuggestBtn.addEventListener('click', showAISuggestions);
  closeSuggestions.addEventListener('click', hideAISuggestions);
  smartSortBtn.addEventListener('click', smartSortTasks);
  quickStartBtn.addEventListener('click', quickStartWithAI);
}

// Input change handler with AI integration
function handleInputChange() {
  const isEmpty = taskInput.value.trim() === '';
  addBtn.style.opacity = isEmpty ? '0.6' : '1';
  addBtn.style.cursor = isEmpty ? 'not-allowed' : 'pointer';
  
  // Hide suggestions when input is cleared
  if (isEmpty) {
    hideAISuggestions();
  }
}

// Toggle AI Panel
function toggleAIPanel() {
  const isExpanded = aiFeatures.classList.contains('expanded');
  
  if (isExpanded) {
    aiFeatures.classList.remove('expanded');
    aiToggleBtn.classList.remove('expanded');
  } else {
    aiFeatures.classList.add('expanded');
    aiToggleBtn.classList.add('expanded');
  }
}

// Show AI Modal
function showAIModal(message = 'AI is thinking...') {
  loadingText.textContent = message;
  aiModal.classList.remove('hidden');
}

// Hide AI Modal
function hideAIModal() {
  aiModal.classList.add('hidden');
}

// Generate AI Tasks
async function generateAITasks() {
  const prompt = aiPrompt.value.trim().toLowerCase();
  
  if (!prompt) {
    alert('Please describe your goal to generate tasks!');
    return;
  }

  showAIModal('Generating smart tasks for you...');
  
  // Simulate AI processing delay
  setTimeout(() => {
    let generatedTasks = [];
    
    // Find matching template or create generic tasks
    const matchingTemplate = Object.keys(aiDatabase.taskTemplates).find(key => 
      prompt.includes(key) || key.includes(prompt)
    );
    
    if (matchingTemplate) {
      generatedTasks = aiDatabase.taskTemplates[matchingTemplate].slice(0, 6);
    } else {
      // Generate generic tasks based on keywords
      generatedTasks = generateGenericTasks(prompt);
    }
    
    // Add generated tasks to the list
    generatedTasks.forEach((taskText, index) => {
      setTimeout(() => {
        const newTask = {
          id: Date.now() + index,
          text: taskText,
          completed: false,
          priority: assignSmartPriority(taskText, index),
          createdAt: new Date().toISOString(),
          aiGenerated: true
        };
        
        tasks.unshift(newTask);
        saveTasks();
        updateUI();
        
        // Add special animation for AI-generated tasks
        const taskElement = document.querySelector(`[data-task-id="${newTask.id}"]`);
        if (taskElement) {
          taskElement.classList.add('ai-generating');
          setTimeout(() => {
            taskElement.classList.remove('ai-generating');
          }, 2000);
        }
      }, index * 200);
    });
    
    hideAIModal();
    aiPrompt.value = '';
    
    // Show success message
    setTimeout(() => {
      alert(`🎉 Generated ${generatedTasks.length} smart tasks for you!`);
    }, generatedTasks.length * 200 + 500);
    
  }, 2000);
}

// Generate generic tasks based on keywords
function generateGenericTasks(prompt) {
  const keywords = prompt.split(' ');
  const tasks = [];
  
  // Basic task templates
  const templates = [
    `Research about ${prompt}`,
    `Create plan for ${prompt}`,
    `Set goals for ${prompt}`,
    `Find resources for ${prompt}`,
    `Schedule time for ${prompt}`,
    `Review progress on ${prompt}`
  ];
  
  return templates.slice(0, 4);
}

// Assign smart priority based on task content and position
function assignSmartPriority(taskText, index) {
  const highPriorityWords = ['urgent', 'important', 'deadline', 'meeting', 'call', 'email', 'schedule', 'book'];
  const mediumPriorityWords = ['plan', 'prepare', 'review', 'update', 'create', 'organize'];
  
  const text = taskText.toLowerCase();
  
  if (highPriorityWords.some(word => text.includes(word)) || index < 2) {
    return 'high';
  } else if (mediumPriorityWords.some(word => text.includes(word)) || index < 4) {
    return 'medium';
  } else {
    return 'low';
  }
}

// Analyze My Tasks
function analyzeMyTasks() {
  if (tasks.length === 0) {
    taskAnalysis.innerHTML = '<p style="color: #64748b;">📝 Add some tasks first to get insights!</p>';
    return;
  }

  showAIModal('Analyzing your productivity patterns...');
  
  setTimeout(() => {
    const completedTasks = tasks.filter(task => task.completed).length;
    const pendingTasks = tasks.length - completedTasks;
    const completionRate = Math.round((completedTasks / tasks.length) * 100);
    
    const highPriorityTasks = tasks.filter(task => task.priority === 'high').length;
    const avgTaskLength = Math.round(tasks.reduce((sum, task) => sum + task.text.length, 0) / tasks.length);
    
    let analysis = `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
        <div style="text-align: center; padding: 8px; background: #ddd6fe; border-radius: 8px;">
          <div style="font-size: 1.5rem; font-weight: 600; color: #6366f1;">${completionRate}%</div>
          <div style="font-size: 0.75rem; color: #64748b;">Completion Rate</div>
        </div>
        <div style="text-align: center; padding: 8px; background: #fef3c7; border-radius: 8px;">
          <div style="font-size: 1.5rem; font-weight: 600; color: #d97706;">${pendingTasks}</div>
          <div style="font-size: 0.75rem; color: #64748b;">Pending Tasks</div>
        </div>
      </div>
      <p><strong>🎯 Insights:</strong></p>
      <ul style="margin-left: 16px; margin-top: 8px;">
    `;
    
    if (completionRate >= 70) {
      analysis += '<li>✅ Great job! You\'re completing most of your tasks.</li>';
    } else if (completionRate >= 40) {
      analysis += '<li>⚡ Good progress! Try to focus on fewer tasks at once.</li>';
    } else {
      analysis += '<li>🎯 Consider breaking large tasks into smaller, manageable pieces.</li>';
    }
    
    if (highPriorityTasks > 3) {
      analysis += '<li>⚠️ You have many high-priority tasks. Consider if they\'re all truly urgent.</li>';
    }
    
    if (avgTaskLength > 50) {
      analysis += '<li>📝 Your tasks are quite detailed. Consider shorter, action-oriented descriptions.</li>';
    }
    
    analysis += '</ul>';
    
    taskAnalysis.innerHTML = analysis;
    hideAIModal();
  }, 1500);
}

// Get Productivity Advice
function getProductivityAdvice() {
  showAIModal('Finding personalized productivity tips...');
  
  setTimeout(() => {
    const randomTip = aiDatabase.productivityTips[Math.floor(Math.random() * aiDatabase.productivityTips.length)];
    
    productivityTips.innerHTML = `
      <div style="background: linear-gradient(135deg, #ddd6fe 0%, #e0e7ff 100%); padding: 16px; border-radius: 8px; margin-top: 12px;">
        <p style="font-size: 0.9rem; line-height: 1.6; margin: 0;">${randomTip}</p>
        <button onclick="getProductivityAdvice()" style="margin-top: 12px; padding: 6px 12px; background: #6366f1; color: white; border: none; border-radius: 6px; font-size: 0.8rem; cursor: pointer;">Get Another Tip</button>
      </div>
    `;
    
    hideAIModal();
  }, 1000);
}

// Prioritize Tasks using AI
function prioritizeTasks() {
  if (tasks.length === 0) {
    alert('Add some tasks first to prioritize them!');
    return;
  }

  showAIModal('AI is analyzing and prioritizing your tasks...');
  
  setTimeout(() => {
    // AI-based priority assignment
    tasks.forEach((task, index) => {
      if (!task.priority) {
        task.priority = assignSmartPriority(task.text, index);
      }
    });
    
    // Sort tasks by priority: high -> medium -> low
    const priorityOrder = { 'high': 3, 'medium': 2, 'low': 1 };
    tasks.sort((a, b) => {
      if (a.completed && !b.completed) return 1;
      if (!a.completed && b.completed) return -1;
      return (priorityOrder[b.priority] || 0) - (priorityOrder[a.priority] || 0);
    });
    
    saveTasks();
    updateUI();
    hideAIModal();
    
    alert('🎯 Tasks have been intelligently prioritized and sorted!');
  }, 2000);
}

// Show AI Suggestions
function showAISuggestions() {
  const inputValue = taskInput.value.trim().toLowerCase();
  
  if (inputValue.length < 2) {
    // Show category-based suggestions
    showCategorySuggestions();
  } else {
    // Show context-aware suggestions
    showContextSuggestions(inputValue);
  }
  
  aiSuggestions.classList.remove('hidden');
}

// Hide AI Suggestions
function hideAISuggestions() {
  aiSuggestions.classList.add('hidden');
}

// Show category-based suggestions
function showCategorySuggestions() {
  const categories = Object.keys(aiDatabase.taskSuggestions);
  let suggestionsHTML = '';
  
  categories.forEach(category => {
    const suggestions = aiDatabase.taskSuggestions[category].slice(0, 2);
    suggestionsHTML += `<div style="margin-bottom: 12px;">
      <div style="font-size: 0.8rem; font-weight: 600; color: #6366f1; margin-bottom: 4px; text-transform: uppercase;">${category}</div>
    `;
    
    suggestions.forEach(suggestion => {
      const priority = assignSmartPriority(suggestion, 0);
      suggestionsHTML += `
        <div class="suggestion-item" onclick="applySuggestion('${suggestion}')">
          <span>${suggestion}</span>
          <span class="suggestion-priority priority-${priority}">${priority}</span>
        </div>
      `;
    });
    
    suggestionsHTML += '</div>';
  });
  
  suggestionsList.innerHTML = suggestionsHTML;
}

// Show context-aware suggestions
function showContextSuggestions(inputValue) {
  const suggestions = [];
  
  // Find related suggestions based on input
  Object.values(aiDatabase.taskSuggestions).flat().forEach(suggestion => {
    if (suggestion.toLowerCase().includes(inputValue) || 
        inputValue.split(' ').some(word => suggestion.toLowerCase().includes(word))) {
      suggestions.push(suggestion);
    }
  });
  
  // Add some generic completions
  const completions = [
    `${inputValue} - set deadline`,
    `${inputValue} - research options`,
    `${inputValue} - make a plan`,
    `${inputValue} - find resources`
  ];
  
  suggestions.push(...completions.slice(0, 3));
  
  let suggestionsHTML = '';
  suggestions.slice(0, 6).forEach(suggestion => {
    const priority = assignSmartPriority(suggestion, 0);
    suggestionsHTML += `
      <div class="suggestion-item" onclick="applySuggestion('${suggestion}')">
        <span>${suggestion}</span>
        <span class="suggestion-priority priority-${priority}">${priority}</span>
      </div>
    `;
  });
  
  suggestionsList.innerHTML = suggestionsHTML || '<p style="text-align: center; color: #64748b; padding: 16px;">No suggestions found</p>';
}

// Apply suggestion to input
function applySuggestion(suggestion) {
  taskInput.value = suggestion;
  hideAISuggestions();
  taskInput.focus();
}

// Smart Sort Tasks
function smartSortTasks() {
  if (tasks.length === 0) {
    alert('Add some tasks first to sort them!');
    return;
  }

  showAIModal('AI is organizing your tasks optimally...');
  
  setTimeout(() => {
    // Advanced sorting algorithm
    tasks.sort((a, b) => {
      // Completed tasks go to bottom
      if (a.completed && !b.completed) return 1;
      if (!a.completed && b.completed) return -1;
      
      // Among incomplete tasks, sort by priority, then by creation date
      const priorityOrder = { 'high': 3, 'medium': 2, 'low': 1 };
      const priorityDiff = (priorityOrder[b.priority] || 0) - (priorityOrder[a.priority] || 0);
      
      if (priorityDiff !== 0) return priorityDiff;
      
      // If same priority, newer tasks first
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    
    saveTasks();
    updateUI();
    hideAIModal();
    
    alert('🧠 Tasks have been intelligently organized for optimal productivity!');
  }, 1500);
}

// Quick Start with AI
function quickStartWithAI() {
  const prompts = [
    'daily routine',
    'work productivity',
    'personal development',
    'healthy lifestyle',
    'learning goals'
  ];
  
  const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
  aiPrompt.value = randomPrompt;
  
  if (!aiFeatures.classList.contains('expanded')) {
    toggleAIPanel();
  }
  
  setTimeout(() => {
    generateAITasks();
  }, 500);
}

// Enhanced Add Task with AI features
function addTask() {
  const taskText = taskInput.value.trim();
  
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
    priority: assignSmartPriority(taskText, 0),
    createdAt: new Date().toISOString(),
    aiGenerated: false
  };
  
  tasks.unshift(newTask);
  taskInput.value = '';
  saveTasks();
  updateUI();
  hideAISuggestions();
  
  // Button animation
  addBtn.style.transform = 'scale(0.95)';
  setTimeout(() => {
    addBtn.style.transform = 'scale(1)';
  }, 150);
}

// Toggle Task with priority preservation
function toggleTask(taskId) {
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  
  if (taskIndex !== -1) {
    tasks[taskIndex].completed = !tasks[taskIndex].completed;
    saveTasks();
    updateUI();
  }
}

// Delete Task
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

// Clear All Tasks
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

// Update UI
function updateUI() {
  renderTasks();
  updateTaskCounter();
  updateEmptyState();
  updateClearButton();
}

// Render Tasks with priority support
function renderTasks() {
  tasksList.innerHTML = '';
  
  tasks.forEach(task => {
    const taskElement = createTaskElement(task);
    tasksList.appendChild(taskElement);
  });
}

// Create Task Element with AI enhancements
function createTaskElement(task) {
  const li = document.createElement('li');
  li.className = `task-item ${task.completed ? 'completed' : ''} ${task.priority ? `priority-${task.priority}` : ''}`;
  li.setAttribute('data-task-id', task.id);
  
  const priorityBadge = task.priority ? `<span class="priority-badge priority-${task.priority}">${task.priority.toUpperCase()}</span>` : '';
  const aiIcon = task.aiGenerated ? ' 🤖' : '';
  
  li.innerHTML = `
    <div class="task-checkbox ${task.completed ? 'checked' : ''}" 
         onclick="toggleTask(${task.id})" 
         role="checkbox" 
         aria-checked="${task.completed}"
         tabindex="0">
    </div>
    <span class="task-text">${escapeHtml(task.text)}${aiIcon}</span>
    ${priorityBadge}
    <button class="delete-btn" 
            onclick="deleteTask(${task.id})" 
            aria-label="Delete task"
            title="Delete task">
    </button>
  `;
  
  const checkbox = li.querySelector('.task-checkbox');
  checkbox.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleTask(task.id);
    }
  });
  
  return li;
}

// Update Task Counter
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

// Update Empty State
function updateEmptyState() {
  if (tasks.length === 0) {
    emptyState.classList.remove('hidden');
    tasksList.classList.add('hidden');
  } else {
    emptyState.classList.add('hidden');
    tasksList.classList.remove('hidden');
  }
}

// Update Clear Button
function updateClearButton() {
  if (tasks.length === 0) {
    clearAllBtn.classList.add('hidden');
  } else {
    clearAllBtn.classList.remove('hidden');
  }
}

// Save Tasks (enhanced with priority)
function saveTasks() {
  console.log('Tasks saved to memory:', tasks.length, 'tasks');
  // In a real application, you could save to localStorage here:
  // try {
  //   localStorage.setItem('aiTodoTasks', JSON.stringify(tasks));
  // } catch (error) {
  //   console.error('Error saving tasks:', error);
  // }
}

// Load Tasks (enhanced with priority)
function loadTasks() {
  tasks = [];
  console.log('Tasks loaded from memory');
  // In a real application, you could load from localStorage here:
  // try {
  //   const savedTasks = localStorage.getItem('aiTodoTasks');
  //   if (savedTasks) {
  //     tasks = JSON.parse(savedTasks);
  //   }
  // } catch (error) {
  //   console.error('Error loading tasks:', error);
  //   tasks = [];
  // }
}

// Escape HTML for security
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Enhanced Keyboard Shortcuts
document.addEventListener('keydown', function(e) {
  // Ctrl/Cmd + Enter to add task or generate AI tasks
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
    e.preventDefault();
    if (document.activeElement === aiPrompt) {
      generateAITasks();
    } else if (document.activeElement !== taskInput) {
      taskInput.focus();
    } else {
      addTask();
    }
  }
  
  // Escape to clear input or close modals
  if (e.key === 'Escape') {
    if (!aiModal.classList.contains('hidden')) {
      hideAIModal();
    } else if (!aiSuggestions.classList.contains('hidden')) {
      hideAISuggestions();
    } else if (document.activeElement === taskInput) {
      taskInput.blur();
      taskInput.value = '';
    }
  }
  
  // Ctrl/Cmd + A to open AI panel
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'a' && document.activeElement !== taskInput && document.activeElement !== aiPrompt) {
    e.preventDefault();
    if (!aiFeatures.classList.contains('expanded')) {
      toggleAIPanel();
    }
    aiPrompt.focus();
  }
  
  // Ctrl/Cmd + S to smart sort
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') {
    e.preventDefault();
    smartSortTasks();
  }
});

// Auto-focus and welcome message
window.addEventListener('load', function() {
  taskInput.focus();
  console.log('🤖 AI Task Manager loaded successfully!');
  
  // Show welcome tip after a short delay
  setTimeout(() => {
    if (tasks.length === 0) {
      productivityTips.innerHTML = `
        <div style="background: linear-gradient(135deg, #ddd6fe 0%, #e0e7ff 100%); padding: 16px; border-radius: 8px; margin-top: 12px;">
          <p style="font-size: 0.9rem; line-height: 1.6; margin: 0;">
            🎉 Welcome to AI Task Manager! Try typing a task or click "Quick Start with AI" to get started.
            <br><br>
            💡 Pro tip: Use Ctrl+A to quickly access AI features!
          </p>
        </div>
      `;
      
      if (!aiFeatures.classList.contains('expanded')) {
        toggleAIPanel();
      }
    }
  }, 1000);
});