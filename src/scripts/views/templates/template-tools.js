const createToolsTemplate = (about) => {
  // Array berisi informasi tentang bahasa pemrograman dan tools
  const tools = [
    {
      src: './svg/html-5-svgrepo-com.svg',
      alt: 'HTML',
      name: 'HTML',
      level: 'Advanced',
    },
    {
      src: './svg/css-3-svgrepo-com.svg',
      alt: 'CSS',
      name: 'CSS',
      level: 'Advanced',
    },
    {
      src: './svg/javascript-svgrepo-com.svg',
      alt: 'JavaScript',
      name: 'JavaScript',
      level: 'Intermediate',
    },
    {
      src: './svg/php-svgrepo-com.svg',
      alt: 'PHP',
      name: 'PHP',
      level: 'Advanced',
    },
    {
      src: './svg/nodejs-svgrepo-com.svg',
      alt: 'NodeJS',
      name: 'Node.js',
      level: 'Intermediate',
    },
    {
      src: './svg/python-svgrepo-com.svg',
      alt: 'Python',
      name: 'Python',
      level: 'Intermediate',
    },
    {
      src: './svg/bootstrap-4-logo-svgrepo-com.svg',
      alt: 'Bootstrap',
      name: 'Bootstrap',
      level: 'Advanced',
    },
    {
      src: './svg/tailwind-svgrepo-com.svg',
      alt: 'Tailwind',
      name: 'Tailwind',
      level: 'Intermediate',
    },
    {
      src: './svg/laravel-svgrepo-com.svg',
      alt: 'Laravel',
      name: 'Laravel',
      level: 'Advanced',
    },
    {
      src: './svg/flask-svgrepo-com.svg',
      alt: 'FlaskAPI',
      name: 'Flask',
      level: 'Beginner',
    },
    {
      src: './svg/vscode-svgrepo-com.svg',
      alt: 'VSCode',
      name: 'VSCode',
      level: 'Advanced',
    },
    {
      src: './svg/laragon-svgrepo-com.svg',
      alt: 'Laragon',
      name: 'Laragon',
      level: 'Advanced',
    },
    {
      src: './svg/mysql-logo-svgrepo-com.svg',
      alt: 'MySQL',
      name: 'MySQL',
      level: 'Advanced',
    },
    {
      src: './svg/github-142-svgrepo-com.svg',
      alt: 'GitHub',
      name: 'GitHub',
      level: 'Advanced',
    },
    {
      src: './svg/git-svgrepo-com.svg',
      alt: 'Git',
      name: 'Git',
      level: 'Intermediate',
    },
    {
      src: './svg/cpanel-svgrepo-com.svg',
      alt: 'CPanel',
      name: 'CPanel',
      level: 'Beginner',
    },
    {
      src: './svg/linux-svgrepo-com.svg',
      alt: 'Linux',
      name: 'Linux',
      level: 'Intermediate',
    },
  ];

  // Menghasilkan HTML untuk setiap item menggunakan map
  const toolsHTML = tools
    .map(
      ({ src, alt, name, level }) => `  
      <div class="flex flex-col items-center w-48 h-48 p-4 bg-slate-200 rounded-lg hover:scale-110 ease-in-out duration-300 transition">  
        <img src="${src}" alt="${alt}" class="w-24 h-24" />  
        <p class="mt-4 text-center font-medium text-lg">${name}</p>  
        <p class="text-center text-sm text-gray-500">${level}</p>  
      </div>  
    `
    )
    .join('');

  // Template utama
  return `  
      <div class="container">  
        <div class="w-full px-4">  
          <div class="max-w-full mx-auto text-center mb-16">  
            <h2 class="font-bold text-dark text-3xl mb-4 dark:text-white">  
              Bahasa Pemrograman dan Tools  
            </h2>  
            <p class="font-medium text-md text-secondary dark:text-slate-300">  
              Beberapa Bahasa Pemrograman, Framework dan Tools yang saya pernah Gunakan  
            </p>  
          </div>  
        </div>  
      </div>  
  
      <div class="relative overflow-hidden bg-primary dark:bg-blue p-10 mt-10">  
        <!-- Gradient Overlay -->  
        <div  
          class="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-primary dark:from-blue to-transparent opacity-80 pointer-events-none"  
        ></div>  
        <div  
          class="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-primary dark:from-blue to-transparent opacity-80 pointer-events-none"  
        ></div>  
  
        <!-- Marquee -->  
        <div class="flex gap-6 p-4 min-w-max animate-loop">  
          ${toolsHTML}  
        </div>  
      </div>  
    `;
};

export { createToolsTemplate };
