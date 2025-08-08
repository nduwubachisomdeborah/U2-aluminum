import int from "../../assets/whoweare.jpg";
import CountUp from "react-countup";

import heroVideo from "../../assets/WhatsApp Video 2025-08-06 at 10.53.58_84b95ac6.mp4";
import "./Aboutuspage.css";
import TopNavBar from "../../component/TopNavBar/TopNavBar";
import NavBar from "../../component/NavBar/NavBar";
import Footer from "../../component/Footer/Footer";
// import Fade from "react-reveal/Fade";
const AboutUs = () => {
  const email = "U2Alminum@gmail.com";
  const handleGmailClick = () => {
    // Replace 'mailto' with the recipient's email
    window.location.href = `mailto:${email}`;
  };
  return (
    <div>
      <TopNavBar />
      <NavBar />
      <div className="hero-container">
        <div className="hero-video-div">
          {/* <Slider {...settings}> */}
          <div className="background-div-overlay"></div>
          <video autoPlay loop muted className="video-background">
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* <video autoPlay loop muted className="video-background2">
            <source
              src={process.env.PUBLIC_URL + "/videos/vivi.mp4"}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video> */}
          {/* </Slider> */}
        </div>
        <div className="hero-caption"> U2 Aluminum Systems Enterprise</div>
        <div className="caption-writeup">
          Roofing and Contracting Company where creativity meets standard
        </div>
        <div className="btn-btn-navbar" onClick={handleGmailClick}>
          Visit Us
        </div>
      </div>
      {/* ///// */}
      <div>
        <div className="About-us-main-div" id="about-us">
          {/* anoda page of who we are */}
          <div className="who-we-are-display-div ">
            <div>
              <div className="about-us-div2-img">
                {/* <Fade left> */}
                <img src={int} alt="int" className="who-img" />
                {/* </Fade> */}
              </div>
            </div>

            <div className="who-we-are-content-div">
              <div className="who-we-are-h1">WHO WE ARE</div>
              <div className="Builders-writeup"></div>
              <div className="u2systems">
                U2 Aluminum Systems Enterprise is a leading roofing and aluminum
                solutions company, specializing in the supply and installation
                of high-quality roofing sheets and aluminum products across
                Nigeria and beyond. With a diverse portfolio spanning
                residential, commercial, industrial, and institutional projects,
                we bring precision, durability, and innovation to every build.
                We help clients choose the right materials to meet their
                functional and aesthetic needs. Our team is skilled in providing
                end-to-end aluminum and roofing solutions — from product
                consultation to installation — ensuring a seamless, stress-free
                experience. Whether it's a full-scale roofing project or custom
                aluminum work, we deliver with the same level of expertise and
                attention to detail.
              </div>
              <div className="numbers-display-div">
                <div>
                  <div className="number-div">
                    <CountUp end={1} duration={20} />
                    K+{" "}
                  </div>

                  <div>Project Done</div>
                </div>
                <div className="about-us-hr"></div>
                <div>
                  <div className="number-div">
                    {" "}
                    <CountUp end={100} duration={20} />%
                  </div>

                  <div>Happy Clients</div>
                </div>
                <div className="about-us-hr"></div>
                <div>
                  <div className="number-div">
                    <CountUp end={50} duration={20} />+{" "}
                  </div>
                  <span></span>
                  <div>Professioinal Worker</div>
                </div>
              </div>
              <div className="know-more" onClick={handleGmailClick}>
                Know More
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
