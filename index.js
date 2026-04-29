/* 🔥 CHECK JS LOADED */
console.log("index.js loaded ✅");

/* 🔥 RUN AFTER PAGE LOAD */
document.addEventListener("DOMContentLoaded", function(){

  /* =========================
     🔥 HAMBURGER MENU
  ========================= */
  window.toggleMenu = function(){
    let nav = document.getElementById("navLinks");
    if(nav){
      nav.classList.toggle("active");
    }else{
      console.error("navLinks not found ❌");
    }
  };


  /* =========================
     🔥 DROPDOWN (ONE OPEN)
  ========================= */
  window.toggleDrop = function(id){

    let all = document.querySelectorAll(".drop");

    all.forEach(el=>{
      if(el.id !== id){
        el.style.display = "none";
      }
    });

    let target = document.getElementById(id);

    if(!target){
      console.error("Dropdown ID not found: " + id);
      return;
    }

    if(target.style.display === "block"){
      target.style.display = "none";
    }else{
      target.style.display = "block";
    }
  };


  /* =========================
     🔥 TABLE ROW EXPAND
  ========================= */
  window.toggleRow = function(id){
    let row = document.getElementById(id);

    if(row){
      row.classList.toggle("hidden");
    }else{
      console.error("Row ID not found: " + id);
    }
  };

});