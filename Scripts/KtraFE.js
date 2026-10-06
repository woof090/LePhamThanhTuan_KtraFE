const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');

if (searchForm) {
    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const keyword = searchInput.value.trim();
        if (keyword === '') { searchInput.focus(); return; }
        alert('Bạn đang tìm: ' + keyword);
    });
}
const cartCount = document.getElementById('cartCount');
let count = 0;

document.querySelectorAll('.add-cart').forEach(function (btn) {
    btn.addEventListener('click', function () {
        count++;
        if (cartCount) cartCount.textContent = count;
    });
});
const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');

if (priceRange) {
    priceRange.addEventListener('input', function () {
        const max = Number(priceRange.value);
        priceValue.textContent = max;
        document.querySelectorAll('.product').forEach(function (p) {
            const price = Number(p.dataset.price);
            p.classList.toggle('hide', price > max);
        });
    });
}
document.querySelectorAll('.nav').forEach(function (btn) {
    btn.addEventListener('click', function () {
        const track = document.getElementById(btn.dataset.target);
        const step = 480;
        track.scrollBy({ left: btn.classList.contains('next') ? step : -step });
    });
});