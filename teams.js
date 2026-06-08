/* 🔥 hamburger menu */
function toggleMenu(){
document.getElementById("navLinks").classList.toggle("active");
}
/* 🔥 DROPDOWN (EVENT LISTENER BASED) */
document.addEventListener("click", function(e){

    if(e.target.classList.contains("toggle-btn")){

        let id = e.target.getAttribute("data-id");
        let row = document.getElementById(id);

        // close others
        document.querySelectorAll(".hidden").forEach(r=>{
            if(r.id !== id){
                r.style.display = "none";
            }
        });

        // toggle
        if(row.style.display === "table-row"){
            row.style.display = "none";
        }else{
            row.style.display = "table-row";
        }
    }
});

/* 🔥 INIT HIDE */
document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll(".hidden").forEach(r=>{
        r.style.display = "none";
    });
});
/* 🔥 table expand */
function toggleRow(id){
document.getElementById(id).classList.toggle("hidden");
} 



/* 🔥 teams auto rank */
document.addEventListener("DOMContentLoaded", () => {
    rankTeams();
});

function rankTeams() {

    const table = document.querySelector("table");
    if (!table) return;

    const rows = Array.from(table.querySelectorAll("tr"));

    let teams = [];

    // 🔥 collect data safely
    for (let i = 0; i < rows.length; i++) {

        const row = rows[i];

        if (row.querySelector("th")) continue;
        if (row.classList.contains("hidden")) continue;

        const winCell = row.children[3];
        const pointCell = row.children[4];

        if (!winCell || !pointCell) continue;

        const win = Number(winCell.innerText.trim()) || 0;
        const points = Number(pointCell.innerText.trim()) || 0;

        const detailRow = rows[i + 1] || null;

        teams.push({
            main: row,
            detail: detailRow,
            win,
            points
        });
    }

    // 🔥 SORT (Win → Points)
    teams.sort((a, b) => {
        if (b.win !== a.win) return b.win - a.win;
        return b.points - a.points;
    });

    // 🔥 REBUILD TABLE
    const header = table.querySelector("tr");
    table.innerHTML = "";
    table.appendChild(header);

    // 🔥 RANKING (competition style: 9, 9, 11)
    let rank = 1;

    for (let i = 0; i < teams.length; i++) {

        const current = teams[i];

        if (i > 0) {
            const prev = teams[i - 1];

            // same rank condition
            if (current.win === prev.win && current.points === prev.points) {
                current.rank = prev.rank;
            } else {
                current.rank = rank;
            }
        } else {
            current.rank = rank;
        }

        // set UI rank
        current.main.children[0].innerText = current.rank;

        table.appendChild(current.main);
        if (current.detail) table.appendChild(current.detail);

        rank++;
    }
}



/* 🔥 teams auto rank */
/*
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
*/