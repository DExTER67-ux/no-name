const searchInput = document.querySelector('.search-input');
const searchResults = document.querySelector('.search-results');

searchInput.addEventListener('input',() => {
    const query = searchInput.value.trim().toLowerCase();

    if (query === ''){
        searchResults.innerHTML = '';
        return;
    }

    const matches = places.filter(place => place.name.toLowerCase().includes(query)) || places.filter(place => place.location.toLowerCase().includes(query));

    if (matches.length === 0){
        searchResults.innerHTML = '<p>No results found</p>';
        return;
    }

    searchResults.innerHTML = matches
    .map(place => `<p>${place.name} <span>${place.location}</span></p>`)
    .join('');

});