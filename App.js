const inpbox = document.getElementById('inpbox');
const inpbtn = document.getElementById('inpbtn');
const list = document.getElementById('list');
let editTodo = null;
// function to Add ToDo List
const addTodo = () => {
        // console.log("btn clicked");
        const inputText = inpbox.value.trim();
        console.log(inputText);
        if (inputText.length <= 0) {
            alert("must add something in your ToDo");
            return false;
        }
        if (inpbtn.value === "Edit") {
            editTodo.target.previousElementSibling.innerHTML = inputText;
            inpbtn.value = "Add";
            inpbox.value = "";
        } else {
            //   craeting li and p ele 
            const li = document.createElement('li');
            const p = document.createElement('p');
            // adding classname 'para' using classList
            p.classList.add("para");
            // inserting the inputText to the p as a content 
            p.innerHTML = inputText;
            //  appending p as a child of li
            li.appendChild(p);
            //  creating a edit btn
            const edtbtn = document.createElement('button');
            // adding classname using classList
            edtbtn.classList.add("btn", "edit");
            edtbtn.innerHTML = "Edit";
            // appending editbtn as a child of li
            li.appendChild(edtbtn);
            // creating a delete btn
            const dltbtn = document.createElement('button');
            // adding classes using classList
            dltbtn.classList.add("btn", "delete");
            dltbtn.innerHTML = "Remove";
            // apppending delet btn as a child of li
            li.appendChild(dltbtn);
            // appending li as a child of ul
            list.appendChild(li);
            //  refreshing the input box with empty string
            inpbox.value = "";
        }
    }
    // function to update(Edit/Delete) ToDo List
const updateTodo = (e) => {
    // console.log("updated");
    // console.dir(e.target);
    // console.dir(e.target.innerHTML);
    if (e.target.innerHTML == "Edit") {
        inpbox.value = e.target.previousElementSibling.innerHTML;
        inpbox.focus();
        inpbtn.value = "Edit";
        editTodo = e;

    } else if (e.target.innerHTML === "Remove") {
        // console.log("removed");
        // console.log(e.target.parentElement);
        list.removeChild(e.target.parentElement);
    }

}
inpbtn.addEventListener('click', addTodo);
list.addEventListener('click', updateTodo);