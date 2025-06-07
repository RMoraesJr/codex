document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('new-task');
    const addButton = document.getElementById('add-task');
    const list = document.getElementById('task-list');

    addButton.addEventListener('click', () => {
        const text = input.value.trim();
        if (text !== '') {
            const li = document.createElement('li');
            const span = document.createElement('span');
            span.textContent = text;
            li.appendChild(span);

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remover';
            removeBtn.addEventListener('click', () => {
                list.removeChild(li);
            });

            span.addEventListener('click', () => {
                li.classList.toggle('completed');
            });

            li.appendChild(removeBtn);
            list.appendChild(li);
            input.value = '';
        }
    });
});