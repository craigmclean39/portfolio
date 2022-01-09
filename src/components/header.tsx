import '../css/styles.css';

const Header: React.FC = () => {
  return (
    <header id='Header'>
      <div className='inner-header'>
        <h1>{`< CRAIG / >`}</h1>
        <nav>
          <a className='link' href='#AboutMe'>
            About
          </a>
          <a className='link' href='#Projects'>
            Projects
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
