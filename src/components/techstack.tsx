import { Technology as Technology } from '../types/technologies';
import { ReactComponent as CSSIcon } from '../icons/css3.svg';
import { ReactComponent as ExpressIcon } from '../icons/express.svg';
import { ReactComponent as FirebaseIcon } from '../icons/firebase.svg';
import { ReactComponent as HTML5Icon } from '../icons/html5.svg';
import { ReactComponent as JavaScriptIcon } from '../icons/javascript.svg';
import { ReactComponent as JestIcon } from '../icons/jest.svg';
import { ReactComponent as NodeIcon } from '../icons/nodedotjs.svg';
import { ReactComponent as ReactIcon } from '../icons/react.svg';
import { ReactComponent as ReactRouterIcon } from '../icons/reactrouter.svg';
import { ReactComponent as TypeScriptIcon } from '../icons/typescript.svg';
import { ReactComponent as WebpackIcon } from '../icons/webpack.svg';
import { ReactComponent as MaterialUiIcon } from '../icons/mui.svg';
import { useState } from 'react';

export interface TechStackProps {
  technologies: Technology[];
}

const getIcon = (tech: Technology, cb: Function) => {
  switch (tech) {
    case Technology.CSS: {
      return (
        <CSSIcon
          key='css'
          className='icon'
          onMouseOver={() => cb(tech)}
          onMouseLeave={() => cb('')}
        />
      );
    }
    case Technology.Express: {
      return (
        <ExpressIcon
          key='express'
          className='icon'
          onMouseOver={() => cb(tech)}
        />
      );
    }
    case Technology.Firebase: {
      return (
        <FirebaseIcon
          key='fb'
          className='icon'
          onMouseOver={() => cb(tech)}
          onMouseLeave={() => cb('')}
        />
      );
    }
    case Technology.HTML5: {
      return (
        <HTML5Icon
          key='html'
          className='icon'
          onMouseOver={() => cb(tech)}
          onMouseLeave={() => cb('')}
        />
      );
    }
    case Technology.JavaScript: {
      return (
        <JavaScriptIcon
          key='js'
          className='icon'
          onMouseOver={() => cb(tech)}
          onMouseLeave={() => cb('')}
        />
      );
    }
    case Technology.Jest: {
      return (
        <JestIcon
          key='jest'
          className='icon'
          onMouseOver={() => cb(tech)}
          onMouseLeave={() => cb('')}
        />
      );
    }
    case Technology.Node: {
      return (
        <NodeIcon
          key='node'
          className='icon'
          onMouseOver={() => cb(tech)}
          onMouseLeave={() => cb('')}
        />
      );
    }
    case Technology.React: {
      return (
        <ReactIcon
          key='react'
          className='icon'
          onMouseOver={() => cb(tech)}
          onMouseLeave={() => cb('')}
        />
      );
    }
    case Technology.ReactRouter: {
      return (
        <ReactRouterIcon
          key='rr'
          className='icon'
          onMouseOver={() => cb(tech)}
          onMouseLeave={() => cb('')}
        />
      );
    }
    case Technology.TypeScript: {
      return (
        <TypeScriptIcon
          key='ts'
          className='icon'
          onMouseOver={() => cb(tech)}
          onMouseLeave={() => cb('')}
        />
      );
    }
    case Technology.Webpack: {
      return (
        <WebpackIcon
          key='wp'
          className='icon'
          onMouseOver={() => cb(tech)}
          onMouseLeave={() => cb('')}
        />
      );
    }
    case Technology.MaterialUi: {
      return (
        <MaterialUiIcon
          key='mui'
          className='icon'
          onMouseOver={() => cb(tech)}
          onMouseLeave={() => cb('')}
        />
      );
    }
    default: {
      return null;
    }
  }
};

const TechStack: React.FC<TechStackProps> = ({ technologies }) => {
  const [techOnHover, setTechOnHover] = useState<String>('');

  const handleMouseOver = (tech: Technology) => {
    setTechOnHover(tech.toString());
  };

  const icons = technologies.map((tech) => {
    return getIcon(tech, handleMouseOver);
  });

  return (
    <div className='tech-icons'>
      {icons}
      <span>{`| ${techOnHover}`}</span>
    </div>
  );
};

export default TechStack;
