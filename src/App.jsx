import { useState } from 'react';
import './App.css';
import Header from './componentes/Header';
import HomePageMainSection from './paginas/Home';
import Footer from './componentes/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <HomePageMainSection />
      <Footer />
    </div>
  );
}

export default App;
