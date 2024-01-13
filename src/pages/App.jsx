import React from 'react';

import styles from '../style';
import '../index.css';
import { Hero, Navbar, Footer, WhyUs, About,
         WorkArea, Request, Services, Whatsapp, } from '../components';

function App() {

  return (
      <div className="bg-cream w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter} bg-cream`}>
          <div className={`${styles.boxWidth} border-b-[1px] border-b-primary`}>
            <Navbar />
          </div>
        </div>
        
        <div className={`bg-cream ${styles.flexStart} `}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`bg-cream ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>     
            <WhyUs />
            <About />
            <WorkArea />
            <Services />
            <Request />
          </div>
        </div>

      	<Footer />
      	<Whatsapp />
      </div>
  );
}

export default App;

