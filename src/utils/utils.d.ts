export interface Projects {
  id: number;
  title: string;
  subtitle: string;
  images: Image;
  video?: string;
  github: string;
  url: string;
  description: string;
  technologies: Technologies[];
}
export type Image = {
  cover: string;
  secondImage?: string;
  thirdImage?: string;
};

export type Technologies = {
  name: string;
  svg: string;
};

export type Contact = {
  name: string;
  svg: string;
  text: string;
  link: string;
};

export type About = {
  about1: string;
  about2?: string;
  about3?: string;
  about4?: string;
  about5?: string;
  about6?: string;
  about7?: string;
  about8?: string;
  about9?: string;
  about10?: string;
};

export interface Experience {
  title: string;
  company: string;
  timeframe: string;
  image: Image;
  description: string;
  about: About[];
  technologies: Technologies[];
}
