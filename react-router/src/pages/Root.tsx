// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import '../App.css';
import { useRouter } from '../hooks/useRouter';

const Root = () => {
  const { push } = useRouter();
  return (
    <>
      <h1>root</h1>
      <div className="card">
        <button onClick={(e) => push(e, '/about')}>about</button>
      </div>
    </>
  );
};

export default Root;
