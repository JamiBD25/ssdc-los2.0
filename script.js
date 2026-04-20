/* dropdown */
function toggleDrop(id){
let el=document.getElementById(id);
el.style.display = (el.style.display==="block")?"none":"block";
}

/* table expand */
function toggleRow(id){
document.getElementById(id).classList.toggle("hidden");
}