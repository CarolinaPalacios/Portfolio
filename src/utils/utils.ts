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
    subtitle: 'Library web application',
    extra: 'https://github.com/bookbuster-ar/web-app-front',
    description: `E-commerce developed as the final project during the Henry Bootcamp. We created an e-commerce focused on the sale of books and user subscriptions.
        It was a substantial challenge as I had to learn new technologies and work methodologies.
        Bookbuster is a digital bookstore where users can register to purchase new and used books, audiobooks, and e-pub editions. The primary idea is to foster a community of reading enthusiasts. Users can leave book reviews, share memorable quotes, and engage with comments and likes on others' reviews and quotes. Additionally, users can organize their favorite and to-be-read books on different bookshelves.
        Furthermore, since the company did not have an inventory management ERP, I took the initiative to create an administrator dashboard. This dashboard allows for various functions, including user management, transaction monitoring, and inventory control.`,
    images: {
      cover:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1697684459/pvogoqwfvqgro9mu5xvx.png',
      secondImage:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1697684511/lyxhcefsqsyoasbi9gfg.png',
      thirdImage:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1697684520/mu5zqhykssxcjnmc36zx.png',
      fourthImage:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1697684511/qffpuqezqfxnuumm9ehz.png',
      fifthImage:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1697684521/dykni5thbmud6iij8owv.png',
      sixthImage:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1697684524/jnqbgqsnwgdqw5rv2huz.png',
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
    subtitle: 'Web application',
    images: {
      cover: '',
      secondImage: '',
      thirdImage: '',
    },
    github: 'https://github.com/CarolinaPalacios/rick-and-morty-wiki',
    url: '',
    description: '',
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
    subtitle: 'Web application',
    images: {
      cover:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/f_auto,q_auto/mmsjrokc7qk1zthtlipc',
      secondImage:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1697684523/jkl3j0k2zg31zcpu8nwa.png',
      thirdImage:
        'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1697684518/yuip2gzthapdl0vtuf5i.png',
    },
    video: 'https://www.youtube.com/embed/q_oiNJsLKXg',
    github: 'https://github.com/CarolinaPalacios/PI-Dogs',
    url: 'https://github.com/CarolinaPalacios/PI-Dogs',
    description:
      'I developed a single page application focused on the canine world, using The Dog API as a data source. This innovative app allows users to explore a wide variety of dog breeds, providing an interactive and engaging experience.',
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
];

export const contacts: Contact[] = [
  {
    name: 'caaro.palacios@hotmail.com',
    svg: 'https://www.svgrepo.com/show/373951/outlook.svg',
    text: 'Send me an email',
    link: 'mailto:caaro.palacios@hotmail.com',
  },
  {
    name: '/CarolinaPalacios',
    svg: 'https://www.svgrepo.com/show/450156/github.svg',
    text: 'GitHub Profile',
    link: 'https://github.com/CarolinaPalacios',
  },
  {
    name: '/in/CarolinaPalacios1',
    svg: 'https://www.svgrepo.com/show/448234/linkedin.svg',
    text: 'LinkedIn Profile',
    link: 'https://www.linkedin.com/in/CarolinaPalacios1',
  },
];

export const experience: Experience[] = [
  {
    title: 'Bookbuster web application',
    company: 'Bookbuster',
    timeframe: 'July 2023 - August 2023',
    image: {
      cover: '',
    },
    description: `During my Back-End development internship, I worked with a team to build a robust MVP web application using Node.js, Express, Sequelize, PostgreSQL, Cloudinary, and Firebase for user authentication. I also integrated MercadoPago for secure online payments. The front end was built with React, Vite, Redux Toolkit, and Tailwind CSS for a responsive UI. This experience enhanced my skills and contributed to my growth as a developer.`,
    about: [
      {
        about1:
          'Developed server and database components using Node.js, Express, and Sequelize for PostgreSQL integration.',
        about2:
          'Implemented MercadoPago as the payment gateway for secure online transactions.',
        about3:
          'Utilized Firebase for user authentication, ensuring platform security.',
        about4: `Integrated MercadoPago's React SDK for seamless payment processing on the platform.`,
        about5:
          'Leveraged Vite for fast development feedback and optimized bundle generation.',
        about6: `Employed Tailwind CSS for visually appealing and responsive UI design.`,
        about7: `Contributed to the overall user experience by enhancing user authentication and interactions through Firebase.`,
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
