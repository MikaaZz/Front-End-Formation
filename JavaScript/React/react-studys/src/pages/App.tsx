import React from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
// nao chamar mais como string e sim como import style
import style from './App.module.scss';

function App() {
  return (
    // sempre usar  className se nao da erro
    // nao chamar como string e sim como função
    // pois assim ele puxa aquele determinado objeto
    // sempre usar o style pois é o nome do modulo
    <div className={style.AppStyle}>
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;