import styles from "../style"
import React from 'react'
import { aprons, schurtzimage } from "../assets";

const Aprons = () => {
  return (
    <section id="aprons" className={`flex md:flex-row flex-col  ${styles.paddingY}`}>
      <div className={`flex mx-auto justify-center items-start  xl:px-0 sm:px-16 px-6`}>
      <div className={`flex justify-center items-center sm:flex-row flex-col mx-auto py-6`}>

          <div id="2">
            <img src={schurtzimage} 
             />
            <p>Another Div</p>
          </div>
        </div>  
      </div>
    </section>
  )
}

export default Aprons