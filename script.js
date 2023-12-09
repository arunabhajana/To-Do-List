/**
 * This JavaScript code adds tasks to a list, allows the user to mark tasks as completed, and saves the
 * tasks in local storage.
 */
const taskBox = document.getElementById("task-box");
const listCont = document.getElementById("list-container");

function addTask(){
    if(taskBox.value === ''){
        alert("Enter A Valid Task")
    }else{
        let li = document.createElement("li");
        li.innerHTML = taskBox.value;
        listCont.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    taskBox.value=""; //Clear Field
    saveData();
}

listCont.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");  
        saveData();  
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",listCont.innerHTML);
}

function showTask(){
    listCont.innerHTML = localStorage.getItem("data");
}

showTask();