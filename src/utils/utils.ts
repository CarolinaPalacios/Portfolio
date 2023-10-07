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
    image: {
      cover: '../../assets/bookbuster.png',
      secondImage: '',
      thirdImage: '',
    },
    url: 'https://bookbuster-ar.vercel.app/',
    github: 'https://github.com/bookbuster-ar/web-app-backend',
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
    image: {
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
    image: {
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
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur asperiores, libero nam in iusto possimus soluta praesentium vero consequuntur! Eos voluptates debitis eum quos saepe quod corporis fugiat minima? Dicta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, harum dolorum quidem rem commodi repellendus tenetur laboriosam ratione ipsam? Ullam, error expedita. Error eveniet soluta molestiae doloremque facilis, illum voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ut mollitia aspernatur eligendi blanditiis deserunt et, recusandae at nostrum nulla expedita animi iste officiis quis amet ipsam cumque minus beatae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem assumenda id dignissimos, error nostrum atque soluta nemo maxime expedita qui vitae architecto at corporis hic magni ipsa explicabo officia totam!',
    about: [
      {
        about1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        about2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        about3: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        about4: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
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
        name: 'Typescript',
        svg: 'https://www.svgrepo.com/show/349540/typescript.svg',
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
        name: 'Playwright',
        svg: '../../assets/playwright.svg',
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
