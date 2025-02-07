"use client";

import axios from "axios";
import { FaCar, FaShieldAlt } from "react-icons/fa";
import { GiAutoRepair } from "react-icons/gi";
// import { Button } from '@mui/material'; // Replace with your actual Button import if needed
import { Card, CardContent } from "@mui/material"; // If you're using MUI Card
import React, { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { submitForm } from "@/actions/landing-action";

export default function Home() {
  return (
    <div className="font-sans bg-white">
      <header className="flex items-center justify-between p-4 text-white bg-gray-800">
        <nav className="flex items-center justify-between">
          <a href="/">
            <img
              src="https://ceramicpro.co.in/wp-content/uploads/2021/07/CPINDIA_LOGO-2048x594.png"
              alt="Logo"
              className="h-12"
            />
          </a>
        </nav>
        <p className="">call : 9848898488 </p>
      </header>

      {/* Hero Section */}

      <section
        className="w-full h-screen bg-center bg-cover"
        style={{
          backgroundImage:
            'url("https://i.pinimg.com/originals/b6/d1/5e/b6d15e962d9c9756502fd8750381277d.jpg")',
        }}
      >
        <div className="flex flex-col items-center justify-center h-full text-white bg-black bg-opacity-50">
          <h1 className="font-mono text-5xl font-bold text-center">
            Welcome to Saboo Detailing Studio
          </h1>
          <p className="mt-4 font-serif text-xl text-center">
            Your trusted car detailing and protection service.
          </p>
          <div className="mt-8">
            <TestDriveForm />
          </div>
          {/* Social Media Icons Section */}
          <div className="flex mt-8 space-x-6 text-2xl">
            <a
              href="https://www.facebook.com/saboodetailingstudio/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/saboodetailingstudio/?fbclid=IwZXh0bgNhZW0CMTAAAR1y0q52OTHi7kqo3yYm_f0IZSzYW09aax02C7IThsgXalo49XwMKcxyeuU_aem_s492Op3c_CJb2osfyWxgcQ#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-600"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </section>

      <CarDetailing />
      <Services />
      <AwesomeServices />

      {/* Services Section */}
      {/* <section id="services" className="py-16 text-center bg-gray-100">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <img src="https://saboomaruti.in/static/media/Website_Maruti_Suzuki_Arena_New_Year_Offers_2025_Sankranti_offers_are_live_at_Saboo_RKS_Motor.c38cc048dd4d4bbab777.webp" alt="Service 1" className="object-cover w-full h-48 rounded-t-lg" />
            <h3 className="mt-4 text-xl font-semibold">Car Sales</h3>
            <p className="mt-2">Find the best deals on new and used cars.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <img src="https://saboomaruti.in/static/media/Website_Maruti_Suzuki_Arena_New_Year_Offers_2025_Sankranti_offers_are_live_at_Saboo_RKS_Motor.c38cc048dd4d4bbab777.webp" alt="Service 2" className="object-cover w-full h-48 rounded-t-lg" />
            <h3 className="mt-4 text-xl font-semibold">Car Rentals</h3>
            <p className="mt-2">Rent a car for your travel needs.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <img src="https://saboomaruti.in/static/media/Website_Maruti_Suzuki_Arena_New_Year_Offers_2025_Sankranti_offers_are_live_at_Saboo_RKS_Motor.c38cc048dd4d4bbab777.webp" alt="Service 3" className="object-cover w-full h-48 rounded-t-lg" />
            <h3 className="mt-4 text-xl font-semibold">Car Insurance</h3>
            <p className="mt-2">Get affordable insurance options for your car.</p>
          </div>
        </div>
      </section> */}

      {/* Footer Section */}
      <footer className="py-8 text-white bg-gray-800">
        <div className="text-center">
          <p>© 2025 Saboo-detailing. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

const CarDetailing = () => {
  return (
    <div className="flex flex-col items-center p-10 bg-white md:flex-row">
      <div className="flex flex-col space-y-4 md:w-1/2">
        <h2 className="font-serif text-3xl font-bold">
          We Aim To Give You The Best In Detailing
        </h2>
        <p className="font-sans text-xl text-gray-700">
          Since its inception, Saboo Detailing has been dedicated to offering
          top-tier services. We focus on providing{" "}
          <strong> the best car detailing in Hyderabad.</strong> Our mission is
          to deliver exceptional quality and customer satisfaction every time.
        </p>
        <p className="font-sans text-xl text-gray-700">
          Saboo detailing and car protection have certainly bonded deeply over
          the years, and Saboo detailing grew to be the top installer of{" "}
          <strong>Paint Protection Film</strong> in Hyderabad.
        </p>
        <p className="font-sans text-xl text-gray-700">
          Paint Protection film and car detailing services have become a
          sub-industry of the automobile sector and have seen tremendous growth.
          The demand for Paint Protection Film and <em>Ceramic Coating</em> will
          rise to another level, as customers are getting to know more about the
          industry.
        </p>
        <p className="font-sans text-xl text-gray-700">
          In our quest to provide{" "}
          <strong>the best paint protection film in Hyderabad</strong>, Saboo
          detailing became an authorized installer for{" "}
          <span className="text-red-500">XPEL</span> paint protection film. With
          an eye for perfection, aim to excel, and support of skilled & trained
          professionals, Saboo Detailing has emerged as the best car detailing
          in Hyderabad.
        </p>
        <ul className="grid grid-cols-1 gap-3 mt-4 text-lg text-gray-700 sm:grid-cols-2">
          <li className="flex items-center space-x-2">
            <span className="text-2xl text-green-500">✅</span>{" "}
            <span>Superior Craftsmanship</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-2xl text-green-500">✅</span>{" "}
            <span>Best detailing</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-2xl text-green-500">✅</span>{" "}
            <span>Free maintenance</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-2xl text-green-500">✅</span>{" "}
            <span>100% customer satisfaction</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-2xl text-green-500">✅</span>{" "}
            <span>Assured quality service</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-2xl text-green-500">✅</span>{" "}
            <span>Trained & experienced technicians</span>
          </li>
        </ul>
        {/* <button className="w-40 px-4 py-2 mt-4 text-white bg-red-600 rounded-lg">LEARN MORE</button> */}
      </div>
      <div className="flex flex-col mt-6 space-y-4 md:w-1/2 md:ml-10 md:mt-0">
        <img
          src="https://quanticalabs.com/Autospa/Template/media/image/sample/460x306/image_10.jpg"
          alt="Car Detailing"
          className="object-cover w-full bg-center rounded-lg shadow-md h-96"
        />
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipN22sp5fORW4aDgaegIJIaeYPBU6drpm5WEnpoW=s1360-w1360-h1020"
          alt="Car Protection"
          className="object-cover rounded-lg shadow-md h-96"
        />
      </div>
    </div>
  );
};

const services = [
  {
    title: "Paint Protection Film",
    description:
      "Paint Protection Film works as an invisible layer of armour over the car finish. Our crystal-clear, energy-absorbent polyurethane film is designed specifically to the car, and then safely bonded to the vulnerable painted surfaces offering up to ten years of guaranteed protection. It also prevents swirls, scratches, and minor dents caused by foreign objects.",
    icon: <FaCar className="text-3xl text-red-600" />,
  },
  {
    title: "Ceramic Coating",
    description:
      "Pure Liquid Nano-Titanium Coating that binds itself on the applied surface to become a rigid three-dimensional ‘Nano-Titanium Super Glass’, protecting this surface indefinitely up to 5-8 micron thickness. It becomes one with the paint of the car, further creating a hydrophobic layer of protection.",
    icon: <FaShieldAlt className="text-3xl text-red-600" />,
  },
  {
    title: "Sun Control Film, Vinyl Wraps & Other Services",
    description:
      "With a team of trained professionals at work, Carsbuddy provides multiple services such as: Vinyl Wrap, Window Tinting, Windshield Protection Film, Machine Polishing, Auto Detailing, Moto Detailing (For Motorcycles).",
    icon: <GiAutoRepair className="text-3xl text-red-600" />,
  },
];

function Services() {
  return (
    <div className="container py-12 mx-auto text-center">
      <h3 className="text-sm font-bold text-gray-500 uppercase">
        Our Services
      </h3>
      <h2 className="mt-2 text-3xl font-bold">We Do Best Service</h2>
      <p className="mt-1 mb-8 text-gray-500">
        Leave An Impression With Your Car’s Paint
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service, index) => (
          <Card
            key={index}
            className="p-6 border-2 border-gray-300 border-dashed"
          >
            <CardContent className="space-y-4 text-left">
              <div>{service.icon}</div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-md gray-600 text- ">{service.description}</p>
              {/* <Button className="px-4 py-2 mt-4 text-white bg-red-600 rounded">
                Learn More
              </Button> */}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

const TestDriveForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    Service: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track submission status
  const [error, setError] = useState(""); // To store error message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Phone number validation - 10 digits only
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return; // Prevent form submission if phone number is invalid
    }

    setError(""); // Clear any existing errors if the phone number is valid

    try {
      // Make the API request to submit the form data
      const res = await submitForm(formData);

      if (res && res.status === 200) {
        // toast.success(res.message);
      }
      setIsSubmitted(true);
    } catch (err) {
      console.error("Error submitting form:", err);
      setError(
        "An error occurred while submitting the form. Please try again later."
      );
    }
  };

  return (
    <div className="max-w-sm p-6 mx-auto bg-black shadow-md rounded-xl">
      <h2 className="mb-4 text-xl font-bold text-center text-white">
        Book your consultation today!
      </h2>

      {isSubmitted ? (
        <div className="text-center text-white">
          <p className="text-xl font-semibold">Submission Successful!</p>
          <p>We will get in touch with you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-black">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {error && <p className="text-sm text-red-500">{error}</p>}{" "}
          {/* Display error message */}
          <select
            name="Service"
            value={formData.Service}
            onChange={handleChange}
            className="w-full p-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select service</option>
            <option value="PPF">PPF</option>
            <option value="Ceramic Coating/Liquid Glass Coating">
              Ceramic Coating/Liquid Glass Coating
            </option>
            <option value="Graphene Coating">Graphene Coating</option>
            <option value="Other Services">Other Services</option>
          </select>
          <button
            type="submit"
            className="w-full py-3 font-semibold text-white transition duration-300 bg-red-600 rounded-xl hover:bg-red-700"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

const services1 = [
  {
    title: "Wrapping",
    image:
      "https://th.bing.com/th/id/OIP.VDbHFMVr5JK3Y5scsdp6lwHaHa?rs=1&pid=ImgDetMain",
  },
  {
    title: "Ceramic Coating",
    image:
      "https://th.bing.com/th/id/OIP.FjEAXIT0haFGFmZI1GtfcQHaE8?rs=1&pid=ImgDetMain",
  },
  {
    title: "Paint Protection Films",
    image:
      "https://th.bing.com/th/id/OIP.cljCNUpytRD2hDT4iYCW4wHaE7?w=294&h=195&c=7&r=0&o=5&dpr=1.9&pid=1.7",
  },
  // {
  //   title: "Glass Polishing",
  //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGRW7jQs0iiPRcNcxaLD6ltNRewbB_2L3Csg&s",
  // },
  // {
  //   title: "Rust Proofing",
  //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtENlsN9wvMFdC-g0E2xEvZUpwSVVPBRjAbw&s",
  // },
  // {
  //   title: "Window Tinting",
  //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHxfWXWVqdYkZ2Mj8n1llaPs2BBA0wxJhKvg&s",
  // },
];

function AwesomeServices() {
  return (
    <div className="px-5 py-10 text-white bg-black">
      <h2 className="text-xl text-center text-gray-400">What We Do?</h2>
      <h1 className="my-4 text-4xl font-bold text-center">AWESOME SERVICES</h1>
      <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {services1.map((service, index) => (
          <div key={index} className="relative duration-500 hover:scale-95">
            <img
              src={service.image}
              alt={service.title}
              className="object-cover w-full rounded-lg shadow-lg h-60"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
              <h3 className="text-xl font-semibold text-center text-white">
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
