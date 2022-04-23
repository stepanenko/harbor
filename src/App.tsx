import { Outlet } from 'react-router-dom';

import Nav from './features/nav/Nav';
import Footer from './features/footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
