import { taskList } from "./main.js";
import { HIGH_ELEMENTS, LOW_ELEMENTS } from "./elements.js";
import { addHighTask, addLowTask } from "./addTask.js";
import { deleteButtons } from "./removeTask.js";
import { changeStatus } from "./changeStatus.js";

export function arrUpdt(nm, prrt) {
    const newTask = {
        name: `${nm}`,
        status: '',
        priority: `${prrt}`
    };
    taskList.push(newTask);
}

export function render() {

    let tasks = document.querySelectorAll('.taskForm');
    for (let t of tasks) {
        t.remove();
    }

    if (event.target.id === HIGH_ELEMENTS.ADD_HIGH.id) {
        arrUpdt(HIGH_ELEMENTS.ADD_HIGH_INPUT.value, 'high');
    }

    if (event.target.id === LOW_ELEMENTS.ADD_LOW.id) {
        arrUpdt(LOW_ELEMENTS.ADD_LOW_INPUT.value, 'low');
    }

    for (let i = 0; i < taskList.length; i++) {
        let taskName;
        if (taskList[i].priority === "high") {
            taskName = taskList[i].name;
            addHighTask(taskName);
        }
        if (taskList[i].priority === "low") {
            taskName = taskList[i].name;
            addLowTask(taskName);
        }
        if (taskList[i].status === ''){
            taskList[i].status = 'in progress';
            console.log('-');
        }
        if (taskList[i].status === 'done'){
            console.log("+")
        }
    }

    

    deleteButtons();
    changeStatus();
    console.log(taskList);
};


