const searchInput = document.getElementById("searchInput");

// Selecciona tanto las secciones como los enlaces de aside
const items = document.querySelectorAll("main section section, main aside a");

searchInput.addEventListener("input", () => {
    const term = searchInput.value.toLowerCase();

    items.forEach((item) => {
        const title = (item.dataset.title || item.querySelector("h2")?.textContent || "").toLowerCase();
        const desc = (item.dataset.desc || item.querySelector("p")?.textContent || "").toLowerCase();

        if (title.includes(term) || desc.includes(term)) {
            if (item.tagName === "SECTION") {
                item.style.display = "flex";
            } else {
                item.style.display = "block";
            }
        } else {
            item.style.display = "none";
        }
    });
});
