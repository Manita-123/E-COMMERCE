
// const routes = {
//     "mobile": "products.html#mobile",
//     "iphone": "products.html#mobile",
//     "laptop": "products.html#laptop",
//     "macbook": "products.html#laptop",
//     "shoes": "fashion.html#shoes",
//     "nike": "fashion.html#shoes",
//     "contact": "contact.html",
//     "about": "about.html"
// };

// document.getElementById("searchForm").addEventListener("submit", function(e){

//     e.preventDefault();

//     let value = document.getElementById("searchInput").value.toLowerCase().trim();

//     if(routes[value]){
//         window.location.href = routes[value];
//     }else{
//         window.location.href = "error.html";
//     }

// });


document.getElementById("searchForm").addEventListener("submit", function(e){

    e.preventDefault();

    let value = document.getElementById("searchInput").value.toLowerCase();

    if(value === "mobile"){
        window.location.href = "#mobile";
    }
    else if(value === "laptop"){
        window.location.href = "#laptop";
    }
    else if(value === "shoes"){
        window.location.href = "#shoes";
    }
    else{
        window.location.href = "error.html";
    }

});