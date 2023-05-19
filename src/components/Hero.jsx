import styles from "../style";
import { schurzscript, schurzhero  } from "../assets";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 mx-auto ${styles.flexStart}
      flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-col py-[6px] px-4 mb-2">
        <img src={schurzscript} alt="schurzenliebe banner" />
        <div className="text-center">
          <h1 className=" md:text-2xl xl:text-3xl text-lg font-homemade leading-2 text-gray-600">Handmade Crossback Aprons</h1>
        </div >
        <div className={`flex justify-center items-center sm:flex-row flex-col mx-auto py-16`}>
          <img 
          src={schurzhero} 
          alt="woman in kitchen wearing schurzenlibe apron"
          className="w-[500px]"
          />
          <h1 className="flex font-homemade font-semibold self-end text-greenText text-right ss:text-[75px] text-[52px] ss:leading-[85px] leading-[75px] py-6">
            for the love of aprons
          </h1>
        </div> 
      </div>       
    </div>
  </section>
)

export default Hero