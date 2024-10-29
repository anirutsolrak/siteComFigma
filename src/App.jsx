import { useState } from 'react';
import './App.css';
import Header from './componentes/Header';
import HomePageMainSection from './paginas/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <HomePageMainSection />
    </div>
  );
}

export default App;
