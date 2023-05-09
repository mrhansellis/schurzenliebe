import { Navbar } from "./components";
import styles from "./style"

const App = () => (
    <div className="bg-primay w-full overflow-hidden">
      <div className={`bg-blue-gradient ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={` ${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Hero
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
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

export default App