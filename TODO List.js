    //Grab add button
let addButton = document.getElementById('add');
    //Grab ul named pending
let pending = document.getElementById('pending');
    //Grab ul named completed
let completed = document.getElementById('completed');
    //Grab input field
let inputField = document.getElementById('field');
 
//make addButton create a new li in the pending ul
addButton.addEventListener('click', function(e) {
    e.preventDefault();
    let newItem = document.createElement("li");
    newItem.setAttribute('id', 'listItem' )
    newItem.innerText = inputField.value;
    pending.appendChild(newItem);
    inputField.value = "";
    
    //add checkbox to new li
    const newCheckbox = document.createElement("input");
    newCheckbox.setAttribute("type", "checkbox");
    newCheckbox.classList.add('checkbox');
    newItem.prepend(newCheckbox);

    //add remove button to new li
    const newButton = document.createElement("button");
    newButton.classList.add('removeButton');
    newButton.innerText = "remove";
    newItem.appendChild(newButton);

    //remove button
    newButton.addEventListener('click', function(e) {
        if (newItem.parentElement.id == 'pending') {
            pending.removeChild(newItem);
        }
        else if (newItem.parentElement.id == 'completed') {
            completed.removeChild(newItem);
        }
       
        console.log(e.target);
    })
    //checkbox move item to completed list
    newCheckbox.addEventListener('click', function(e) {
        console.log(newItem);
        completed.prepend(newItem);
        //if unchecked move item back to pending list
        if (this.checked === false) {
            pending.prepend(newItem)
        }
    })
    })
 