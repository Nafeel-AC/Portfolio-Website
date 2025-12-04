import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import DarkTheme from "../../layouts/Dark";
import FreelancreIntro from "../../components/Freelancre-intro/freelancre-intro";
import Services5 from "../../components/Services5/services5";
import WorksStyle4 from "../../components/Works-style4/works-style4";
import AboutUs5 from "../../components/About-us5/about-us5";
import FullTestimonials from "../../components/Full-testimonials/full-testimonials";

const Homepage = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <FreelancreIntro />
      <Services5  />
      <WorksStyle4 />
      <AboutUs5 />
      <FullTestimonials showHead />
      <Footer />
    </DarkTheme>
  );
};

export default Homepage;
