const addBtn = document.getElementById("add");

const notes = JSON.parse(localStorage.getItem('notes'));

if(notes){
  notes.forEach((note) => {
    addNewNote(note);
  });
}

addBtn.addEventListener("click", () => {
  addNewNote();
});

function addNewNote(text = ""){
  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = `<div class="notes">
  <div class="tools">
    <button class="edit">
      <span class="material-symbols-outlined">
        edit
      </span>
    </button>
    <button class="delete">
      <span class="material-symbols-outlined">
        delete
      </span>
    </button>
  </div>
  
  <textarea name="" id="" cols="30" rows="10"></textarea>
  </div>`;
  // add <div class="main hidden"></div> before textarea in above innerHTML

  //const editBtn = note.querySelector(".edit");
  const deleteBtn = note.querySelector(".delete");

  //const mainEl = note.querySelector(".main");
  const textareaEl = note.querySelector("textarea");

  textareaEl.value = text; 

  /*editBtn.addEventListener("click", () => {
    mainEl.classList.toggle("hidden");
    textareaEl.classList.toggle("hidden");
  });*/

  deleteBtn.addEventListener("click",()=>{
    note.remove();
    updateLs();
  });

  textareaEl.addEventListener("input", (e) => {
    const textareaValue = e.target.value;
    //mainEl.innerHTML = textareaValue;
    updateLs();
  });

  document.body.appendChild(note);
};

function updateLs(){
  const noteText = document.querySelectorAll("textarea");
  const notes = [];
  noteText.forEach(note =>{
    notes.push(note.value);
  });
  localStorage.setItem("notes",JSON.stringify(notes));
}

// NEED TO USE mark.js for text formatting of text(Heading, links, link breaks etc.)