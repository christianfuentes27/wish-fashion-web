const categories = document.querySelectorAll('.categories-item');
const products = document.querySelectorAll('.products-item');

categories.forEach(categorie => {
    categorie.addEventListener('click', (e) => {
        markActive(e.target);
        filterProducts(e.target.getAttribute('data-filter'));
    });
});

function markActive(target) {
    Array.from(categories).find(categorie => categorie.classList.contains('active')).classList.remove('active');
    target.classList.add('active');
}

function filterProducts(dataFilter) {
    products.forEach(product => {
        if (dataFilter == null) {
            product.style.display = "block";
        } else if (product.getAttribute('data-filter') != dataFilter) {
            product.style.display = "none";
        } else {
            product.style.display = "block";
        }
    });
}