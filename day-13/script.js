var todoInput = document.querySelector(".todo-input");
var btn = document.querySelector("button");
var todoList = document.querySelector(".todo-list");

//a stand for event 
btn.onclick = function createTodo(e)
{

    
    e.preventDefault();
    if(todoInput.value==""||todoInput.value==" "||todoInput.value=="  "||todoInput.value=="   "||todoInput.value=="    "||todoInput.value=="     ")
    {
        alert("Please Enter the To-Do ");
    }
    else{

    
    var newDiv = document.createElement("div");
    newDiv.classList.add("todo");


    var newLi = document.createElement("li");
    newLi.classList.add("todo_item");
    newLi.innerHTML = todoInput.value;
    newDiv.appendChild(newLi);

    var cmbtn = document.createElement("button");
    cmbtn.classList.add("cmbtn");
    cmbtn.innerHTML = '<i class="fa fa-check"></i>'
    newDiv.appendChild(cmbtn);

    var delbtn = document.createElement("button");
    delbtn.classList.add("delbtn");
    delbtn.innerHTML = '<i class="fa fa-trash"></i>'
    newDiv.appendChild(delbtn);

    todoList.appendChild(newDiv);
    todoInput.value="";
    }
}

todoList.onclick=function checkbtn(e){
    var check = e.target;
    // console.log(check);
    if(check.classList[0] == "delbtn"){
         console.log("delete");
        var parentNode=check.parentElement;
// console.log(parentNode);
         parentNode.remove();
    }
    else if (check.classList[0] == "cmbtn"){
        console.log("complete");
        var parentNode = check.parentElement;
        parentNode.classList.add("check");
    }
}