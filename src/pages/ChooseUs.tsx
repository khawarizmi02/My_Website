import styles from "../style";
import { Navbar, Footer, WhyUs, Whatsapp } from "../components";

const Location = () => {
  return (
    <div className="bg-cream w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} border-b-[1px] border-b-mainBlue`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-cream ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <WhyUs />
        </div>
      </div>

      <Footer />
      <Whatsapp />
    </div>
  );
};

export default Location;
