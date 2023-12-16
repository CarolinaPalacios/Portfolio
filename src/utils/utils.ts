import type {
  Projects,
  Technologies,
  Contact,
  Experience,
  About,
  Image,
} from '../utils/utils.d';

export type { Projects, Technologies, Contact, Experience, About, Image };

export const projects: Projects[] = [
  {
    id: 1,
    title: 'Bookbuster',
    subtitle: { en: 'Library web application', es: 'Librería web' },
    extra: 'https://github.com/bookbuster-ar/web-app-front',
    description: {
      en: `E-commerce developed as the final project during the Henry Bootcamp. We created an e-commerce focused on the sale of books and user subscriptions.
        It was a substantial challenge as I had to learn new technologies and work methodologies.
        Bookbuster is a digital bookstore where users can register to purchase new and used books, audiobooks, and e-pub editions. The primary idea is to foster a community of reading enthusiasts. Users can leave book reviews, share memorable quotes, and engage with comments and likes on others' reviews and quotes. Additionally, users can organize their favorite and to-be-read books on different bookshelves.
        Furthermore, since the company did not have an inventory management ERP, I took the initiative to create an administrator dashboard. This dashboard allows for various functions, including user management, transaction monitoring, and inventory control.`,
      es: 'E-commerce desarrollado como proyecto final durante el Henry Bootcamp. Junto con mi equipo creamos una e-commerce enfocada en la venta de libros y suscripciones de usuarios. Fue un gran desafío ya que tuve que aprender nuevas tecnologías y metodologías de trabajo en un tiempo limitado. Bookbuster es una librería digital donde los usuarios pueden registrarse para comprar y alquilar libros nuevos y usados, comprar audiolibros y e-pub.La idea principal es fomentar una comunidad de entusiastas de la lectura. Los usuarios pueden dejar reseñas de libros, compartir citas memorables e interactuar con comentarios y me gusta en las reseñas y citas de otros. También, los usuarios pueden organizar sus libros favoritos y los que están por leer en diferentes estanterías. Como la empresa no contaba con un ERP de gestión de inventario, tomé la iniciativa de crear un dashboard de administrador. Este dashboard permite varias funciones, incluida la gestión de usuarios, el seguimiento de transacciones y el control de inventario.',
    },
    images: {
      cover:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1698108138/ql5fvtodcpghdmdj1hxu.png',
      secondImage:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1698108137/mkpokl3zrt0454g7wu6c.png',
      thirdImage:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1698108136/ifpcgr5xgyqujcaomile.png',
      fourthImage:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1698108138/khvewispabqnjqgga5ub.png',
      fifthImage:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1698108138/wexbjrfoihkig2gjjorn.png',
      sixthImage:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1698108139/hdzrur09c8hmqkqllo9i.png',
    },
    url: 'https://bookbuster-ar.vercel.app/',
    github: 'https://github.com/bookbuster-ar/web-app-backend',
    video: 'https://www.youtube.com/embed/uYzy7-6IETo',
    technologies: [
      {
        name: 'React',
        svg: 'https://www.svgrepo.com/show/452092/react.svg',
      },
      {
        name: 'Redux Tooklit',
        svg: 'https://www.svgrepo.com/show/452093/redux.svg',
      },
      {
        name: 'Tailwind',
        svg: 'https://www.svgrepo.com/show/374118/tailwind.svg',
      },
      {
        name: 'Javascript',
        svg: 'https://www.svgrepo.com/show/349419/javascript.svg',
      },
      {
        name: 'Node.js',
        svg: 'https://www.svgrepo.com/show/452075/node-js.svg',
      },
      {
        name: 'Express',
        svg: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg',
      },
      {
        name: 'PostgreSQL',
        svg: 'https://www.svgrepo.com/show/354200/postgresql.svg',
      },
      {
        name: 'Sequelize',
        svg: 'https://www.svgrepo.com/show/374071/sequelize.svg',
      },
      {
        name: 'Firebase',
        svg: 'https://www.svgrepo.com/show/373595/firebase.svg',
      },
      {
        name: 'Cloudinary',
        svg: 'https://www.svgrepo.com/show/353566/cloudinary.svg',
      },
      {
        name: 'Nodemailer',
        svg: 'https://raw.githubusercontent.com/nodemailer/nodemailer/master/assets/nm_logo_200x136.png',
      },
      {
        name: 'Mercado Pago',
        svg: 'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1697684517/hzln1mva5cla8swzbicu.png',
      },
      {
        name: 'GitHub',
        svg: 'https://www.svgrepo.com/show/521688/github.svg',
      },
    ],
  },
  {
    id: 2,
    title: 'Rick And Morty WIKI',
    subtitle: { en: 'Web application', es: 'Aplicación web' },
    images: {
      cover: '',
      secondImage: '',
      thirdImage: '',
    },
    github: 'https://github.com/CarolinaPalacios/rick-and-morty-wiki',
    url: '',
    description: { en: '', es: '' },
    technologies: [
      {
        name: 'Typescript',
        svg: 'https://www.svgrepo.com/show/349540/typescript.svg',
      },
      {
        name: 'Node.js',
        svg: 'https://www.svgrepo.com/show/452075/node-js.svg',
      },
      {
        name: 'React',
        svg: 'https://www.svgrepo.com/show/452092/react.svg',
      },
      {
        name: 'Redux Toolkit',
        svg: 'https://www.svgrepo.com/show/452093/redux.svg',
      },
      {
        name: 'Tailwind',
        svg: 'https://www.svgrepo.com/show/374118/tailwind.svg',
      },
      {
        name: 'Playwright',
        svg: 'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1697684518/cepdnfvlysruzpoc4rpd.svg',
      },
    ],
  },
  {
    id: 3,
    title: 'Dog App',
    subtitle: { en: 'Web application', es: 'Aplicación web' },
    images: {
      cover:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1698107688/y6gitqo5uxveeyt3uwmg.png',
      secondImage:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1698107686/vho8ghjqeko45decdtsd.png',
      thirdImage:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1698107684/ysonlra0drgd4944jhkv.png',
    },
    video: 'https://www.youtube.com/embed/q_oiNJsLKXg',
    github: 'https://github.com/CarolinaPalacios/PI-Dogs',
    url: 'https://github.com/CarolinaPalacios/PI-Dogs',
    description: {
      en: 'I developed a single page application focused on the canine world, using The Dog API as a data source. This innovative app allows users to explore a wide variety of dog breeds, providing an interactive and engaging experience.',
      es: 'Desarrollé una SPA enfocada en el mundo canino, utilizando The Dog API como fuente de datos. Esta innovadora aplicación permite a los usuarios explorar una gran variedad de razas de perros, brindando una experiencia interactiva y entretenida.',
    },
    technologies: [
      {
        name: 'Javascript',
        svg: 'https://www.svgrepo.com/show/349419/javascript.svg',
      },
      {
        name: 'Node.js',
        svg: 'https://www.svgrepo.com/show/452075/node-js.svg',
      },
      {
        name: 'Express',
        svg: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg',
      },
      {
        name: 'PostgreSQL',
        svg: 'https://www.svgrepo.com/show/354200/postgresql.svg',
      },
      {
        name: 'React',
        svg: 'https://www.svgrepo.com/show/452092/react.svg',
      },
      {
        name: 'Redux',
        svg: 'https://www.svgrepo.com/show/452093/redux.svg',
      },
      {
        name: 'Sequelize',
        svg: 'https://www.svgrepo.com/show/374071/sequelize.svg',
      },
    ],
  },
  {
    id: 4,
    title: 'Portfolio',
    subtitle: { en: 'Personal portfolio', es: 'Portafolio personal' },
    images: {
      cover:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1698038127/wfmqzjx1zdwtw3g5aji4.png',
      secondImage:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1698038127/owts8kazaxx0xnjft1ek.png',
      thirdImage:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1698038128/bmzxxiw8vt9s3glig1un.png',
    },
    description: {
      en: 'My personal portfolio website',
      es: 'Mi sitio web de portafolio personal',
    },
    github: 'https://github.com/CarolinaPalacios/portfolio',
    url: 'https://carolina-palacios.vercel.app/en',
    technologies: [
      {
        name: 'Typescript',
        svg: 'https://www.svgrepo.com/show/349540/typescript.svg',
      },
      {
        name: 'Astro',
        svg: 'https://icon.icepanel.io/Technology/png-shadow-512/Astro.png',
      },
      {
        name: 'Tailwind Css',
        svg: 'https://www.svgrepo.com/show/374118/tailwind.svg',
      },
      {
        name: 'React',
        svg: 'https://www.svgrepo.com/show/452092/react.svg',
      },
    ],
  },
];

