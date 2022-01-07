import { ReactComponent as ExpandIcon } from '../icons/expand-less.svg';

export interface NavUpProps {
  href: string;
}

const NavUp: React.FC<NavUpProps> = ({ href }) => {
  return (
    <nav className='nav-up'>
      <a href={href}>
        <ExpandIcon className='nav-icon' />
      </a>
    </nav>
  );
};

export default NavUp;
