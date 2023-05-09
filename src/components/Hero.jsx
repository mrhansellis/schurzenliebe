import styles from "../style";
import { schurzscript } from "../assets";

const Hero = () => (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddyngY}`}>
      <div className={`flex-1 ${styles.flexStart}
      flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 mb-2">
          img src={schurzscript}
        </div>
      </div>
    </section>
)

export default Hero