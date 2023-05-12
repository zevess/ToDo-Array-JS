import { HIGH_ELEMENTS, LOW_ELEMENTS } from "./elements.js";

export function addHighTask(tsknm, ) {
    const highFormTask = document.createElement('div');
    highFormTask.id = 'highTaskFormID';
    highFormTask.className = 'taskForm';

    const highCheckTask = document.createElement('input');
    highCheckTask.id = 'highCheckboxID';
    highCheckTask.className = 'checkboxClass';
    highCheckTask.type = 'checkbox';
   
    
    const highLabelTask = document.createElement('div');
    highLabelTask.id = 'highLabelTextID';
    highLabelTask.className = 'labelText';
    highLabelTask.textContent = tsknm;

    const highDeleteTask = document.createElement('button');
    highDeleteTask.id = 'deleteHighTask';
    highDeleteTask.className = 'deleteButton';
    highDeleteTask.textContent = '✖';

    HIGH_ELEMENTS.HIGH_TASKS.insertAdjacentElement('beforeend', highFormTask);
    highFormTask.appendChild(highCheckTask);
    highFormTask.appendChild(highLabelTask);
    highFormTask.appendChild(highDeleteTask);
}


export function addLowTask(tsknm) {
    const lowFormTask = document.createElement('div');
    lowFormTask.id = 'lowTaskFormID';
    lowFormTask.className = 'taskForm';

    const lowCheckTask = document.createElement('input');
    lowCheckTask.id = 'lowCheckboxID';
    lowCheckTask.className = 'checkboxClass';
    lowCheckTask.type = 'checkbox';


    const lowLabelTask = document.createElement('div');
    lowLabelTask.id = 'lowLabelTextID';
    lowLabelTask.className = 'labelText';
    lowLabelTask.textContent = tsknm;

    const lowDeleteTask = document.createElement('button');
    lowDeleteTask.id = 'deleteLowTask';
    lowDeleteTask.className = 'deleteButton';
    lowDeleteTask.textContent = '✖';

    LOW_ELEMENTS.LOW_TASKS.insertAdjacentElement('beforeend', lowFormTask);
    lowFormTask.appendChild(lowCheckTask);
    lowFormTask.appendChild(lowLabelTask);
    lowFormTask.appendChild(lowDeleteTask);
}



