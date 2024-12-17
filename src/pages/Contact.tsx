import Locations from "@/components/Locations";

import styles from "../style";
import { Navbar, Footer, Whatsapp, RequestForm } from "../components";

const Contact = () => {
  return (
    <div className="bg-cream w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} border-b-[1px] border-b-mainBlue`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-cream ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Locations />
          <RequestForm />
        </div>
      </div>

      <Footer />
      <Whatsapp />
    </div>
  );
};

export default Contact;
