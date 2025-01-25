document.getElementById("settings-toggle").addEventListener("click", function(event) {
    event.preventDefault(); // Prevents jump to the anchor
    const menu = document.getElementById("settings-menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
});

// Optionally, close the menu when clicking outside of it
document.addEventListener("click", function(event) {
    const menu = document.getElementById("settings-menu");
    const icon = document.getElementById("settings-toggle");
    if (!menu.contains(event.target) && !icon.contains(event.target)) {
        menu.style.display = "none";
    }
});
