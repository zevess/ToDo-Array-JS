import { HIGH_ELEMENTS, LOW_ELEMENTS } from "./elements.js";
import { render } from "./render.js";

export const taskList = [];


HIGH_ELEMENTS.ADD_HIGH.addEventListener('submit', render);
LOW_ELEMENTS.ADD_LOW.addEventListener('submit', render);






