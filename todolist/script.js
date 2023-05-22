 const todoInputBox = document.getElementById("todoinput");
 const addBt = document.getElementById("addButton");
 const todoDiv = document.getElementById("todoitems-container");

 const alltodoitmesfromLs = JSON.parse(localStorage.getItem('todos'));

  addBt.addEventListener("click",() => {
  if(todoInputBox.value!==""){
    addToDoItem();
  }  
  });

  if(alltodoitmesfromLs){
    alltodoitmesfromLs.forEach(item => 
      addToDoItem(item));
  }

  function addToDoItem(item){ 
    let todoInput = todoInputBox.value;
    if(item){
      todoInput = item.text;
    }
       
    const todoListItem = document.createElement("div");
    todoListItem.classList.add("todoitem-container");
    todoListItem.innerHTML = `<p class="todotext">` + todoInput + `</p>` + `<button class="done">
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

    if(item && item.completed){
      todoText.classList.add("strikethrough");
    } 

    doneBtn.addEventListener("click",()=>{
      todoText.classList.toggle("strikethrough");
      updateLs();
    });
    deleteBtn.addEventListener("click",()=>{
      todoListItem.remove();
      updateLs();
    });

    todoDiv.appendChild(todoListItem);
    
    updateLs();

    todoInputBox.value="";
  };

  function updateLs(){
    const alltodoitmestoLs= document.querySelectorAll(".todotext");
    const alltodoitemstoLsArr= [];
    alltodoitmestoLs.forEach(item =>{
      alltodoitemstoLsArr.push({
        text: item.innerText,
        completed: item.classList.contains("strikethrough")
      });
    });
    localStorage.setItem("todos",JSON.stringify(alltodoitemstoLsArr));
  };