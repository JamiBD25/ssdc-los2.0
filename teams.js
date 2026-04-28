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
/* 🔥 teams auto rank */
document.addEventListener("DOMContentLoaded", function () {
    rankTeams();
});

function rankTeams() {

    let table = document.querySelector("#table");
    if (!table) return;

    let rows = Array.from(table.querySelectorAll("tr"));

    let teams = [];

    for (let i = 0; i < rows.length; i++) {

        let row = rows[i];

        if (row.querySelector("th")) continue;
        if (row.classList.contains("hidden")) continue;

        let detail = rows[i + 1];

        let win = parseInt(row.children[3].innerText.trim()) || 0;
        let points = parseInt(row.children[4].innerText.trim()) || 0;

        teams.push({ main: row, detail, win, points });
    }

    teams.sort((a, b) => {
        if (b.win !== a.win) return b.win - a.win;
        return b.points - a.points;
    });

    let header = table.querySelector("tr");
    table.innerHTML = "";
    table.appendChild(header);

    let rank = 1;

    teams.forEach(t => {
        t.main.children[0].innerText = rank++;
        table.appendChild(t.main);
        table.appendChild(t.detail);
    });
}