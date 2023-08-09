// import { Switch, Route, Link, Routes } from 'react-router-dom';
// import { Home, About } from '../src/pages'

import styles from './style';
import './index.css';
import { Hero, Bullet, Navbar, Hook, Footer } from './components';

function App() {
  return (
      <div className="bg-secondary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter} bg-black`}>
          <div className={`${styles.boxWidth} bg-black`}>
            <Navbar />
          </div>
        </div>
        
        <div className={`bg-primary ${styles.flexStart} custom-border h-[90vh] `}>
          <div className={`${styles.boxWidth} h-[100vh]`}>
            <Hero />
          </div>
        </div>

        <div className='bg-secondary w-full'>
          <Hook />
        </div>
      
        <div className={`bg-gradient-blue ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>     
            <Bullet />
            <Footer />
          </div>
        </div>
      </div>
  );
}

export default App;
