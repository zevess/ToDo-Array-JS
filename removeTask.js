import { taskList } from "./main.js";
import { render } from "./render.js";

function deleteTask(task){
    let index = taskList.findIndex((item) => (item.name === task));
    if (index !== -1){
        taskList.splice(index, 1);
        console.log(taskList[index]);
        render();
    };
};

export function deleteButtons() {
    let delButtons = document.querySelectorAll('.deleteButton');
    for (let delBTN of delButtons) {
        delBTN.addEventListener('click', (event) => {
            const task = event.currentTarget.previousSibling.textContent;
            console.log(task);
            deleteTask(task);
        });
    };
};


