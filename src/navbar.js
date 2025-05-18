
    const menu = document.getElementById('seasonMenu');
    const toggleBtn = document.querySelector('.menu-toggle');
    let isOpen = false;

    function toggleMenu() {
    isOpen = !isOpen;
    if (isOpen) {
    menu.classList.add('show');
} else {
    menu.classList.remove('show');
}
}

    document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !toggleBtn.contains(e.target)) {
    menu.classList.remove('show');
    isOpen = false;
}
});