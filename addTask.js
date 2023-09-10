import { HIGH_ELEMENTS, LOW_ELEMENTS } from "./elements.js";

export function Task(tsknm) {
    this.addHighTask = function (tsknm) {
        const FormTask = document.createElement('div');
        const CheckTask = document.createElement('input');
        const LabelTask = document.createElement('div');
        const DeleteTask = document.createElement('button');
        FormTask.id = 'highTaskFormID';
        FormTask.className = 'taskForm'
        CheckTask.id = 'highCheckboxID';
        CheckTask.className = 'checkboxClass';
        CheckTask.type = 'checkbox';
        LabelTask.id = 'highLabelTextID';
        LabelTask.className = 'labelText';
        LabelTask.textContent = tsknm;
        DeleteTask.id = 'deleteHighTask';
        DeleteTask.className = 'deleteButton';
        DeleteTask.textContent = '✖';
        HIGH_ELEMENTS.HIGH_TASKS.insertAdjacentElement('beforeend', FormTask);
        FormTask.appendChild(CheckTask);
        FormTask.appendChild(LabelTask);
        FormTask.appendChild(DeleteTask);
    }

    this.addLowTask = function (tsknm) {
        const FormTask = document.createElement('div');
        const CheckTask = document.createElement('input');
        const LabelTask = document.createElement('div');
        const DeleteTask = document.createElement('button');
        FormTask.id = 'lowTaskFormID';
        FormTask.className = 'taskForm'
        CheckTask.id = 'lowCheckboxID';
        CheckTask.className = 'checkboxClass';
        CheckTask.type = 'checkbox';
        LabelTask.id = 'lowLabelTextID';
        LabelTask.className = 'labelText';
        LabelTask.textContent = tsknm;
        DeleteTask.id = 'deleteLowTask';
        DeleteTask.className = 'deleteButton';
        DeleteTask.textContent = '✖';
        LOW_ELEMENTS.LOW_TASKS.insertAdjacentElement('beforeend', FormTask);
        FormTask.appendChild(CheckTask);
        FormTask.appendChild(LabelTask);
        FormTask.appendChild(DeleteTask);
    }
}