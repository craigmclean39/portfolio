import '../css/styles.css';
import { ReactComponent as GithubIcon } from '../icons/github.svg';
import { ReactComponent as LinkedInIcon } from '../icons/linkedin.svg';
import NavDown from './navDown';

const Hero: React.FC = () => {
  return (
    <section>
      <div className='hero' id='Hero'>
        <h1 className='hero-title'>
          Hi, I'm <span className='hero-name'>Craig</span>
        </h1>
        <p className='hero-subtitle'>A Software Developer</p>

        <div className='hero-icons'>
          <a
            className='icon-link'
            target='_blank'
            href='https://github.com/craigmclean39'>
            <GithubIcon className='icon' />
          </a>
          <a
            className='icon-link'
            target='_blank'
            href='https://www.linkedin.com/in/mcleancraig/'>
            <LinkedInIcon className='icon' />
          </a>
          <a className='button' download href='../craigmclean-resume.pdf'>
            Download my Resume
          </a>
        </div>
        <p>
          I'm a passionate and detail oriented software developer. I enjoy
          making sites responsive and experimenting with different technologies.
        </p>
      </div>
      <NavDown href='#AboutMe' />
    </section>
  );
};

export default Hero;
