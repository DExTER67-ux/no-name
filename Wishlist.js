function toggleWishlist(placename) {
    let saved = JSON.parse(localStorage.getItem('wishlist') || '[]');

    if(saved.includes(placename)){
        saved = saved.filter(name => name !=placename);
    } else {
        saved.push(placename);
    }

    localStorage.setItem('wishlist',JSON.stringify(saved))

}