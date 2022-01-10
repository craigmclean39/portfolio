import NavDown from './navDown';
import NavUp from './navUp';

const AboutMe: React.FC = () => {
  return (
    <section id='AboutMe'>
      <div className='content'>
        <NavUp href='#Header' />
        <h3>About Me</h3>

        <p>
          Hi, my name is Craig McLean. I'm a father, climber, sailor,
          adventurer, and software developer. I've recently been honing my
          skills with fullstack web technologies and I currently work well with
          HTML, CSS, JavaScript/TypeScript, React, Node, and Express. In the
          past I've worked with C#, C++, and the Unity game engine. I used to
          work in the games industry, specializing in front ends and UIs and I
          have experience working on large teams and shipping projects that were
          enjoyed by millions of gamers across the world. I took a break from
          game development and learned to sail, I then worked on cargo ships and
          ferries around the world and across Canada. However my passion for
          technology and solving problems with software has never abated.
        </p>
      </div>
      <NavDown href='#Projects' />
    </section>
  );
};

export default AboutMe;
