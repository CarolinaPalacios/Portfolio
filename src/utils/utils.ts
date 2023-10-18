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
    description: 'https://github.com/bookbuster-ar/web-app-front',
    images: {
      cover: '../../assets/bookbuster.png',
      secondImage: '',
      thirdImage: '',
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
        svg: '../../assets/mercadopago.svg',
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
        svg: '../../assets/playwright.svg',
      },
    ],
  },
  {
    id: 3,
    title: 'DogApp',
    subtitle: 'Web application',
    images: {
      cover: '',
      secondImage: '',
      thirdImage: '',
    },
    video: 'https://youtu.be/q_oiNJsLKXg',
    github: 'https://github.com/CarolinaPalacios/PI-Dogs',
    url: '',
    description: '',
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
    description: `During my internship as a Back-End developer, I had the privilege of working with a dedicated team to build a robust Minimum Viable Product (MVP) for the company's web application. We used Node.js, Express, and Sequelize to connect to a PostgreSQL database, and Cloudinary for image storage. User authentication was handled through Firebase to ensure platform security.

    I also implemented MercadoPago as the payment gateway to facilitate secure online transactions. On the front-end, we used React, Vite for efficient development, and Redux Toolkit for state management. MercadoPago's React SDK was integrated for seamless payment processing. For a visually appealing and responsive UI, we adopted Tailwind CSS.

    This experience not only enhanced my development skills but also contributed significantly to my personal and professional growth. I'm grateful for the opportunity and teamwork that left a lasting impact on my journey toward excellence in software development.`,
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
        about6:
          'Employed Tailwind CSS for visually appealing and responsive UI design.',
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
