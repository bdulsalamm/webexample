//
///
/////
//////
///////
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");
    for (const link of navLinks) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetPage = this.getAttribute("href");
            navigateToPage(targetPage);
        });
    }

    function navigateToPage(page) {
        window.location.href = page;
    }
});
