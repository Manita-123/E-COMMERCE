
fetch("./raw_data/footer.html").then(i => i.text()).then(i => {
    document.querySelector("footer").innerHTML = i;
});

fetch("./raw_data/topnav.html").then(i => i.text()).then(i => {
    document.querySelector(".topnav").innerHTML = i;
});

window.addEventListener("DOMContentLoaded", () => {
    const mobileMenu = document.querySelector("#mobileMenu");
    const accountButton = document.querySelector(".account");
    const accountMenu = document.querySelector("#accountMenu");
    const cart = document.querySelector(".cart");

    setupMobileMenu(mobileMenu);

    document.addEventListener("click", (e) => {
        const clickedCart = e.target.closest(".cart");
        const clickedAccount = e.target.closest(".account");
        const clickedAccountMenu = e.target.closest("#accountMenu");

        if (cart) {
            if (clickedCart) {
                cart.classList.toggle("active");
            } else {
                cart.classList.remove("active");
            }
        }

        if (accountButton && accountMenu) {
            if (clickedAccount) {
                accountButton.classList.toggle("active");
                accountMenu.classList.toggle("active");
            } else if (!clickedAccountMenu) {
                accountButton.classList.remove("active");
                accountMenu.classList.remove("active");
            }
        }
    });

    document.addEventListener("dblclick", (e) => {
        const product = e.target.closest(".product-sm");
        if (product) {
            window.location.href = "item.html";
        }
    });
});

function setupMobileMenu(menu) {
    if (!menu) return;

    const links = document.querySelectorAll("nav a");
    menu.innerHTML = "";

    links.forEach((link) => {
        const option = document.createElement("option");
        option.value = link.getAttribute("href") || "";
        option.textContent = link.textContent.trim();
        menu.appendChild(option);
    });

    menu.addEventListener("change", (e) => {
        if (e.target.value) {
            window.location.href = e.target.value;
        }
    });
}

//serch form
const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");

if (searchForm && searchInput) {
    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const value = searchInput.value.trim().toLowerCase();

        window.location.href = value === "mobile" ? "#mobile" : "error.html";
    });
}
