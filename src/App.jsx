// import { Switch, Route, Link, Routes } from 'react-router-dom';
// import { Home, About } from '../src/pages'

import styles from './style';
import './index.css';
import { Hero, Bullet, Navbar } from './components';

function App() {
  return (
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter} bg-black`}>
          <div className={`${styles.boxWidth} bg-black`}>
            <Navbar />
          </div>
        </div>
        
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
      
            <Bullet />
      </div>
  );
}

export default App;
