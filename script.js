// Task data storage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let reminders = JSON.parse(localStorage.getItem('reminders')) || [];

// DOM Elements
const taskForm = document.getElementById('taskForm');
const editTaskForm = document.getElementById('editTaskForm');
const taskList = document.getElementById('taskList');
const emptyState = document.getElementById('emptyState');
const totalTasksEl = document.getElementById('totalTasks');
const completedTasksEl = document.getElementById('completedTasks');
const overdueTasksEl = document.getElementById('overdueTasks');
const currentDateTimeEl = document.getElementById('currentDateTime');
const themeToggle = document.getElementById('themeToggle');
const taskReminder = document.getElementById('taskReminder');
const reminderOptions = document.getElementById('reminderOptions');
const editTaskReminder = document.getElementById('editTaskReminder');
const editReminderOptions = document.getElementById('editReminderOptions');
const editModal = document.getElementById('editModal');
const closeModal = document.getElementById('closeModal');
const cancelEdit = document.getElementById('cancelEdit');
const sortBy = document.getElementById('sortBy');
const filterBy = document.getElementById('filterBy');
const notification = document.getElementById('notification');
const notificationMessage = document.getElementById('notificationMessage');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    updateDateTime();
    setInterval(updateDateTime, 60000); // Update every minute
    renderTasks();
    checkReminders();
    setInterval(checkReminders, 60000); // Check reminders every minute
    
    // Load theme preference
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.classList.add('dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// Update current date and time
function updateDateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    currentDateTimeEl.textContent = now.toLocaleDateString('en-US', options);
}

// Toggle dark/light theme
themeToggle.addEventListener('click', function() {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// Show/hide reminder options
taskReminder.addEventListener('change', function() {
    if (this.checked) {
        reminderOptions.classList.remove('hidden');
    } else {
        reminderOptions.classList.add('hidden');
    }
});

editTaskReminder.addEventListener('change', function() {
    if (this.checked) {
        editReminderOptions.classList.remove('hidden');
    } else {
        editReminderOptions.classList.add('hidden');
    }
});

// Add new task
taskForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;
    const dueDate = document.getElementById('taskDueDate').value;
    const priority = document.getElementById('taskPriority').value;
    const hasReminder = document.getElementById('taskReminder').checked;
    const reminderTime = hasReminder ? parseInt(document.getElementById('reminderTime').value) : null;
    
    const newTask = {
        id: Date.now().toString(),
        title,
        description,
        dueDate: dueDate || null,
        priority,
        completed: false,
        createdAt: new Date().toISOString(),
        reminder: hasReminder,
        reminderTime
    };
    
    tasks.push(newTask);
    saveTasks();
    renderTasks();
    taskForm.reset();
    reminderOptions.classList.add('hidden');
    
    showNotification('Task added successfully!');
});

// Edit task
editTaskForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const id = document.getElementById('editTaskId').value;
    const title = document.getElementById('editTaskTitle').value;
    const description = document.getElementById('editTaskDescription').value;
    const dueDate = document.getElementById('editTaskDueDate').value;
    const priority = document.getElementById('editTaskPriority').value;
    const hasReminder = document.getElementById('editTaskReminder').checked;
    const reminderTime = hasReminder ? parseInt(document.getElementById('editReminderTime').value) : null;
    
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        tasks[taskIndex] = {
            ...tasks[taskIndex],
            title,
            description,
            dueDate: dueDate || null,
            priority,
            reminder: hasReminder,
            reminderTime
        };
        
        saveTasks();
        renderTasks();
        closeEditModal();
        
        showNotification('Task updated successfully!');
    }
});

