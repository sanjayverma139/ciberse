import React from "react";
import Navbar from "../../components/Navbar";
import Home from "./Home";
import Mission from "./Mission";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";
import Aboutboxes from "./Aboutboxes";
import Review from "./Review";
import Companies from "./Companies";
import Contact from "./Contact";

import Footer from "../../components/footer/Footer";

const Hompage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Mission />
      <Aboutboxes />
      <Services />
      <WhyChooseUs />
      <Review />
      <Companies />
      <Contact />
      <Footer />
    </>
  );
};

export default Hompage;
