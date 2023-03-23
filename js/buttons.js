import * as FormSubmit from './formSubmit.js';
import * as Cards from './cards.js';



let buttonAdd = document.querySelector('#buttonAddToList');
buttonAdd.addEventListener(
    "click", 
    (e) => {
        e.preventDefault();
        (FormSubmit.handleFormSubmit())
    }
);






// Delete button <--- we have to wait for the button to be populated before we can add the listener
let buttonRemove;
export function makeRemoveClickable(){
    buttonRemove = document.querySelector("#buttonRemove");
    buttonRemove.addEventListener(
    "click",
    (e) => {
        Cards.removeThisCard(e)
    }
    )
}


// Edit button <---- we have to wait for the button to be populated again
let buttonEdit;
export function makeEditClickable(){
    buttonEdit = document.querySelector('#buttonEdit');
    buttonEdit.addEventListener(
        "click",
        (e) => {
            console.log('Trying to make this button editable')
            Cards.editThisCard(e)
        }
    )
}


export default { buttonAdd, makeRemoveClickable, makeEditClickable };