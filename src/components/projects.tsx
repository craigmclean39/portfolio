import NavDown from './navDown';
import NavUp from './navUp';

const Projects: React.FC = () => {
  return (
    <section id='Projects'>
      <div className='content'>
        <NavUp href='#AboutMe' />
        <h3>Projects</h3>
        <p>
          Hi, my name is Craig McLean. I'm a father, climber, sailor,
          adventurer, and software developer. I've recently been honing my
          skills with fullstack web technologies. I currently work well with
          HTML, CSS, JavaScript/TypeScript, React, Node, and Express. In the
          past I've worked with C#, C++, and the Unity game engine. I used to
          work in the games industry, specializing in front ends and UIs. I have
          experience working on large teams and shipping projects that are
          enjoyed by millions of gamers across the world. I took a break from
          games and learned to sail large ships, I then worked on cargo ships
          and ferries around the world and across Canada. However my passion for
          technology and solving problems with software has never abated.
        </p>
      </div>
    </section>
  );
};

export default Projects;
