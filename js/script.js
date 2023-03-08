{
    const tasks = [];

    const render = () => {
        let taskListHTMLContent = "";

        for (const task of tasks) {
            taskListHTMLContent += `
        <li class="tasks__item js-task">

            <button class="tasks__button tasks__button--toggleDone js-toogleDone">
              ${task.done ? "✔" : ""}
            </button>

            <span class="tasks__content${ task.done ? " tasks__content--done" : ""}">
              ${task.content}
            </span>

            <button class="tasks__button tasks__button--remove js-remove">
              🗑
            </button>

        </li>
        `;
        } 
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskElement = document.querySelector(".js-newTask");
        const newTaskContent = newTaskElement.value.trim();
        
        if (newTaskContent !== "") {
            addNewTask(newTaskContent);
            newTaskElement.value = "";
        }

        newTaskElement.focus();
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);
    };

    init();
}