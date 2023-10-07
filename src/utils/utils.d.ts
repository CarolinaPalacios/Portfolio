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
