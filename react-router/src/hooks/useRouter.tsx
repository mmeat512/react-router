import { MouseEvent } from 'react';

type useRouter = () => {
  push: (e: MouseEvent, path: string) => void;
};

export const useRouter: useRouter = () => {
  return {
    push: (e: MouseEvent, path: string) => {
      e.preventDefault();
      window.history.pushState({}, '', path);
      dispatchEvent(new PopStateEvent('popstate', { state: path }));
    },
  };
};
