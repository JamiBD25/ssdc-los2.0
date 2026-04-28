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
/* 🔥 speaker auto rank */
document.addEventListener("DOMContentLoaded", function () {
    autoRank();
});

function autoRank() {
    let table = document.querySelector("table");

    // সব main row (hidden বাদে)
    let rows = [];

    let allRows = Array.from(table.querySelectorAll("tr"));

    for (let i = 0; i < allRows.length; i++) {
        let row = allRows[i];

        // main row detect (hidden না + header না)
        if (!row.classList.contains("hidden") && !row.querySelector("th")) {

            let hiddenRow = allRows[i + 1]; // detail row

            rows.push({
                main: row,
                detail: hiddenRow,
                avg: parseFloat(row.querySelector(".avg").innerText)
            });
        }
    }

    // 🔥 sort by Avg (high to low)
    rows.sort((a, b) => b.avg - a.avg);

    // পুরা table clear except header
    let header = table.querySelector("tr");
    table.innerHTML = "";
    table.appendChild(header);

    // 🔥 rank + append back
    let rank = 1;

    rows.forEach(item => {

        // rank update
        item.main.cells[0].innerText = rank++;

        // append main + detail
        table.appendChild(item.main);
        table.appendChild(item.detail);
    });
}
/* 🔥 team auto rank */
