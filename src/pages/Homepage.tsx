import AboutUs from "../component/Aboutus/Aboutus";
import HeroSection from "../component/HeroSection/HeroSection";
import NavBar from "../component/NavBar/NavBar";
import TopNavBar from "../component/TopNavBar/TopNavBar";

const Homepage = () => {
  return (
    <div>
      <TopNavBar />
      <NavBar />
      <HeroSection />
      <AboutUs />
    </div>
  );
};

export default Homepage;
