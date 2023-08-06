import styles from './style';
import './index.css';
import { Hero, Bullet, Navbar } from './components';

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <Hero />
      <Bullet />
    </div>
  );
}

export default App;
