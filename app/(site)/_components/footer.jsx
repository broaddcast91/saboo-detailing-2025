import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRightLong,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { FiMail, FiPhone } from "react-icons/fi";

export const usefulLinks = [
  {
    name: "About Us",
    link: "/about",
  },
  {
    name: "Our Rooms",
    link: "/rooms",
  },
  {
    name: "Gallery",
    link: "/gallery",
  },
  {
    name: "Ice N'Spice",
    link: "/ice-n-spice",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export const moreLinks = [
  {
    name: "Standard Room",
    link: "/",
  },
  {
    name: "Executive Room",
    link: "/",
  },
  {
    name: "Deluxe Room",
    link: "/",
  },
  {
    name: "Deluxe Suite",
    link: "/",
  },
  {
    name: "Privacy Policy",
    link: "/",
  },
];

export default function Footer() {
  return (
    <div className="bg-primaryBackground  ">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-5 pb-5 pt-20 gap-7">
        <div className="space-y-2 text-sm">
          <p className="text-2xl font-serif font-medium mb-5">
            Connect With Us
          </p>
          <p>
            Saboo Heights, 6-3-905,Somajiguda,Rajbhavan Road,Hyderabad-500082
          </p>
          <a href="tel:9951699516" className="flex items-center">
            <span className="p-1">
              <FiPhone />
            </span>
            +91 9951699516
          </a>
          <a
            href="mailto:info@hotelinnercircle.in"
            className="flex items-center"
          >
            <span className="p-1">
              <FiMail />
            </span>
            info@hotelinnercircle.in
          </a>
        </div>

        <div className="space-y-3">
          <p className="text-2xl mb-5 font-serif font-medium">Useful Links</p>
          {usefulLinks?.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="flex items-center text-sm transition hover:translate-x-4 hover:text-primary duration-300 "
            >
              <span className="mr-2">
                <FaArrowRightLong />
              </span>
              {item.name}
            </Link>
          ))}
        </div>

        <div className="space-y-3">
          <p className="text-2xl mb-5 font-serif font-medium">More Links</p>
          {moreLinks?.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="flex items-center text-sm transition hover:translate-x-2 hover:text-primary duration-300 "
            >
              <span className="mr-2">
                <FaArrowRightLong />
              </span>
              {item.name}
            </Link>
          ))}
        </div>

        <div className="space-y-2">
          <Image src={"/logo.png"} alt="logo" width={150} height={150} />
          <p className="text-xl font-extrabold">Stay Connected</p>
          <span className="text-3xl flex space-x-3 p-3">
            <a href="https://www.facebook.com/hotelinnercirclehyderabad">
              <FaFacebook />
            </a>
            <a href="https://x.com/i/flow/login?redirect_after_login=%2Finnercirclehyd1">
              <FaXTwitter />
            </a>
            <a href="https://www.instagram.com/hotelinnercircle/">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/showcase/saboorks/?viewAsMember=true">
              <FaLinkedin />
            </a>
          </span>
        </div>
      </div>

      {/* separator */}
      <div className="h-px bg-black/10 w-full"></div>

      <div className="bg-primaryBackground grid grid-cols-2 p-6 text-center ">
        <p>
          Copyright ©
          <a href="/" className=" text-secondary">
            Hotel Inner Circle.
          </a>
          &nbsp; All Rights Reserved
        </p>
        <p>
          Developed by&nbsp;
          <a
            href="https://www.broaddcast.com/"
            className="hover:text-secondary"
          >
            BroaddCast
          </a>
        </p>
      </div>
    </div>
  );
}
