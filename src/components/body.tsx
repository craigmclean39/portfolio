import '../css/styles.css';
import AboutMe from './aboutme';
import Hero from './hero';
import Projects from './projects';

const Body: React.FC = () => {
  return (
    <main>
      <div className='inner-main'>
        <Hero />
        <AboutMe />
        <Projects />
      </div>
    </main>
  );
};

export default Body;
