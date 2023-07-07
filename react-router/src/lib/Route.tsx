import React from 'react';

export type RouteProps = {
  path: string;
  component: React.ReactNode;
};

const Route: React.FC<RouteProps> = ({ path, component }) => {
  return window.location.pathname === path ? component : <></>;
};

export default Route;
