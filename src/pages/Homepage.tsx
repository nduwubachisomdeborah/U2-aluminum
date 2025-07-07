import AboutUs from "../component/Aboutus/Aboutus";
import HeroSection from "../component/HeroSection/HeroSection";
import NavBar from "../component/NavBar/NavBar";
import Services from "../component/Services/Services";
import Services2 from "../component/Services2/Service2";
import TopNavBar from "../component/TopNavBar/TopNavBar";

const Homepage = () => {
  return (
    <div>
      <TopNavBar />
      <NavBar />
      <HeroSection />
      <AboutUs />
      <Services />
      <Services2 />
    </div>
  );
};

export default Homepage;
