import { Technology } from '../types/technologies';
import TechStack from './techstack';

export interface ProjectProps {
  title: string;
  demoUrl: string;
  repoUrl: string;
  description: string[];
  technologies: Technology[];
  heroImage: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  technologies,
  demoUrl,
  repoUrl,
  heroImage,
}) => {
  const listItems = description.map((desc, index) => {
    return (
      <li className='description-list-item' key={index}>
        {desc}
      </li>
    );
  });

  return (
    <article>
      <div className='project-title-flex'>
        <a className='title-link' href={demoUrl} target='_blank'>
          <h4>{title}</h4>
        </a>
        <a className='link' href={demoUrl} target='_blank'>
          Demo
        </a>
        <a className='link' href={repoUrl} target='_blank'>
          Github Repo
        </a>
      </div>

      <TechStack technologies={technologies} />
      <div className='project-hero'>
        <img src={heroImage} alt={`${title} example image`} />
      </div>
      <ul>{listItems}</ul>
    </article>
  );
};

export default Project;
