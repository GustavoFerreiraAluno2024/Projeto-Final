document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.className = 'task-item';
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button class="remove-btn">Remover</button>
            `;
            taskList.appendChild(taskItem);
            taskInput.value = '';

            taskItem.querySelector('span').addEventListener('click', () => {
                taskItem.classList.toggle('completed');
            });

            taskItem.querySelector('.remove-btn').addEventListener('click', () => {
                taskList.removeChild(taskItem);
            });
        }
    });
});
