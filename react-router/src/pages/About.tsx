// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import '../App.css';
import { useRouter } from '../hooks/useRouter';

const About = () => {
  const { push } = useRouter();
  return (
    <>
      <h1>about</h1>
      <div className="card">
        <button onClick={(e) => push(e, '/')}>go main</button>
      </div>
    </>
  );
};

export default About;
