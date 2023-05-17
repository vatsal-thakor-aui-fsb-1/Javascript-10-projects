 const todoInputBox = document.getElementById("todoinput");
 const addBt = document.getElementById("addButton");

 addBt.addEventListener("click",() => {
  addToDoItem();
});

function addToDoItem(){
  const todoInput = todoInputBox.value;
  
  const todoListItem = document.createElement("div");
  todoListItem.classList.add("todoitem-container");
  todoListItem.innerHTML = `<p class="todotext">` + todoInput + `</p>
  <button class="done">
    <span class="material-symbols-outlined">
      done
    </span>
  </button>
  <button class="delete">
    <span class="material-symbols-outlined">
      delete
    </span>
  </button></div>`;
  
  const doneBtn = todoListItem.querySelector(".done");
  const deleteBtn = todoListItem.querySelector(".delete");
  const todoText = todoListItem.querySelector(".todotext");

  doneBtn.addEventListener("click",()=>{
    todoText.classList.toggle("strikethrough");
  });
  deleteBtn.addEventListener("click",()=>{
    todoListItem.remove();
  });

  document.getElementById("todoitems-container").appendChild(todoListItem);
  
  

  todoInputBox.value="";
};