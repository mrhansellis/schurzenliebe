import styles from "../style"
import React from 'react'
import { aprondetail } from "../assets";

const Aprons = () => {
  return (
    <section id="aprons" >
      <div className={`flex sm:flex-row flex-col sm:justify-between items-center mx-auto xl:px-0 sm:px-16 px-6`}>
        <div id="description"
          className="flex items-center max-w-sm rounded overflow-hidden shadow-lg sm:mr-10 sm:order-first order-last sm:ml-4 mb-4 sm:mb-0 relative "> 
            <div className="px-6 py-4 ">
            <p>
            My personalized aprons or an adorable apron set are the perfect gift for friends, family members or for yourself! If you enjoy working in the kitchen, putting on a custom made apron will make it even more fun. We use the finest locally sourced cotton and linen to fabricate a unique peice just for you.</p>
            {/* <div id="sunnygradient" className="absolute inset-0 sunny_gradient">
          </div> */}
          </div>
                   
          </div>
            <div id="image" alt="detail of aprons displaying a range of colors and front pockets" className=" sm:order-last order-first sm:ml-10 relative sm:mb-0 mb-6">
              <a href="https://www.etsy.com/shop/Schurzenliebe" target="_blank"> 
              <img src={aprondetail}
              className=" w-full h-auto flex-grow" />
              <div className="absolute inset-0 flex items-center justify-center text-white text-3xl bg-opacity-0 hover:bg-opacity-25 bg-black opacity-0 hover:opacity-100 transition-opacity transition-all">
                Shop Aprons
              </div>
              </a> 
            </div>
          
      </div>
    </section>
  )
}

export default Aprons