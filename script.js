
const input=document.getElementById("new-task");
const addbutton=document.getElementById("add-task")
const tasklist=document.getElementById("tasks-list")
 
function addtask(){
 const tasktext=input.value.trim();

if(tasktext ==="")return ;
 
 const taskitem= document.createElement("li");
//checkbox
 const checkbox=document.createElement("input");
 checkbox.type="checkbox";
 checkbox.addEventListener("click", toggleComplete)

 //paragarph
 const task=document.createElement("p")
 task.textContent=tasktext;

 //delete
 const deletebutton=document.createElement("button")
deletebutton.textContent="X"
deletebutton.classList.add("delete-task")
deletebutton.addEventListener("click",deletetask)
//append
taskitem.appendChild(checkbox)
taskitem.appendChild(task)
taskitem.appendChild(deletebutton)

tasklist.appendChild(taskitem);
input.Value="";

}

function toggleComplete(e){
 taskitem=e.target.parentElement;
taskitem.classList.toggle("Complete")
}

function deletetask(e){
const taskitem=e.target.parentElement;
tasklist.removeChild(taskitem)
}

input.addEventListener("keypress",(e)=>{
    if (e.key === "enter") {
    addtask();    
    }
})
addbutton. addEventListener("click",addtask);