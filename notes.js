const notescontainer =document.querySelector(".notes-container");
const  createBtn =document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");
function updateStorage() {
    localStorage.setItem("notes",notescontainer.innerHTML);
}
function showNotes() {
    notescontainer.setItem("notes",notescontainer.innerHTML);
}
showNotes();

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img =document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src ="delete.png";
    notescontainer.appendChild(inputBox).appendChild(img);
})
notescontainer.addEventListener("click",function(e) {
    if(Text.target.tagName ==="IMG") {
        e.target.parentElement.remove();
        updateStorage();

    }
    else if(e.target.tagName==="p"){
        notes =document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup =function() {
                updateStorage();
            }
        })
    }
})
