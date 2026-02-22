const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const mobileLinks = document.querySelectorAll('.mobile-link');

function toggleMenu() {
    // Cek apakah menu sedang tertutup (cek lewat opacity)
    const isClosed = mobileMenu.classList.contains('opacity-0');

    if (isClosed) {
        // MUNCULKAN MENU
        mobileMenu.classList.remove('-translate-y-full', 'opacity-0', 'pointer-events-none');
        mobileMenu.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');

        // ANIMASI IKON (Hamburger hilang, X muncul)
        menuIcon.classList.add('scale-0', 'opacity-0', 'rotate-90');
        closeIcon.classList.remove('scale-0', 'opacity-0', 'rotate-90');
        closeIcon.classList.add('scale-100', 'opacity-100', 'rotate-0');

        document.body.classList.add('overflow-hidden');
    } else {
        // SEMBUNYIKAN MENU
        mobileMenu.classList.add('-translate-y-full', 'opacity-0', 'pointer-events-none');
        mobileMenu.classList.remove('translate-y-0', 'opacity-100', 'pointer-events-auto');

        // ANIMASI IKON (X hilang, Hamburger muncul)
        menuIcon.classList.remove('scale-0', 'opacity-0', 'rotate-90');
        menuIcon.classList.add('scale-100', 'opacity-100', 'rotate-0');
        closeIcon.classList.add('scale-0', 'opacity-0', 'rotate-90');
        closeIcon.classList.remove('scale-100', 'opacity-100', 'rotate-0');

        document.body.classList.remove('overflow-hidden');
    }
}

// Event Listeners
menuBtn.addEventListener('click', toggleMenu);
mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));

AOS.init({ duration: 1000, once: true });
lucide.createIcons();