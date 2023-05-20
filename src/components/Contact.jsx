import React from 'react';
import { contacticon } from '../assets';
import { contactLinks } from '../constants';
import { IconContext } from 'react-icons';

const Contact = () => {
  return (
    
    <section id="contact">
      <div className="flex flex-col  items-center   py-16 ">
        
        <div className="flex w-64 relative">
          <img src={contacticon} />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-32">
            <h1 className="font-homemade text-xl">Contact Us</h1>
          </div>
        </div>

      <IconContext.Provider value={{size: 30}}> 
        <div className="flex justify-evenly items-center w-32 h-16">
          
          {contactLinks.map((link) => (
            <a className=""
            key={link.id}
            href={link.link}
            target={link.target}
            rel={link.target === "_blank" ? "noopener noreferrer" : ""}
            >
              <link.icon />
            </a>
          ))}
          
        </div>
      </IconContext.Provider> 
      </div>
    </section>
  )
}

export default Contact