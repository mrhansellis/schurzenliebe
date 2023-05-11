import { Navbar, Hero } from "./components";
import React, {useState, useEffect } from "react";
import styles from "./style"

const App = () => {

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 545) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-primay w-full overflow-hidden">
      <div className={`bg-blue-gradient ${styles.paddingX} ${styles.flexCenter} ${isSticky ?  "fixed top-0 shadow-lg bg-blue-gradient opacity-50 w-full"  : " "}`}>
        <div className={`${styles.boxWidth} `}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          The Aprons
          <br />
          About
          <br />
          What users are saying.
          <br />
          Locations
          <br />
          Contact
          <br />
          Make an apron!
          <br />
        </div>
      </div>
    </div>
  );
}
export default App