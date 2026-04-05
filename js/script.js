
fetch("./raw_data/footer.html").then(i => i.text()).then(i => {
    document.querySelector("footer").innerHTML = i;
});

fetch("./raw_data/topnav.html").then(i => i.text()).then(i => {
    document.querySelector(".topnav").innerHTML = i;
});

//nav-menu
window.addEventListener("load", function () {
    var menu = document.querySelector("#mobileMenu");

    var links = document.querySelectorAll("nav a");

    // Clear existing options
    menu.innerHTML = "";

    links.forEach(function(link) {
        var text = link.textContent;
        var url = link.getAttribute("href");
        var option = document.createElement("option");
        option.value = url;
        option.textContent = text;
        menu.appendChild(option);
    });

    // On change redirect
    menu.addEventListener("change", function() {
        window.location.href = this.value;
    });

});

const cartItem = document.querySelector(".cart");

cartItem.addEventListener("click", (e) => {
    e.stopPropagation();
    cartItem.classList.add("active");
});

document.activeElement("click", () => {
    cartItem.classList.remove("active");
})

const user = document.querySelector(".account");
const accMenu = document.querySelector("#accountMenu");

user.addEventListener("click",(e) => {
    e.stopPropagation();
    user.classList.add("active");
    accMenu.classList.toggle("active");
});

accMenu.addEventListener("click", (e) => {
    e.stopPropagation();
});

document.addEventListener("click", () => {
    accMenu.classList.remove("active");
    user.classList.remove("active");
});


//serch form
const  sForm = document.querySelector("#searchForm");

sForm.addEventListener("submit", function(e){

    e.preventDefault();

    let value = document.getElementById("searchInput").value.toLowerCase();

    if(value === "mobile"){
        window.location.href = "#mobile";
    }
    else if(value === "laptop"){
        window.location.href = "#laptop";
    }
    else{
        window.location.href = "error.html";
    }

});