import { taskList } from "./main.js";


export function changeStatus() {
    let allCheck = document.querySelectorAll('.checkboxClass');

    if (allCheck.length !== 0) {
        Array.from(allCheck).forEach(element => {
            element.addEventListener("change", function () {

                const tar1 = event.currentTarget.nextSibling.textContent;

                const prnt = event.currentTarget.parentNode;

                let indd = taskList.findIndex((item) => (item.name === tar1));
                if (element.checked && taskList[indd].status === 'in progress') {

                    taskList[indd].status = 'done';
                    prnt.style.backgroundColor = '#b8b2b2';
                
                }
                else if (element.checked === false && taskList[indd].status === 'done') {

                    taskList[indd].status = 'in progress';
                    prnt.style.backgroundColor = 'white';
                }
            })

            statusCheck(element);

        });
    }
}

function statusCheck(element) {
    
    let elem = element.nextSibling.textContent;
    let elemPRNT = element.parentNode;
    let ind2 = taskList.findIndex((item) => item.name === elem);
    if (taskList[ind2].status === 'done'){
        elemPRNT.style.backgroundColor = '#b8b2b2';
        element.checked = true;
    }
    if (taskList[ind2].status === 'in progress'){
        elemPRNT.style.backgroundColor = 'white';
        element.checked = false;
    }
    
}