// Render tasks
function renderTasks() {
    // Filter tasks
    let filteredTasks = [...tasks];
    const filterValue = filterBy.value;
    
    if (filterValue === 'today') {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        filteredTasks = filteredTasks.filter(task => {
            if (!task.dueDate) return false;
            const taskDate = new Date(task.dueDate);
            taskDate.setHours(0, 0, 0, 0);
            return taskDate.getTime() === today.getTime();
        });
    } else if (filterValue === 'upcoming') {
        const now = new Date();
        filteredTasks = filteredTasks.filter(task => {
            if (!task.dueDate) return false;
            return new Date(task.dueDate) > now;
        });
    } else if (filterValue === 'completed') {
        filteredTasks = filteredTasks.filter(task => task.completed);
    }
    
    // Sort tasks
    const sortValue = sortBy.value;
    filteredTasks.sort((a, b) => {
        if (sortValue === 'priority') {
            const priorityOrder = { high: 3, medium: 2, low: 1 };
            return priorityOrder[b.priority] - priorityOrder[a.priority];
        } else if (sortValue === 'createdAt') {
            return new Date(b.createdAt) - new Date(a.createdAt);
        } else { // dueDate
            if (!a.dueDate && !b.dueDate) return 0;
            if (!a.dueDate) return 1;
            if (!b.dueDate) return -1;
            return new Date(a.dueDate) - new Date(b.dueDate);
        }
    });
    
    // Clear task list
    taskList.innerHTML = '';
    
    if (filteredTasks.length === 0) {
        emptyState.classList.remove('hidden');
        taskList.appendChild(emptyState);
    } else {
        emptyState.classList.add('hidden');
        filteredTasks.forEach(task => {
            taskList.appendChild(createTaskElement(task));
        });
    }
    
    updateStats();
}

// Create task element
function createTaskElement(task) {
    const now = new Date();
    const dueDate = task.dueDate ? new Date(task.dueDate) : null;
    const isOverdue = dueDate && dueDate < now && !task.completed;
    
    const taskEl = document.createElement('div');
    taskEl.className = `bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md p-4 ${task.completed ? 'task-completed' : ''} priority-${task.priority}`;
    if (isOverdue) {
        taskEl.classList.add('animate-pulse');
    }
    
    const priorityColors = {
        high: 'text-red-500',
        medium: 'text-yellow-500',
        low: 'text-green-500'
    };
    
    const priorityText = {
        high: 'High',
        medium: 'Medium',
        low: 'Low'
    };
    
    let dueDateText = 'No due date';
    if (dueDate) {
        const options = { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        dueDateText = dueDate.toLocaleDateString('en-US', options);
    }
    
    taskEl.innerHTML = `
        <div class="flex justify-between items-start">
            <div class="flex items-start space-x-3">
                <button class="complete-btn mt-1" data-id="${task.id}">
                    <i class="far ${task.completed ? 'fa-check-circle text-green-500' : 'fa-circle'}"></i>
                </button>
                <div>
                    <h3 class="font-medium text-gray-800 ${task.completed ? 'line-through' : ''}">${task.title}</h3>
                    ${task.description ? `<p class="text-gray-600 text-sm mt-1">${task.description}</p>` : ''}
                    <div class="flex items-center space-x-4 mt-2 text-sm">
                        <span class="text-gray-500"><i class="far fa-calendar-alt mr-1"></i>${dueDateText}</span>
                        <span class="${priorityColors[task.priority]}"><i class="fas fa-exclamation-circle mr-1"></i>${priorityText[task.priority]}</span>
                        ${task.reminder ? '<span class="text-blue-500"><i class="fas fa-bell mr-1"></i>Reminder set</span>' : ''}
                        ${isOverdue ? '<span class="text-red-500"><i class="fas fa-exclamation-triangle mr-1"></i>Overdue</span>' : ''}
                    </div>
                </div>
            </div>
            <div class="flex space-x-2">
                <button class="edit-btn p-1 text-gray-500 hover:text-indigo-600" data-id="${task.id}">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="delete-btn p-1 text-gray-500 hover:text-red-600" data-id="${task.id}">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>
    `;
    
    // Add event listeners to buttons
    taskEl.querySelector('.complete-btn').addEventListener('click', function() {
        toggleTaskComplete(this.getAttribute('data-id'));
    });
    
    taskEl.querySelector('.edit-btn').addEventListener('click', function() {
        openEditModal(this.getAttribute('data-id'));
    });
    
    taskEl.querySelector('.delete-btn').addEventListener('click', function() {
        deleteTask(this.getAttribute('data-id'));
    });
    
    return taskEl;
}

// Toggle task completion
function toggleTaskComplete(id) {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        tasks[taskIndex].completed = !tasks[taskIndex].completed;
        saveTasks();
        renderTasks();
        
        const message = tasks[taskIndex].completed ? 'Task marked as completed!' : 'Task marked as incomplete!';
        showNotification(message);
    }
}

