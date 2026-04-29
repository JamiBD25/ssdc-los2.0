/* 🔥 hamburger menu */
function toggleMenu(){
document.getElementById("navLinks").classList.toggle("active");
}

/* 🔥 dropdown */
function toggleDrop(id){
let el = document.getElementById(id);

if(el.style.display === "block"){
el.style.display = "none";
}else{
el.style.display = "block";
}
}

/* 🔥 table expand */
function toggleRow(id){
document.getElementById(id).classList.toggle("hidden");
}