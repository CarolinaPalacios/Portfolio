import type {
  Projects,
  Technologies,
  Contact,
  Experience,
  About,
  Image,
  Certificates,
  Contents,
} from '../utils/utils.d'

export type {
  Projects,
  Technologies,
  Contact,
  Experience,
  About,
  Image,
  Certificates,
  Contents,
}

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
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1712087505/bb_pwghr0.png',
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
    title: 'Discord Clone',
    subtitle: {
      en: 'Web application',
      es: 'Aplicación web',
    },
    description: {
      en: `I developed a Discord clone using cutting-edge technologies like Nx, NestJS, React, and GraphQL. The project showcases my skills in creating real-time chat environments with features similar to Discord. Key highlights include Monorepo management, secure JWT authentication with Clerk, and integration of Livekit for high-quality real-time chat. The application includes features such as server creation, roles, permissions, and a robust WebSocket-based chat system.`,
      es: 'Desarrollé un clon de Discord utilizando tecnologías de vanguardia como Nx, NestJS, React y GraphQL. El proyecto muestra mis habilidades en la creación de entornos de chat en tiempo real con características similares a Discord. Los aspectos más destacados incluyen la gestión de Monorepo, la autenticación segura JWT con Clerk y la integración de Livekit para chat en tiempo real de alta calidad. La aplicación incluye características como creación de servidores, roles, permisos y un robusto sistema de chat basado en WebSocket.',
    },
    images: {
      cover:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1712087505/ds-5_mnjyn2.png',
      secondImage:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1712087508/ds-2_xo2cxf.png',
      thirdImage:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1712087508/ds-1_hts5et.png',
      fourthImage:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1712087507/ds-6_xlejo6.png',
      fifthImage:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1712087507/ds-3_dnwtsl.png',
      sixthImage:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1712087507/ds-4_fvlgxu.png',
    },
    url: 'https://github.com/CarolinaPalacios/discord-clone',
    github: 'https://github.com/CarolinaPalacios/discord-clone',
    technologies: [
      {
        name: 'React',
        svg: 'https://www.svgrepo.com/show/452092/react.svg',
      },
      {
        name: 'Vite',
        svg: 'https://www.svgrepo.com/show/374167/vite.svg',
      },
      {
        name: 'Zustand',
        svg: 'https://www.svgrepo.com/show/395866/bear.svg',
      },
      {
        name: 'Nx',
        svg: 'https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png',
      },
      {
        name: 'TypeScript',
        svg: 'https://www.svgrepo.com/show/349540/typescript.svg',
      },
      {
        name: 'NestJS',
        svg: 'https://www.svgrepo.com/show/373872/nestjs.svg',
      },
      {
        name: 'GraphQL',
        svg: 'https://www.svgrepo.com/show/373644/graphql.svg',
      },
      {
        name: 'PostgreSQL',
        svg: 'https://www.svgrepo.com/show/354200/postgresql.svg',
      },
      {
        name: 'Prisma',
        svg: 'https://www.svgrepo.com/show/373776/light-prisma.svg',
      },
      {
        name: 'Swagger',
        svg: 'https://www.svgrepo.com/show/354420/swagger.svg',
      },
      {
        name: 'Cypress',
        svg: 'https://www.svgrepo.com/show/373542/cypress.svg',
      },
      {
        name: 'Jest',
        svg: 'https://www.svgrepo.com/show/353930/jest.svg',
      },
      {
        name: 'WebSocket',
        svg: 'https://www.svgrepo.com/show/354553/websocket.svg',
      },
      {
        name: 'Docker',
        svg: 'https://www.svgrepo.com/show/373553/docker.svg',
      },
      {
        name: 'Apollo',
        svg: 'https://raw.githubusercontent.com/apollographql/apollo-client-devtools/main/assets/apollo-wordmark.svg',
      },
      {
        name: 'GitHub',
        svg: 'https://www.svgrepo.com/show/521688/github.svg',
      },
      {
        name: 'Git',
        svg: 'https://www.svgrepo.com/show/452210/git.svg',
      },
    ],
  },
  {
    id: 3,
    title: 'Tetris',
    subtitle: { en: 'Tetris game', es: 'Juego de Tetris' },
    images: {
      cover:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1712087509/tetris-inicio_bju2fz.png',
      secondImage:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1712087507/tetris3_xtc04s.png',
      thirdImage:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1712087507/tetris2_in3weu.png',
      fourthImage:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1712087506/tetris1_ykom6g.png',
    },
    description: {
      en: 'I developed a fully functional Tetris game using web technologies such as JavaScript, HTML, and CSS. The main goal was to recreate the classic Tetris experience with a focus on modularity and object-oriented structure. The game features all the expected characteristics of a traditional Tetris game, including piece movement, rotation, line clearing, scoring, difficulty levels, and background music. I implemented efficient algorithms for the game logic and collision detection.',
      es: `Desarrollé un juego de Tetris completamente funcional utilizando tecnologías web como JavaScript, HTML y CSS. El objetivo principal fue recrear la experiencia clásica del Tetris con un enfoque en la modularidad y la estructura orientada a objetos. El juego cuenta con todas las características esperadas de un Tetris tradicional, incluyendo el movimiento de las piezas, rotación, eliminación de filas, puntuación, niveles de dificultad y música de fondo. Implementé algoritmos eficientes para la lógica del juego y la detección de colisiones.`,
    },
    github: 'https://github.com/CarolinaPalacios/tetris',
    url: 'https://carolinapalacios.github.io/tetris/',
    technologies: [
      {
        name: 'JavaScript',
        svg: 'https://www.svgrepo.com/show/349419/javascript.svg',
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
        svg: 'https://www.svgrepo.com/show/521688/github.svg',
      },
    ],
  },
  {
    id: 4,
    title: 'E-commerce',
    subtitle: {
      en: 'E-commerce Challenge',
      es: 'E-commerce - desafío técnico',
    },
    images: {
      cover:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1711398432/mockup-home_sisivy.png',
      secondImage:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1711398433/mockup-detail_kjjqcs.png',
      thirdImage:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1711398433/mockup-delete_qqeccc.png',
      fourthImage:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1711398438/mockup-delete-popup_amnuv7.png',
      fifthImage:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1711398433/mockup-update_tnslo5.png',
      sixthImage:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1711398434/mockup-create_dfmqdn.png',
    },
    description: {
      en: 'An e-commerce platform developed as a technical challenge to demonstrate my skills in web development. The goal was to create a fully functional e-commerce website. All CRUD features were implemented.',
      es: 'Plataforma de comercio electrónico desarrollada como desafío técnico para mostrar mis habilidades en desarrollo web. El objetivo fue crear un sitio web completamente funcional con todos los métodos CRUD implementadas.',
    },
    github: 'https://github.com/CarolinaPalacios/e-commerce-storydots',
    url: 'https://e-commerce-storydots-challenge.web.app/',
    technologies: [
      {
        name: 'React',
        svg: 'https://www.svgrepo.com/show/452092/react.svg',
      },
      {
        name: 'Vite',
        svg: 'https://www.svgrepo.com/show/374167/vite.svg',
      },
      {
        name: 'Zustand',
        svg: 'https://www.svgrepo.com/show/395866/bear.svg',
      },
      {
        name: 'TypeScript',
        svg: 'https://www.svgrepo.com/show/349540/typescript.svg',
      },
      {
        name: 'NestJS',
        svg: 'https://www.svgrepo.com/show/373872/nestjs.svg',
      },
      {
        name: 'PostgreSQL',
        svg: 'https://www.svgrepo.com/show/354200/postgresql.svg',
      },
      {
        name: 'Prisma',
        svg: 'https://www.svgrepo.com/show/373776/light-prisma.svg',
      },
      {
        name: 'Swagger',
        svg: 'https://www.svgrepo.com/show/354420/swagger.svg',
      },
      {
        name: 'Tailwind',
        svg: 'https://www.svgrepo.com/show/374118/tailwind.svg',
      },
      {
        name: 'Firebase',
        svg: 'https://www.svgrepo.com/show/373595/firebase.svg',
      },
      {
        name: 'Zod',
        svg: 'https://raw.githubusercontent.com/colinhacks/zod/master/logo.svg',
      },
      {
        name: 'GitHub',
        svg: 'https://www.svgrepo.com/show/521688/github.svg',
      },
      {
        name: 'Docker',
        svg: 'https://www.svgrepo.com/show/373553/docker.svg',
      },
      {
        name: 'GitHub',
        svg: 'https://www.svgrepo.com/show/521688/github.svg',
      },
      {
        name: 'Git',
        svg: 'https://www.svgrepo.com/show/452210/git.svg',
      },
      {
        name: 'pnpm',
        svg: 'https://svgl.vercel.app/library/pnpm_dark.svg',
      },
    ],
  },
  {
    id: 5,
    title: 'URL shortener API',
    subtitle: {
      en: 'API for shortening URLs',
      es: 'API para acortar URLs',
    },
    description: {
      en: `This API allows users to turn long URLs into concise, sharable links. With a robust architecture based on NestJS and Docker, this API provides a full CRUD for managing shortened links, as well as the ability to customize aliases. When accessing a shortened link generated by the API, users are automatically redirected to the associated original URL, ensuring a smooth and uninterrupted user experience.
      Automated tests developed with Jest and Supertest ensure code stability and quality. In addition, a continuous integration and delivery (CI/CD) flow has been implemented using GitHub Actions to automate the process of building, testing and deploying the application.`,
      es: `Esta API permite a los usuarios convertir URLs largas en enlaces concisos y compartibles. Con una arquitectura robusta basada en NestJS y Docker, esta API proporciona un CRUD completo para gestionar enlaces acortados, así como la capacidad de personalizar alias. Al acceder a un enlace acortado generado por la API, los usuarios son redirigidos automáticamente a la URL original asociada, garantizando una experiencia de usuario fluida y sin interrupciones.
      Las pruebas automatizadas desarrolladas con Jest y Supertest garantizan la estabilidad y calidad del código. Además, implementé un flujo de integración y entrega continuas (CI/CD) utilizando GitHub Actions para automatizar el proceso de creación, prueba y despliegue de la aplicación.`,
    },
    github: 'https://github.com/CarolinaPalacios/url-shortener',
    url: 'https://github.com/CarolinaPalacios/url-shortener',
    images: {
      cover:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1712087505/url-2_dtuxwg.png',
      secondImage:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1712087505/url-3_wsfcbl.png',
      thirdImage:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1712087505/url-1_ry6a7y.png',
    },
    technologies: [
      {
        name: 'NestJS',
        svg: 'https://www.svgrepo.com/show/373872/nestjs.svg',
      },
      {
        name: 'PostgreSQL',
        svg: 'https://www.svgrepo.com/show/354200/postgresql.svg',
      },
      {
        name: 'Docker',
        svg: 'https://www.svgrepo.com/show/373553/docker.svg',
      },
      {
        name: 'TypeScript',
        svg: 'https://www.svgrepo.com/show/349540/typescript.svg',
      },
      {
        name: 'TypeORM',
        svg: 'https://svgl.vercel.app/library/typeorm.svg',
      },
      {
        name: 'Jest',
        svg: 'https://www.svgrepo.com/show/353930/jest.svg',
      },
      {
        name: 'Swagger',
        svg: 'https://www.svgrepo.com/show/354420/swagger.svg',
      },
      {
        name: 'GitHub',
        svg: 'https://www.svgrepo.com/show/521688/github.svg',
      },
      {
        name: 'Git',
        svg: 'https://www.svgrepo.com/show/452210/git.svg',
      },
      {
        name: 'pnpm',
        svg: 'https://svgl.vercel.app/library/pnpm_dark.svg',
      },
    ],
  },
  {
    id: 6,
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
    id: 7,
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
]

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
]

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
        svg: 'https://svgl.vercel.app/library/pnpm_dark.svg',
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
]

