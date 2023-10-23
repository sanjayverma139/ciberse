import React from "react";
import Coming from "../CoomingSoon/Coming";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer/Footer";

function Blog() {
  return (
    <div className="Blog__section">
      <Navbar />
      <Coming />
      <Footer />
    </div>
  );
}

export default Blog;
