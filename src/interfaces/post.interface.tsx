
export interface Post {
  frontmatter: Frontmatter;
  __usesAstroImage: boolean;
  url: string;
  file: string;
}

export interface Frontmatter {
  layout: string;
  title: string;
  pubDate: Date;
  description: string;
  author: string;
  image: Image;
  tags: string[];
}

export interface Image {
  url: string;
  alt: string;
}
