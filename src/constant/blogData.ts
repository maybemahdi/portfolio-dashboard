export interface TBlogPost {
  id: string | number;
  title?: string;
  descriptions?: string;
  displayImage?: string;
  imageAlt?: string;
  slug?: string;
}

export const blogPosts: TBlogPost[] = [
  {
    id: 1,
    title: 'Understanding TypeScript',
    descriptions: "A beginner's guide to TypeScript and its features.",
    displayImage: '/blogImage.png',
    imageAlt: 'TypeScript logo',
    slug: 'understanding-typescript',
  },
  {
    id: 2,
    title: 'Top 10 JavaScript Frameworks',
    descriptions:
      'An overview of the most popular JavaScript frameworks in 2023.',
    displayImage: '/blogImage.png',
    imageAlt: 'JavaScript frameworks',
    slug: 'top-10-javascript-frameworks',
  },
  {
    id: 3,
    title: 'React vs Angular',
    descriptions: 'A detailed comparison between React and Angular.',
    displayImage: '/blogImage.png',
    imageAlt: 'React and Angular logos',
    slug: 'react-vs-angular',
  },
  {
    id: 4,
    title: 'CSS Grid vs Flexbox',
    descriptions: 'When to use CSS Grid and when to use Flexbox.',
    displayImage: '/blogImage.png',
    imageAlt: 'CSS Grid and Flexbox',
    slug: 'css-grid-vs-flexbox',
  },
  {
    id: 5,
    title: 'Node.js Performance Tips',
    descriptions: 'Improve the performance of your Node.js applications.',
    displayImage: '/blogImage.png',
    imageAlt: 'Node.js performance',
    slug: 'nodejs-performance-tips',
  },
  {
    id: 6,
    title: 'Introduction to GraphQL',
    descriptions: 'Learn the basics of GraphQL and how it works.',
    displayImage: '/blogImage.png',
    imageAlt: 'GraphQL logo',
    slug: 'introduction-to-graphql',
  },
  {
    id: 7,
    title: 'Building REST APIs with Express',
    descriptions: 'Step-by-step guide to building REST APIs using Express.js.',
    displayImage: '/blogImage.png',
    imageAlt: 'Express.js logo',
    slug: 'building-rest-apis-with-express',
  },
  {
    id: 8,
    title: 'Mastering Git Commands',
    descriptions: 'Essential Git commands every developer should know.',
    displayImage: '/blogImage.png',
    imageAlt: 'Git commands',
    slug: 'mastering-git-commands',
  },
  {
    id: 9,
    title: 'Deploying Apps with Docker',
    descriptions:
      'A guide to containerizing and deploying applications using Docker.',
    displayImage: '/blogImage.png',
    imageAlt: 'Docker logo',
    slug: 'deploying-apps-with-docker',
  },
  {
    id: 10,
    title: 'Understanding Web Accessibility',
    descriptions: 'Why web accessibility matters and how to implement it.',
    displayImage: '/blogImage.png',
    imageAlt: 'Web accessibility',
    slug: 'understanding-web-accessibility',
  },
];
