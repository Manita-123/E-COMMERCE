
fetch("./raw_data/footer.html").then(i => i.text()).then(i => {
    document.querySelector("footer").innerHTML = i;
});

fetch("./raw_data/header.html").then(i => i.text()).then(i => {
    document.querySelector(".wrap-1").innerHTML = i;
});


window.addEventListener("load", function () {
    
    var menu = document.querySelector("#mobileMenu");
    
    console.log(menu);
    

        if (!menu) {
        console.log("mobileMenu not found");
        return;
    }


    var links = document.querySelectorAll("nav a");
     console.log("Links found:", links.length);

    // Clear existing options
    menu.innerHTML = "";

    // Get all nav links
    

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

const  sForm = document.querySelector("#searchForm");



// sForm.addEventListener("submit", function(e){

//     e.preventDefault();

//     let value = document.getElementById("searchInput").value.toLowerCase();

//     if(value === "mobile"){
//         window.location.href = "#mobile";
//     }
//     else if(value === "laptop"){
//         window.location.href = "#laptop";
//     }
//     else if(value === "shoes"){
//         window.location.href = "#shoes";
//     }
//     else{
//         window.location.href = "error.html";
//     }

// });