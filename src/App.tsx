import { Outlet } from 'react-router-dom';

import Nav from './features/nav/Nav';
import Learning from './features/learning/Learning';

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Outlet />
      <Learning />
    </div>
  );
}

export default App;
