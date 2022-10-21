import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Times';

function App() {

  const times = [
    {
      nome: 'Jiu-Jitsu',
      corPrimaria: '#936931',
      corSecundaria: '#D3D3D3'
    },
    {
      nome: 'Boxe',
      corPrimaria: '#6A2623',
      corSecundaria: '#C0C0C0'
    },
    {
      nome: 'Muai Thay',
      corPrimaria: '#2F678D',
      corSecundaria: '#A9A9A9'
    },
    {
      nome: 'Sambo',
      corPrimaria: '#C3C14A',
      corSecundaria: '#808080'
    },
    {
      nome: 'Wrestling',
      corPrimaria: '#6ACB64',
      corSecundaria: '#696969'
    },
    {
      nome: 'Karatê',
      corPrimaria: '#369933',
      corSecundaria: '#4F4F4F'
    },
    {
      nome: 'Outras Lutas',
      corPrimaria: '#F3342A',
      corSecundaria: '#363636'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />

      {times.map(time => <Time
        key={time.nome}
        nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      <Rodape />
    </div>
  );
}

export default App;
