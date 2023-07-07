import React, { useEffect, useState } from 'react';
import { RouteProps } from './Route';

type RouterProps = {
  children: React.ReactElement[];
};

const Router: React.FC<RouterProps> = ({ children }) => {
  const [pathname, setPathname] = useState(window.location.pathname);
  useEffect(() => {
    window.onpopstate = () => {
      setPathname(window.location.pathname);
    };
  });

  return children.map(
    (child: React.ReactElement<RouteProps>) =>
      child.props.path === pathname && (
        <div key={child.props.path}>{children}</div>
      )
  );
};

export default Router;
