import { Navbar, Hero, Aprons } from "./components";
import React, {useState, useEffect } from "react";
import styles from "./style"

const App = () => {

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 925) {
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
    <div className="bg-primay w-full ">
      <div className={`bg-blue-gradient ${styles.paddingX} ${styles.flexCenter} ${isSticky ?  "sticky top-0 shadow-lg bg-blue-gradient-opacity w-full z-10 sidebar" : " "}`}>
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
          <Aprons />
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