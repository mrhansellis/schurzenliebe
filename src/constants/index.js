import { FaInstagram, FaFacebook, FaPinterest } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';

export const navLinks = [
  {
    id: "home",
    title: "Home"
  },
  {
    id: "aprons",
    title: "Aprons"
  },
  {
    id: "testimonials",
    title: "Testimonials"
  },
  {
    id: "contact",
    title: "Contact"
  }
]

export const contactLinks = [
  {
    id: 1,
    icon: FaInstagram,
    link: "https://www.instagram.com/schurzenliebe/",
    target: "_blank"
  },
  {
    id: 2,
    icon: FaFacebook,
    link: "https://www.facebook.com/bettina.megowan",
    target: "_blank"
  },
  {
    id: 3,
    icon: FaPinterest,
    link: "https://www.pinterest.com/pin/1688918599088333/",
    target: "_blank"
  },
  {
    id: 4,
    icon: BiMailSend,
    link: "mailto:nmegowan@mac.com?subject=I'm interested in your Aprons!"
  }
]