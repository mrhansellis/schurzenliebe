import React from 'react'
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { cookinggirl, idris, camplady } from '../assets';

const Testimonials = () => {
  return (
    <Carousel transition={{duration: 2}} autoplay={true} autoplayDelay={8000} loop={true} className="py-16">
      <div className="relative w-md w-full">
        <img
          src={cookinggirl}
          alt="young woman preparing food in an apron"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/25">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 font-poppins text-3xl md:text-4xl lg:text-5xl"
            >
              Loving my apron.
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 font-poppins opacity-80"
            >
              "The craftsmanship is exceptional. I chose the green linen with a modern geometric accent and it looks very stylish."
            </Typography>
            <div className="flex justify-center gap-2">
            </div>
          </div>
        </div>
      </div>
      <div className="relative place-self-center h-full w-full">
        <img
          src={idris}
          alt="idris elba wearing his apron in the kitchen"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/25">
          <div className="w-3/4 text-center md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              LOVE!!!!
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              "This is my third apron purchase, one for myself and two as gifts and I couldn't love these aprons more!!"
            </Typography>
            <div className="flex gap-2">
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={camplady}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/25">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              I love this apron. The high quality materials hold up so well I never go camping without it. Makes a great gift as well!
            </Typography>
            <div className="flex gap-2">
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}

export default Testimonials