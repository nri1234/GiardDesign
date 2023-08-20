document.addEventListener('scroll', function(){
    // amount of px scrolled on Y axis at all times
    let scrollAmount = window.pageYOffset;
    // ternary condition to add remove sticky class
    scrollAmount > 200 ? addStickyNav() : removeStickyNav()
});

const addStickyNav = () => {
    document.querySelector('header').classList.add('stickynav');
}

const removeStickyNav = () => {
    document.querySelector('header').classList.remove('stickynav');
}


function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.getElementById("macy-container");
    const expandButton = document.getElementById("expandButton");

    const itemsPerLoad = 9;
    let currentIndex = 0;
    let macyInstance;

    expandButton.disabled = false; // Odblokowanie przycisku na początku
    initializeMacy(); // Inicjalizacja macyInstance

    function initializeMacy() {
        macyInstance = Macy({
            container: '#macy-container',
            trueOrder: false,
            waitForImages: false,
            margin: 10,
            columns: 3
        });
    }

    function showNextItems() {
        for (let i = currentIndex; i < currentIndex + itemsPerLoad && i < galleryContainer.children.length; i++) {
            galleryContainer.children[i].style.display = "block";
        }
        currentIndex += itemsPerLoad;

        macyInstance.recalculate(true);
        checkDisplayStatus(); // Sprawdzenie, czy wszystkie elementy są wyświetlone
    }

    function checkDisplayStatus() {
        const hiddenElements = Array.from(galleryContainer.children).slice(currentIndex);
        if (hiddenElements.length === 0) {
            expandButton.style.display = "none"; // Ukrycie przycisku, jeśli wszystkie elementy są wyświetlone
        }
    }

    for (let i = itemsPerLoad; i < galleryContainer.children.length; i++) {
        galleryContainer.children[i].style.display = "none";
    }

    if (galleryContainer.children.length > itemsPerLoad) {
        expandButton.style.display = "block";
        expandButton.addEventListener("click", showNextItems);
    } else {
        expandButton.style.display = "none";
    }
});