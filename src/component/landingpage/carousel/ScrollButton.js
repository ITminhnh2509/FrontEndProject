import React from "react";
import "./ScrollButton.css";

const ScrollButton = () => {
  const handleScroll = (e) => {
    e.preventDefault();
    const target = document.getElementById("warranty");
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="section10" className="section10">
      <a href="#warranty" onClick={handleScroll} className="scroll-button">
        <span></span>
      </a>
    </section>
  );
};

export default ScrollButton;
