export interface Projects {
  id: number;
  title: string;
  subtitle: string;
  image: Image;
  video?: string;
  github: string;
  url: string;
  description: string;
  technologies: Technologies[];
}

export interface Image {
  cover: string;
  secondImage: string;
  thirdImage: string;
}

export type Technologies = {
  name: string;
  svg: string;
};

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
