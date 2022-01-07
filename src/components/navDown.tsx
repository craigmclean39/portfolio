import { ReactComponent as ExpandIcon } from '../icons/expand.svg';

export interface NavDownProps {
  href: string;
}

const NavDown: React.FC<NavDownProps> = ({ href }) => {
  return (
    <nav className='nav-down'>
      <a href={href}>
        <ExpandIcon className='nav-icon' />
      </a>
    </nav>
  );
};

export default NavDown;