export const contacts: Contact[] = [
  {
    name: 'caaro.palacios@hotmail.com',
    svg: 'https://www.svgrepo.com/show/373951/outlook.svg',
    text: { en: 'Send me an email', es: 'Envíame un correo electrónico' },
    link: 'mailto:caaro.palacios@hotmail.com',
  },
  {
    name: '/CarolinaPalacios',
    svg: 'https://www.svgrepo.com/show/450156/github.svg',
    text: { en: 'GitHub Profile', es: 'Perfil de GitHub' },
    link: 'https://github.com/CarolinaPalacios',
  },
  {
    name: '/in/CarolinaPalacios1',
    svg: 'https://www.svgrepo.com/show/448234/linkedin.svg',
    text: { en: 'LinkedIn Profile', es: 'Perfil de LinkedIn' },
    link: 'https://www.linkedin.com/in/CarolinaPalacios1',
  },
];

export const experience: Experience[] = [
  {
    title: 'Bookbuster web application',
    company: 'Bookbuster',
    timeframe: {
      en: 'July 2023 - August 2023',
      es: 'Julio 2023 - Agosto 2023',
    },
    image: {
      cover: '',
    },
    description: {
      en: `During my Back-End development internship, I worked with a team to build a robust MVP web application using Node.js, Express, Sequelize, PostgreSQL, Cloudinary, and Firebase for user authentication. I also integrated MercadoPago for secure online payments. The front end was built with React, Vite, Redux Toolkit, and Tailwind CSS for a responsive UI. This experience enhanced my skills and contributed to my growth as a developer.`,
      es: 'Durante mi pasantía como Back-end developer, trabajé con mi equipo para construir una MVP robusta utilizando Node.js, Express, Sequelize, PostgreSQL, Cloudinary, y Firebase para autenticación de usuario. También integré MercadoPago para pagos en línea seguros. La interfaz se creó con React, Vite, Redux Toolkit y Tailwind CSS para una interfaz de usuario receptiva. Esta experiencia mejoró mis habilidades y contribuyó a mi crecimiento como desarrolladora.',
    },
    about: [
      {
        about1: {
          en: 'Developed server and database components utilizing Node.js, Express, and Sequelize to facilitate PostgreSQL integration.',
          es: 'Desarrollé componentes de servidor y bases de datos utilizando Node.js, Express y Sequelize para lograr una integración con PostgreSQL.',
        },
        about2: {
          en: 'Implemented MercadoPago as the payment gateway to ensure secure online transactions.',
          es: 'Implementé MercadoPago como una pasarela de pago para garantizar la seguridad en las transacciones en línea.',
        },
        about3: {
          en: 'Leveraged Firebase for user authentication, guaranteeing platform security.',
          es: 'Empleamos Firebase para la autenticación de usuarios, asegurando así la seguridad de la plataforma.',
        },
        about4: {
          en: `Integrated MercadoPago's React SDK to simplify the payment process on the platform.`,
          es: 'Realizamos la integración del SDK de MercadoPago para simplificar el proceso de pago en la plataforma.',
        },
        about5: {
          en: 'Leveraged Vite for fast development feedback and optimized bundle generation.',
          es: 'Aprovechamos Vite para obtener una retroalimentación más rápida durante el desarrollo y generar bundles optimizados.',
        },
        about6: {
          en: `Employed Tailwind CSS for visually appealing and responsive UI design.`,
          es: `Empleamos Tailwind CSS para diseñar interfaces visuales atractivas y completamente adaptables.`,
        },
        about7: {
          en: `Contributed to the overall user experience by enhancing user authentication and interactions through Firebase.`,
          es: `Aporté a la experiencia del usuario al mejorar la autenticación de usuarios y las interacciones mediante el uso de Firebase.`,
        },
      },
    ],
    technologies: [
      {
        name: 'React',
        svg: 'https://www.svgrepo.com/show/452092/react.svg',
      },
      {
        name: 'Redux',
        svg: 'https://www.svgrepo.com/show/452093/redux.svg',
      },
      {
        name: 'Node.js',
        svg: 'https://www.svgrepo.com/show/452075/node-js.svg',
      },
      {
        name: 'Express',
        svg: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg',
      },
      {
        name: 'PostgreSQL',
        svg: 'https://www.svgrepo.com/show/354200/postgresql.svg',
      },
      {
        name: 'Sequelize',
        svg: 'https://www.svgrepo.com/show/374071/sequelize.svg',
      },
      {
        name: 'Javascript',
        svg: 'https://www.svgrepo.com/show/349419/javascript.svg',
      },
      {
        name: 'Tailwind',
        svg: 'https://www.svgrepo.com/show/374118/tailwind.svg',
      },
      {
        name: 'HTML',
        svg: 'https://www.svgrepo.com/show/452228/html-5.svg',
      },
      {
        name: 'CSS',
        svg: 'https://www.svgrepo.com/show/452185/css-3.svg',
      },
      {
        name: 'GitHub',
        svg: 'https://www.svgrepo.com/show/35001/github.svg',
      },
      {
        name: 'Git',
        svg: 'https://www.svgrepo.com/show/452210/git.svg',
      },
      {
        name: 'Vercel',
        svg: 'https://assets.vercel.com/image/upload/front/favicon/vercel/57x57.png',
      },
      {
        name: 'pnpm',
        svg: 'https://www.svgrepo.com/show/373778/light-pnpm.svg',
      },
      {
        name: 'npm',
        svg: 'https://www.svgrepo.com/show/354128/npm.svg',
      },
      {
        name: 'Jest',
        svg: 'https://www.svgrepo.com/show/353930/jest.svg',
      },
      {
        name: 'Vite',
        svg: 'https://www.svgrepo.com/show/374167/vite.svg',
      },
    ],
  },
];
