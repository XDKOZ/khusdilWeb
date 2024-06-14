function openNav() {
    document.getElementById("mySidebar").style.left = "0";
    document.getElementById("overlay").style.display = "block";
    document.querySelector(".hamburger").classList.add("hidden");
}

function closeNav() {
    document.getElementById("mySidebar").style.left = "-250px";
    document.getElementById("overlay").style.display = "none";
    document.querySelector(".hamburger").classList.remove("hidden");
}