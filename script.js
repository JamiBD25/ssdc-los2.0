// 🔷 হ্যামবার্গার টগল
function toggleMenu() {
    let menu = document.getElementById("navLinks");
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

// 🔷 স্মুথ স্ক্রল + হালকা delay effect
function scrollToSection(id) {
    let section = document.getElementById(id);

    section.style.opacity = "0.5";

    section.scrollIntoView({
        behavior: "smooth"
    });

    setTimeout(() => {
        section.style.opacity = "1";
    }, 500);
}
