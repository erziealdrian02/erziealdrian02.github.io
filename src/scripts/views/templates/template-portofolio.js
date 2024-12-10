const createPortofolioTemplate = (portofolio) => {
  // Array berisi informasi tentang proyek
  const projects = [
    {
      image: './images/portofolio/reimburse/reimburse_ca.png',
      title: 'ERP Reimbursement Sistem',
      description:
        'Sistem ini mencakup fitur pengajuan uang muka, perjalanan bisnis, tiket, hotel, dan perjalanan pulang. Sistem juga punya fitur admin yang dibatasi berdasar lokasi dan departemen. Tugas admin ialah melihat transaksi, impor/ekspor Excel, dan buat laporan PDF. Sistem terintegrasi untuk aktivitas bisnis dengan manajemen terstruktur.',
      specifications: [
        { label: 'Bahasa Pemrograman', value: 'PHP (Laravel)' },
        { label: 'Database', value: 'MySQL' },
        { label: 'Front-end', value: 'HTML, CSS, JavaScript' },
        { label: 'Framework/Library', value: 'Laravel, Bootstrap' },
      ],
    },
    {
      image: './images/portofolio/mushroom/mushroom_index.png',
      title: 'Mushroom Scanner',
      description:
        'Proyek ini mengembangkan sistem yang dapat mendeteksi jenis-jenis jamur yang aman untuk dikonsumsi. Sistem ini menggunakan teknologi machine learning untuk mengidentifikasi lebih dari 12 jenis jamur dan menentukan apakah jamur tersebut dapat dimakan atau tidak.',
      specifications: [
        {
          label: 'Bahasa Pemrograman',
          value: 'JavaScript (ReactJS) dan Python (FlaskAPI)',
        },
        { label: 'Database', value: 'MySQL' },
        { label: 'Front-end', value: 'HTML, CSS, JavaScript' },
        { label: 'Back-end', value: 'Python' },
        { label: 'Framework/Library', value: 'ReactJS, Tailwind, FlaskAPI' },
      ],
    },
    {
      image: './images/portofolio/weather/weather_maps.png',
      title: 'Weathering With Us',
      description:
        'Proyek ini mengembangkan sistem yang dapat mendeteksi dan menampilkan prakiraan cuaca di Indonesia hingga 3 hari ke depan. Sistem ini bekerja secara real-time dan menyajikan informasi cuaca melalui tampilan peta, memudahkan pengguna untuk melihat kondisi cuaca hari ini, besok, dan lusa di seluruh wilayah Indonesia. Yang di mana data yang di ambil merupakan data dari BMKG.',
      specifications: [
        { label: 'Bahasa Pemrograman', value: 'PHP (Native)' },
        {
          label: 'API',
          value: 'BMKG API (https://ibnux.github.io/BMKG-importer/)',
        },
        { label: 'Front-end', value: 'HTML, CSS, JavaScript' },
        { label: 'Framework/Library', value: 'Tailwind' },
      ],
    },
    {
      image: './images/portofolio/spk/karyawan.png',
      title: 'SPK Pemilihan Karyawan terbaik',
      description:
        'SPK untuk memilih karyawan terbaik berdasar penilaian pimpinan atas kehadiran, etos kerja, dll. Sistem ini mengidentifikasi karyawan berkinerja terbaik untuk pertimbangan penghargaan atau promosi, sehingga proses pemilihan lebih terstruktur dan objektif.',
      specifications: [
        { label: 'Bahasa Pemrograman', value: 'PHP (Native)' },
        { label: 'Database', value: 'MySQL' },
        { label: 'Front-end', value: 'HTML, CSS, JavaScript' },
        { label: 'Framework/Library', value: 'Bootstrap' },
      ],
    },
  ];

  // Menghasilkan HTML untuk setiap proyek menggunakan map
  const projectsHTML = projects
    .map(
      ({ image, title, description, specifications }) => `  
      <div class="mb-12 p-4 md:w-1/2">  
        <div class="rounded-md shadow-md overflow-hidden hover:scale-105 ease-in-out duration-300 transition">  
          <img src="${image}" alt="Gambar Portofolio" class="w-full h-48 object-cover"/>  
        </div>  
        <h3 class="font-semibold text-xl text-dark mt-5 mb-3 dark:text-white">  
          ${title}  
        </h3>  
        <p class="font-medium text-base text-secondary dark:text-slate-300 text-justify">  
          ${description}  
        </p>  
        <p class="font-bold text-base text-dark dark:text-slate-300">  
          Spesifikasi:  
        </p>  
        <ul class="list-disc ml-4 text-dark dark:text-slate-300">  
          ${specifications
            .map(
              (spec) => `  
            <li><b>${spec.label}:</b> ${spec.value}</li>  
          `
            )
            .join('')}  
        </ul>  
      </div>  
    `
    )
    .join('');

  // Template utama
  return `  
      <div class="container">  
        <div class="w-full px-4">  
          <div class="max-w-full mx-auto text-center mb-16">  
            <h4 class="font-semibold text-lg text-primary dark:text-blue mb-2">  
              Portofolio  
            </h4>  
            <h2 class="font-bold text-dark text-3xl mb-4 dark:text-white">  
              Project Terbaru  
            </h2>  
            <p class="font-medium text-md text-secondary dark:text-slate-300">  
              Beberapa Project yang saya ikut serta dalam pengerjaannya, Beberapa program menggunakan Framework Seperti Laravel, NodeJS, ReactJS, atau FlaskAPI  
            </p>  
          </div>  
        </div>  
  
        <div class="w-fill px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">  
          ${projectsHTML}  
        </div>  
  
        <div class="w-full px-4">  
          <div class="max-w-full mx-auto text-center">  
            <a  
              href="https://github.com/erziealdrian02?tab=repositories"  
              class="block"  
            >  
              <h3 class="font-bold text-xl text-dark dark:text-white hover:text-primary dark:hover:text-blue">  
                Lihat Proyek Lainnya di  
                <svg class="fill-current inline-block w-5 mb-2" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">  
                  <title>GitHub</title>  
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />  
                </svg>  
                GitHub  
              </h3>  
            </a>  
          </div>  
        </div>  
      </div>  
    `;
};

export { createPortofolioTemplate };