// Open edit modal
function openEditModal(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        document.getElementById('editTaskId').value = task.id;
        document.getElementById('editTaskTitle').value = task.title;
        document.getElementById('editTaskDescription').value = task.description || '';
        
        if (task.dueDate) {
            const dueDate = new Date(task.dueDate);
            const formattedDate = dueDate.toISOString().slice(0, 16);
            document.getElementById('editTaskDueDate').value = formattedDate;
        } else {
            document.getElementById('editTaskDueDate').value = '';
        }
        
        document.getElementById('editTaskPriority').value = task.priority;
        document.getElementById('editTaskReminder').checked = task.reminder;
        if (task.reminder) {
            document.getElementById('editReminderTime').value = task.reminderTime;
            editReminderOptions.classList.remove('hidden');
        } else {
            editReminderOptions.classList.add('hidden');
        }
        
        editModal.classList.remove('hidden');
    }
}

// Close edit modal
function closeEditModal() {
    editModal.classList.add('hidden');
}

// Delete task
function deleteTask(id) {
    if (confirm('Are you sure you want to delete this task?')) {
        tasks = tasks.filter(task => task.id !== id);
        saveTasks();
        renderTasks();
        showNotification('Task deleted successfully!');
    }
}

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Update stats
function updateStats() {
    totalTasksEl.textContent = tasks.length;
    completedTasksEl.textContent = tasks.filter(task => task.completed).length;
    
    const now = new Date();
    overdueTasksEl.textContent = tasks.filter(task => {
        if (task.completed || !task.dueDate) return false;
        return new Date(task.dueDate) < now;
    }).length;
}

// Check reminders
function checkReminders() {
    const now = new Date();
    
    tasks.forEach(task => {
        if (task.reminder && task.reminderTime && !task.completed && task.dueDate) {
            const dueDate = new Date(task.dueDate);
            const reminderTime = task.reminderTime * 60000; // Convert minutes to milliseconds
            const reminderTimeDate = new Date(dueDate.getTime() - reminderTime);
            
            // Check if we're within 1 minute of the reminder time
            if (Math.abs(now - reminderTimeDate) < 60000) {
                // Check if we've already shown this reminder
                if (!reminders.includes(task.id)) {
                    showNotification(`Reminder: "${task.title}" is due soon!`);
                    reminders.push(task.id);
                    localStorage.setItem('reminders', JSON.stringify(reminders));
                }
            }
        }
    });
}

// Show notification
function showNotification(message) {
    notificationMessage.textContent = message;
    notification.classList.remove('hidden');
    notification.classList.remove('bg-red-500', 'bg-green-500');
    notification.classList.add('bg-green-500');
    
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 3000);
}

// Event listeners for modal
closeModal.addEventListener('click', closeEditModal);
cancelEdit.addEventListener('click', closeEditModal);

// Close modal when clicking outside
editModal.addEventListener('click', function(e) {
    if (e.target === editModal) {
        closeEditModal();
    }
});

// Event listeners for sorting and filtering
sortBy.addEventListener('change', renderTasks);
filterBy.addEventListener('change', renderTasks);
