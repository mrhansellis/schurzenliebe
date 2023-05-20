import React, {useState} from 'react';
import Biography from './Biography';
import { tina } from "../assets";

const About = () => {

  const [isBioOpen, setIsBioOpen] = useState(false);

  const openBio = () => {
    setIsBioOpen(true);
  };

  const closeBio = () => {
    setIsBioOpen(false);
  };

  return (
    <section id="about" >
      <div className={`flex sm:flex-row flex-col sm:justify-around items-center mx-auto xl:px-0 sm:px-16 px-6`}>
        

        <div id="image" alt="detail of aprons displaying a range of colors and front pockets" className=" sm:order-last order-first sm:ml-10 relative sm:mb-0 mb-6">
          <img src={tina}
          onClick={openBio}
          className=" w-full h-auto flex-grow" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-3xl bg-opacity-0 hover:bg-opacity-25 bg-black opacity-0 hover:opacity-100 transition-opacity transition-all">
            View Bio
          </div>
        </div>

        <div id="bio">
          {isBioOpen && (
          <div className="popup">
            <button onClick={closeBio}>X</button>
            <Biography />
          </div>
          )}
        </div>
        
        <div id="description"
          className="flex items-center max-w-sm rounded overflow-hidden shadow-lg sm:mr-10 sm:order-first order-last sm:ml-4 mb-4 sm:mb-0 relative "> 
            <div className="px-6 py-4 ">
            <p>
            Bettina has always loved aprons. Growing up in Germany, she would spend hours in the kitchen with her Mom cooking and Dad baking. Always wearing her Schürze (apron). When an apron got lost in the mail from Germany to the United States she wasn't able to find one that looked and felt like ones from her childhood home in the Black Forest. She started to make aprons as gifts for family and friends at first and when the feedback came back positive Schurzenliebe (apron love) was born. 
            </p>
          </div>           
        </div>
      </div>
    </section>
  )
}

export default About