export const certificates: Certificates[] = [
  {
    title: {
      en: 'Full Stack Web Developer',
      es: 'Desarrolladora Web Full Stack',
    },
    institution: 'Henry',
    images: {
      cover:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1712091004/henry_xlb7il.png',
    },
    contents: [
      {
        title: {
          en: 'JavaScript',
          es: 'JavaScript',
        },
      },
      {
        title: {
          en: 'React',
          es: 'React',
        },
      },
      {
        title: {
          en: 'Redux',
          es: 'Redux',
        },
      },
      {
        title: {
          en: 'Node.js',
          es: 'Node.js',
        },
      },
      {
        title: {
          en: 'Express',
          es: 'Express',
        },
      },
      {
        title: {
          en: 'PostgreSQL',
          es: 'PostgreSQL',
        },
      },
      {
        title: {
          en: 'Sequelize',
          es: 'Sequelize',
        },
      },
      {
        title: {
          en: 'SQL',
          es: 'SQL',
        },
      },
      {
        title: {
          en: 'Jest',
          es: 'Jest',
        },
      },
      {
        title: {
          en: 'Supertest',
          es: 'Supertest',
        },
      },
      {
        title: {
          en: 'CSS',
          es: 'CSS',
        },
      },
      {
        title: {
          en: 'HTML',
          es: 'HTML',
        },
      },
      {
        title: {
          en: 'Git',
          es: 'Git',
        },
      },
      {
        title: {
          en: 'Agile methodologies (SCRUM)',
          es: 'Metodologías ágiles (SCRUM)',
        },
      },
    ],
    url: 'https://certificates.soyhenry.com/new-cert?id=456908a544116c2f35ee26da678be6ea62d9b6ce60f9525b014567bd040608e5',
  },
  {
    title: {
      en: 'JavaScript in the Backend',
      es: 'JavaScript en el Backend',
    },
    institution: 'CódigoFacilito',
    images: {
      cover:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1712091006/codigofacilito_vpi2l6.png',
    },
    contents: [
      {
        title: {
          en: 'TypeScript',
          es: 'TypeScript',
        },
      },
      {
        title: {
          en: 'JavaScript',
          es: 'JavaScript',
        },
      },
      {
        title: {
          en: 'Node Internals',
          es: 'Internals en Node',
        },
      },
      {
        title: {
          en: 'NestJS',
          es: 'NestJS',
        },
      },

      {
        title: {
          en: 'MongoDB',
          es: 'MongoDB',
        },
      },
      {
        title: {
          en: 'Mongoose',
          es: 'Mongoose',
        },
      },

      {
        title: {
          en: 'RESTful API',
          es: 'RESTful API',
        },
      },
      {
        title: {
          en: 'Webhooks and events',
          es: 'Webhooks y eventos',
        },
      },
      {
        title: {
          en: 'Redis',
          es: 'Redis',
        },
      },
      {
        title: {
          en: 'Swagger',
          es: 'Swagger',
        },
      },
      {
        title: {
          en: 'Jest',
          es: 'Jest',
        },
      },
      {
        title: {
          en: 'Docker',
          es: 'Docker',
        },
      },
      {
        title: {
          en: 'Backend caching and performance',
          es: 'Caché y performance en el backend',
        },
      },
      {
        title: {
          en: 'Architecture and design patterns',
          es: 'Arquitectura y patrones de diseño',
        },
      },
      {
        title: {
          en: 'Sockets and real-time communication',
          es: 'Sockets y comunicación en tiempo real',
        },
      },

      {
        title: {
          en: 'Test Driven Development (TDD)',
          es: 'Desarrollo basado en pruebas (TDD)',
        },
      },
      {
        title: {
          es: 'Deploy de APIs, Hosting y Soluciones Serverless',
          en: 'API Deployment, Hosting and Serverless Solutions',
        },
      },
    ],
    url: 'https://codigofacilito.com/certificates/124979',
  },
  {
    title: {
      en: 'SQL',
      es: 'SQL',
    },
    institution: 'Desafío Latam',
    images: {
      cover:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1712091003/certificate-sql1-desafiolatam_1_wfmdzz.png',
      secondImage:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1712091004/certificate-sql2-desafiolatam_1_nesovo.png',
      thirdImage:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1712091003/certificate-sql3-desafiolatam_1_kmbnig.png',
      fourthImage:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1712091006/certificate-sql4-desafiolatam_1_dxwbyc.png',
      fifthImage:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1712091007/certificate-sql5-desafiolatam_1_uyll5t.png',
    },
    contents: [
      {
        title: {
          en: 'SQL Basics',
          es: 'Conceptos Básicos de SQL',
        },
      },
      {
        title: {
          en: 'Data Manipulation',
          es: 'Manipulación de Datos',
        },
      },
      {
        title: {
          en: 'Data Query',
          es: 'Consulta de Datos',
        },
      },
      {
        title: {
          en: 'Relationships and Joins',
          es: 'Relaciones y Joins',
        },
      },
      {
        title: {
          en: 'Subqueries',
          es: 'Subconsultas',
        },
      },
      {
        title: {
          en: 'Functions and Aggregations',
          es: 'Funciones y Agregaciones',
        },
      },
      {
        title: {
          en: 'Table Manipulation',
          es: 'Manipulación de tablas',
        },
      },
      {
        title: {
          en: 'Restrictions',
          es: 'Restricciones',
        },
      },
    ],
  },
  {
    title: {
      en: 'English for IT 1',
      es: 'Inglés para IT 1',
    },
    institution: 'Cisco',
    images: {
      cover:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1712091007/cisco_cga9jq.png',
    },
    contents: [
      {
        title: {
          en: 'Adverbs',
          es: 'Adverbios',
        },
      },

      {
        title: {
          en: 'Future Perfect',
          es: 'Futuro perfecto',
        },
      },
      {
        title: {
          en: 'Idiomatic Phrases',
          es: 'Frases idiomaticas',
        },
      },
      {
        title: {
          en: 'Imperative Instruction',
          es: 'Instrucciones imperativas',
        },
      },

      {
        title: {
          en: 'Inversion',
          es: 'Inversión',
        },
      },

      {
        title: {
          en: 'Modal Verbs',
          es: 'Verbos modales',
        },
      },

      {
        title: {
          en: 'Passive Voice',
          es: 'Voz pasiva',
        },
      },
      {
        title: {
          en: 'Past Simple',
          es: 'Pasado simple',
        },
      },
      {
        title: {
          en: 'Relative Pronouns',
          es: 'Pronombres relativos',
        },
      },
      {
        title: {
          en: 'Supplier Evaluation Modules',
          es: 'Módulos de evaluación de proveedores',
        },
      },
      {
        title: {
          en: 'Compilers and Interpreters Vocabulary',
          es: 'Vocabulario de compiladores e intérpretes',
        },
      },
      {
        title: {
          en: 'Fraudulent call vocabulary',
          es: 'Vocabulario de llamadas fraudulentas',
        },
      },
      {
        title: {
          en: 'Network and Software Engineering Vocabulary',
          es: 'Vocabulario de ingeniería de redes y software',
        },
      },
      {
        title: {
          en: 'Job Roles and Responsibilities',
          es: 'Funciones y responsabilidades en el puesto de trabajo',
        },
      },
      {
        title: {
          en: 'Information Security Policy',
          es: 'Política de seguridad de la información',
        },
      },
      {
        title: {
          en: 'User Experience Vocabulary',
          es: 'Vocabulario de experiencia de usuario',
        },
      },
    ],
    url: 'https://www.credly.com/badges/857006e7-0b2e-42da-8955-db2e408fb79c/public_url',
  },
  {
    title: {
      en: 'EF SET Certificate',
      es: 'Certificación EF SET',
    },
    institution: 'EF SET',
    images: {
      cover:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1712168469/ef-set-rec_cijryq.png',
    },
    contents: [
      {
        title: {
          en: 'English',
          es: 'Inglés',
        },
      },
    ],
    url: 'https://www.efset.org/cert/dAHYE2',
  },
]
