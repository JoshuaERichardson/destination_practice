import { makeRemoveClickable, makeEditClickable } from "./buttons.js";
import { unsplashAPIGET } from "./APIs/unsplashAPI.js";


export async function createCard(){
    let thisName = document.getElementById('destination_name').value;
    let thisLocation = document.getElementById('destination_location').value;
    let defaultPhoto = "https://www.incimages.com/uploaded_files/image/1920x1080/getty_167167350_9706479704500183_94071.jpg";
    
    let photo = await unsplashAPIGET(thisName, thisLocation)
        .then(function(response) {
            console.log("response: ") 
            console.log(response["urls"]["small"])
            return response["urls"]["small"];
        }, function(Error) {
            console.log("Error: " + Error)
        })

    
    

    let description = document.getElementById('destination_description').value;
    let innerCard = 
        `<div class="card col-md-3">
            <img src="${photo}" class="card-img-top image" alt="Photo of Travel" />    
            <div class="card-body">      
                <h5 class="card-title" id="card-title">${thisName}</h5>      
                <p class="card-text" id="card-location">${thisLocation}</p>      
                <p class="card-text" id="card-description">${description}</p>      
                <button class="btn btn-warning" id="buttonEdit">Edit</button>
                <button class="btn btn-danger" id="buttonRemove">Remove</button>
            </div>
        </div>
        `;
    document.querySelector("#destination_card_container").insertAdjacentHTML("afterbegin", innerCard)
    
    // We can now add a delete listener:
    makeRemoveClickable();
    makeEditClickable();
}



export function removeThisCard(e){
    
    console.log("removing");
    $('div .card').click(function(e){
        $(e.target.parentNode.parentNode).remove();
    });
}


// async function checkImage(url){
//     const res = await fetch(url);
//     const buff = await res.blob();
//     console.log(buff.type.startsWith('image/'));
//     return buff.type.startsWith('image/')
// }
export function editThisCard(e){
    console.log(e.target.parentNode)
    

    // Save all the original info
    let thisCard = e.target.parentNode.childNodes;
    let title = thisCard[1];
    let location = thisCard[3];
    let description = thisCard[5];
    let photo = e.target.parentNode.parentNode.childNodes[1];
    console.log("thisCard: " + thisCard)
    

    // Get new info from the user
    let newTitle = window.prompt("What would you like to rename the destination?");
    let newLocation = window.prompt("Where would you like to change the location to?");
    let newDescription = window.prompt("What is the new description?");

    // Save the information if necessary
    if(newTitle.length > 0 && newTitle.length != null){
        title.innerText = newTitle
    }
    if(newLocation.length > 0 && newLocation.length != null){
        location.innerText = newLocation
    }
    if(newDescription.length > 0 && newDescription.length != null){
        description.innerText = newDescription
    }
    
    // if(newPhoto.length > 0){
    //     if(checkImage(newPhoto)){
    //         console.log('changing URL')
    //         photo.setAttribute("src", newPhoto);
    //     }
    // }
}

export default { createCard, removeThisCard, editThisCard };