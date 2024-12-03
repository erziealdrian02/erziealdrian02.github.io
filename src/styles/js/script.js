// navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.add('hidden');
    toTop.classList.remove('flex');
  }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Klik di luar Hamburger
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// Darkmode Toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  darkToggle.checked = true; // Jika tema adalah 'dark', toggle akan aktif
} else {
  darkToggle.checked = false; // Jika tidak, toggle akan tidak aktif
}

const texts = [
  'Fullstack Developer',
  'Front-end Developer',
  'Back-end Developer',
  'UI/UX Designer',
]; // Tambahkan tulisan lainnya di sini
const typingElement = document.querySelector('.typing');

let textIndex = 0; // Indeks teks saat ini
let charIndex = 0; // Indeks karakter saat ini
let isDeleting = false; // Apakah sedang menghapus teks
const typingSpeed = 100; // Kecepatan mengetik (ms)
const deletingSpeed = 50; // Kecepatan menghapus (ms)
const delayBetweenTexts = 1500; // Jeda sebelum berpindah teks (ms)

function typeText() {
  const currentText = texts[textIndex]; // Teks yang sedang ditampilkan

  if (isDeleting) {
    charIndex--; // Menghapus karakter
  } else {
    charIndex++; // Mengetik karakter
  }

  // Perbarui teks pada elemen
  typingElement.textContent = currentText.slice(0, charIndex);

  if (!isDeleting && charIndex === currentText.length) {
    // Jika selesai mengetik, tunggu sebentar sebelum menghapus
    setTimeout(() => (isDeleting = true), delayBetweenTexts);
  } else if (isDeleting && charIndex === 0) {
    // Jika selesai menghapus, pindah ke teks berikutnya
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length; // Pindah ke teks berikutnya
  }

  // Tentukan kecepatan mengetik/hapus
  const speed = isDeleting ? deletingSpeed : typingSpeed;
  setTimeout(typeText, speed);
}

// Mulai animasi mengetik
typeText();

function switchTab(tabId) {
  // Sembunyikan semua tab content
  document.querySelectorAll('.tab-content > div').forEach((content) => {
    content.classList.add('hidden');
    content.removeAttribute('data-tab-active');
  });

  // Tampilkan tab yang dipilih
  const selectedTab = document.getElementById(tabId);
  selectedTab.classList.remove('hidden');
  selectedTab.setAttribute('data-tab-active', '');

  // Update state button
  document.querySelectorAll('[role="tab"]').forEach((tab) => {
    tab.setAttribute('aria-selected', 'false');
    tab.classList.remove(
      'border-primary',
      'dark:border-blue',
      'text-primary',
      'dark:text-blue'
    );
    tab.classList.add('border-transparent', 'text-gray-500');
  });

  document
    .querySelector(`[data-tab="${tabId}"]`)
    .setAttribute('aria-selected', 'true');
  document
    .querySelector(`[data-tab="${tabId}"]`)
    .classList.remove('border-transparent', 'text-gray-500');
  document
    .querySelector(`[data-tab="${tabId}"]`)
    .classList.add(
      'border-primary',
      'dark:border-blue',
      'text-primary',
      'dark:text-blue'
    );
}

// Set tab pertama sebagai active saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
  switchTab('programming-content');
});
