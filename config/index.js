const dev = process.env.NODE_ENV !== 'production';

export const server = dev
  ? 'http://localhost:3000'
  : 'https://gabriel-tutorials-next-js-crash-course.arpadgbondor.vercel.app';
