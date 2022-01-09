import { Technology } from '../types/technologies';
import NavDown from './navDown';
import NavUp from './navUp';
import Project, { ProjectProps } from './project';

const instaclone: ProjectProps = {
  title: 'InstaClone',
  description: [
    'Developed a limited feature clone of popular photo sharing app Instagram.',
    'Allow user to follow other users, like and comment on photos, upload their own images, as well as view a feed of their friends photos and explore recent uploads to discover new users.',
    'Worked with Firebase to implement user authentication, cloud storage for images, and the Firestore NoSQL database for user and post data.',
    'Created in the React framework utilizing functional components and hooks. State implemented with context and useReducer.',
  ],
  technologies: [
    Technology.React,
    Technology.TypeScript,
    Technology.ReactRouter,
    Technology.Firebase,
  ],
  demoUrl: 'https://instaclone-iota.vercel.app/',
  repoUrl: 'https://github.com/craigmclean39/instaclone',
  heroImage: require('../project-media/feed.jpg'),
};

const resumecreator: ProjectProps = {
  title: 'Resume Creator',
  description: [
    'Created responsive web application for users to create a simple resume with work experience, education information, skills, and color theme.',
    "Leveraged Web Storage API to locally save user's resume and theme preferences.",
    'Utilized Material UI to quickly build and iterate an attractive and functional interface.',
  ],
  technologies: [Technology.React, Technology.MaterialUi],
  demoUrl: 'https://craigmclean39.github.io/cv-project-top/',
  repoUrl: 'https://github.com/craigmclean39/cv-project-top',
  heroImage: require('../project-media/resumecreator.jpg'),
};

const shoppingcart: ProjectProps = {
  title: 'Shopping Cart',
  description: [
    'Developed a store front for an outdoor clothing brand where users can browse products and add them to their shopping cart.',
    'Dynamically generated all content from a JSON file with product and category information.',
    'Implemented React Router for dynamic routing to unique product pages.',
  ],
  technologies: [
    Technology.TypeScript,
    Technology.React,
    Technology.ReactRouter,
  ],
  demoUrl: 'https://craigmclean39.github.io/shopping-cart-top/',
  repoUrl: 'https://github.com/craigmclean39/shopping-cart-top',
  heroImage: require('../project-media/shoppingcart.jpg'),
};

const battleship: ProjectProps = {
  title: 'Battleship',
  description: [
    'Utilized vanilla JS to manipulate the DOM and create a player vs. computer Battleship game.',
    'Implemented unit tests on core game logic with Jest testing library.',
    'Focused on making the game fully responsive and playable on both desktop and mobile displays.',
    'Packaged for deployment with webpack.',
  ],
  technologies: [
    Technology.JavaScript,
    Technology.HTML5,
    Technology.CSS,
    Technology.Jest,
    Technology.Webpack,
  ],
  demoUrl: 'https://craigmclean39.github.io/battleship-top/',
  repoUrl: 'https://github.com/craigmclean39/battleship-top',
  heroImage: require('../project-media/battleship.jpg'),
};

const Projects: React.FC = () => {
  return (
    <section id='Projects'>
      <div className='content'>
        <NavUp href='#AboutMe' />
        <h3>Projects</h3>
        <Project {...instaclone} />
        <hr></hr>
        <Project {...resumecreator} />
        <hr></hr>
        <Project {...shoppingcart} />
        <hr></hr>
        <Project {...battleship} />
      </div>
    </section>
  );
};

export default Projects;
