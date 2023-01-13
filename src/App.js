import { useState } from 'react';
import './App.css';
import { Header } from './page/header/Header';
import { Options } from './page/options/Options';
import { PrincipalContainer } from './containers/principal/PrincipalContainer';
import { ShortsContainer } from './containers/shorts/ShortsContainer';
import { SuscriptionsContainer } from './containers/suscriptions/SuscriptionsContainer';
import { LibraryContainer } from './containers/library/LibraryContainer';
import { HistoryContainer } from './containers/history/HistoryContainer';

function App() {
  const [optionAct, setOptionAct] = new useState(0);
  const containers = [<PrincipalContainer/>, <ShortsContainer/>, <SuscriptionsContainer/>, <LibraryContainer/>, <HistoryContainer/>]

  return (
    <>
      <Header />
      <div className='appContent'>
        <Options optionAct={optionAct} setOptionAct={setOptionAct}/>
        {containers[optionAct]}
      </div>
    </>
  );
}

export default App;
