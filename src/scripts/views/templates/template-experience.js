const createExperienceTemplate = (programming) => {
  // Array untuk pengalaman kerja
  const workExperience = [
    {
      logo: './images/company/kpn.jpg',
      companyName: 'KPN Corp',
      position: 'Fullstack Developer Intern',
      duration: 'July 2024 - Sekarang',
      description:
        'Bertanggung jawab membantu tim developer mengembangkan website internal perusahaan dengan membangun program berstandar OOP. Bekerja sama menggunakan GitHub untuk kolaborasi tim dan menyelesaikan proyek tepat waktu, serta mempresentasikan hasil program kepada pengguna dan melakukan revisi sesuai kebutuhan.',
    },
    {
      logo: './images/company/Designer.jpeg',
      companyName: 'Full Stack Developer Freelance',
      position: '',
      duration: 'Jan 2020 - Sekarang',
      description:
        'Membangun program secara mandiri sesuai kebutuhan klien dan berinteraksi untuk menjelaskan solusi teknis. Menyelesaikan masalah pengguna dengan pendekatan problem-solving yang efektif, menyusun dokumentasi teknis, serta memberikan dukungan pasca-pengembangan. Mengelola proyek dari perencanaan hingga implementasi dengan fokus pada kualitas dan efisiensi.',
    },
    {
      logo: './images/company/daunbiru.jpeg',
      companyName: 'PT. Daun Biru Engineering',
      position: 'Junior Developer Intern',
      duration: 'Desember 2018 - Maret 2019',
      description:
        'Mendapatkan pengalaman praktis dalam pengembangan web dan sertifikat kompetensi, sambil bertanggung jawab atas website internal perusahaan menggunakan Framework CodeIgniter dan meningkatkan kemampuan pemrograman.',
    },
  ];

  // Array untuk akademi
  const academies = [
    {
      logo: './images/academy/unindra.jpg',
      institution: 'Universitas Indraprasta PGRI',
      location: 'Jakarta Timur, Indonesia',
      duration: 'Agustus 2020 - October 2024',
      degree: 'Sarjana Teknik Informatika, 3.39',
    },
    {
      logo: './images/academy/kampusmerdeka.jpg',
      institution:
        'Program Studi Independen Bersertifikat Angkatan 4 (SIB 2023)',
      location: '',
      duration: 'Februari - July 2023',
      degree: 'Pengembang Front-End Web dan Back-End, 88.22',
    },
    {
      logo: './images/academy/fatahillah.png',
      institution: 'SMK Fatahillah Cielungsi',
      location: 'Kab. Bogor, Indonesia',
      duration: 'Juni 2017 - October 2020',
      degree: 'Rekayasa Perangkat Lunak, 81.00',
    },
  ];

  // Menghasilkan HTML untuk pengalaman kerja
  const workExperienceHTML = workExperience
    .map(
      ({ logo, companyName, position, duration, description }) => `  
      <div class="bg-gray-200 dark:bg-gray-600 rounded-md p-6 shadow-lg mb-4">  
        <div class="flex flex-wrap lg:flex-nowrap items-center space-x-6">  
          <div class="w-full lg:w-1/5 flex justify-center">  
            <img src="${logo}" alt="Logo Perusahaan" class="mb-4 lg:mb-0 w-28 h-28 rounded-full shadow-md scale-100" />  
          </div>  
          <div class="w-4/5">  
            <div class="flex flex-wrap justify-between">  
              <h1 class="text-center text-lg font-bold text-primary dark:text-blue">  
                ${companyName} ${
        position
          ? `<span class="text-sm text-base font-normal text-secondary dark:text-slate-400">- ${position}</span>`
          : ''
      }  
              </h1>  
              <h2 class="text-center text-sm text-gray-600 dark:text-gray-300 inline-block mt-1">${duration}</h2>  
            </div>  
            <p class="text-gray-700 dark:text-gray-200 text-sm text-justify">${description}</p>  
          </div>  
        </div>  
      </div>  
    `
    )
    .join('');

  // Menghasilkan HTML untuk akademi
  const academiesHTML = academies
    .map(
      ({ logo, institution, location, duration, degree }) => `  
      <div class="bg-gray-200 dark:bg-gray-600 rounded-md p-6 shadow-lg mb-4">  
        <div class="flex flex-wrap lg:flex-nowrap items-center space-x-6">  
          <div class="w-full lg:w-1/5 flex justify-center">  
            <img src="${logo}" alt="Logo Kampus" class="w-28 h-28 rounded-full shadow-md scale-100 bg-white" />  
          </div>  
          <div class="w-4/5">  
            <div class="flex flex-wrap justify-center lg:justify-between">  
              <h1 class="text-center text-lg font-bold text-primary dark:text-blue">${institution}  
                ${
                  location
                    ? `<span class="text-sm text-base font-normal text-secondary dark:text-slate-400">- ${location}</span>`
                    : ''
                }  
              </h1>  
              <h2 class="text-center text-xs text-gray-600 dark:text-gray-300 inline-block mt-1">${duration}</h2>  
              <h2 class="text-center text-normal text-gray-600 dark:text-gray-300 mt-1">${degree}</h2>  
            </div>  
          </div>  
        </div>  
      </div>  
    `
    )
    .join('');

  // Menghasilkan HTML penuh
  return `  
      <div class="container">  
        <div class="w-full px-4">  
          <div class="w-full mx-auto text-center mb-16">  
            <h4 class="font-semibold text-lg text-primary dark:text-blue mb-2">Programming</h4>  
            <h2 class="font-bold text-white text-3xl mb-4 lg:text-4xl dark:text-dark">Pengalaman Kerja dan</h2>  
            <p class="font-medium text-md text-secondary md:text-lg dark:text-slate-800">Beberapa Bahasa Pemrograman dan Tools yang di gunakan</p>  
          </div>  
        </div>  
  
        <!-- Tab Navigation Buttons -->  
        <div class="w-full lg:px-4">  
          <div class="max-w-[100%] mx-auto bg-slate-300 dark:bg-slate-800 rounded-lg p-4">  
            <div class="flex justify-center bg-slate-800 dark:bg-slate-300 rounded-lg mb-4" role="tablist">  
              <button class="px-4 py-2 font-medium border-b-4 border-primary dark:border-blue text-primary ease-in-out duration-300 transition hover:border-primary hover:dark:text-blue hover:dark:border-blue hover:text-primary"  
                      id="programming-tab" data-tab="programming-content" role="tab" aria-selected="true">Pengalaman</button>  
              <button class="px-4 py-2 ml-3 font-medium border-b-4 border-transparent text-gray-500 ease-in-out duration-300 transition hover:border-primary hover:dark:text-blue hover:dark:border-blue hover:text-primary"  
                      id="tools-tab" data-tab="tools-content" role="tab" aria-selected="false">Akademi</button>  
            </div>  
  
            <!-- Tab Content -->  
            <div class="tab-content p-4">  
              <div id="programming-content" class="hidden transition-opacity duration-150 ease-linear" role="tabpanel">  
                ${workExperienceHTML}  
              </div>  
  
              <div id="tools-content" class="hidden transition-opacity duration-150 ease-linear" role="tabpanel">  
                ${academiesHTML}  
              </div>  
            </div>  
          </div>  
        </div>  
      </div>  
    `;
};

export { createExperienceTemplate };
