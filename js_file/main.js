import { ConstScript } from "./const.js";
import { Action } from "./actions.js";

let taskAddButton = document.querySelector('#task-button');
let task = document.querySelector('#task');

taskAddButton.addEventListener('click', function(){
    new Action().taskButtonAction();
})
task.addEventListener('input', function(event){
    new Action().taskInputAction(event.data);
})