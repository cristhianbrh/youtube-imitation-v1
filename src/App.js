import './App.css';
import { Contents } from './page/contents/Contents';
import { Header } from './page/header/Header';
import { Options } from './page/options/Options';

function App() {
  return (
    <>
      <Header />
      <div className='appContent'>
        <Options />
        <Contents />
      </div>
    </>
  );
}

export default App;
