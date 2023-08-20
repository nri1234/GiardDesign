document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.querySelector('.search-icon');
    const searchBar = document.querySelector('.search-bar');
    const searchInput = document.querySelector("input[type='search']");

    searchIcon.addEventListener('click', function() {
        if (searchBar.style.display === 'none' || searchBar.style.display === '') {
            searchBar.style.display = 'flex';
            searchInput.focus();
        } else {
            searchBar.style.display = 'none';
        }
    });
});