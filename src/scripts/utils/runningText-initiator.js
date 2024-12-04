const RunningTextInitiator = {
  init({ typingElement }) {
    if (!typingElement) {
      console.error('Typing Element not Found');
      return;
    }

    // Simpan style asli elemen
    const originalStyle = {
      position: typingElement.style.position,
      minHeight: typingElement.style.minHeight,
    };

    // Atur styling untuk mencegah pergeseran
    typingElement.style.position = 'relative';
    typingElement.style.minHeight = '1.5em'; // Sesuaikan dengan tinggi teks Anda

    // Buat elemen cursor
    const cursorElement = document.createElement('span');
    cursorElement.classList.add('typing-cursor');
    cursorElement.style.cssText = `  
      display: inline-block;  
      width: 2px;  
      height: 30px;  
      background-color: currentColor;  
      margin-left: 3px;  
      animation: blink 0.9s infinite; /* Ubah durasi blink menjadi 3 detik */  
    `;

    // Tambahkan style blink ke head
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `  
      @keyframes blink {  
        0%, 100% { opacity: 1; }  
        50% { opacity: 0; }  
      }  
    `;
    document.head.appendChild(styleSheet);

    const texts = [
      'Fullstack Developer',
      'Front-end Developer',
      'Back-end Developer',
      'UI/UX Designer',
    ];

    const typingSpeed = 50; // Kecepatan mengetik (ms)
    const deletingSpeed = 100; // Kecepatan menghapus (ms)
    const delayBetweenTexts = 1500; // Jeda sebelum berpindah teks (ms)

    let textIndex = 0; // Indeks teks saat ini
    let charIndex = 0; // Indeks karakter saat ini
    let isDeleting = false; // Apakah sedang menghapus teks

    const typeText = () => {
      const currentText = texts[textIndex]; // Teks yang sedang ditampilkan

      // Hapus cursor sebelumnya jika ada
      const existingCursor = typingElement.querySelector('.typing-cursor');
      if (existingCursor) {
        existingCursor.remove();
      }

      if (isDeleting) {
        charIndex--; // Menghapus karakter
      } else {
        charIndex++; // Mengetik karakter
      }

      // Perbarui teks pada elemen
      const displayText = currentText.slice(0, charIndex);
      typingElement.textContent = displayText;

      // Tambahkan kursor
      typingElement.appendChild(cursorElement.cloneNode(true));

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
    };

    // Mulai animasi mengetik
    typeText();

    // Kembalikan fungsi untuk membersihkan (opsional)
    return {
      destroy: () => {
        // Kembalikan style asli
        typingElement.style.position = originalStyle.position;
        typingElement.style.minHeight = originalStyle.minHeight;
        // Hapus style blink
        styleSheet.remove();
      },
    };
  },
};

export default RunningTextInitiator;
