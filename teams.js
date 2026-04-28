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

    // শুধু page এর প্রথম table ধরবে
    let table = document.querySelector("table");
    if (!table) return;

    let rows = Array.from(table.querySelectorAll("tr"));

    let teams = [];

    for (let i = 0; i < rows.length; i++) {

        let row = rows[i];

        // header skip
        if (row.querySelector("th")) continue;

        // hidden row skip
        if (row.classList.contains("hidden")) continue;

        // safety check
        if (!row.children[3] || !row.children[4]) continue;

        let detail = rows[i + 1];

        let win = parseInt(row.children[3].innerText.trim()) || 0;
        let points = parseInt(row.children[4].innerText.trim()) || 0;

        teams.push({
            main: row,
            detail: detail,
            win,
            points
        });
    }

    // 🔥 SORT: Win → Points
    teams.sort((a, b) => {
        if (b.win !== a.win) {
            return b.win - a.win;
        }
        return b.points - a.points;
    });

    // rebuild table
    let header = table.querySelector("tr");
    table.innerHTML = "";
    table.appendChild(header);

    let rank = 1;

    teams.forEach(team => {

        team.main.children[0].innerText = rank++;

        table.appendChild(team.main);
        table.appendChild(team.detail);
    });
}