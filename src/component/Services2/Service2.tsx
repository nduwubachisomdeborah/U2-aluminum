import blind from "../../assets/stonecoated.png";
import "./Services2.css";
import cautin from "../../assets/ALLshade.png";
import kitchen from "../../assets/brownbundle.png";
import light from "../../assets/bundle shingles.png";
import furniture from "../../assets/Shinyaluminum.png";
import wall from "../../assets/shinyblackaluminum.png";
import sales from "../../assets/Aluminum.png";
import carpet from "../../assets/Allshingles.png";
import pop from "../../assets/shingles.jpg";
const Services2 = () => {
  const email = "uc@regiscajeinteriors.com";
  const handleGmailClick = () => {
    // Replace 'mailto' with the recipient's email
    window.location.href = `mailto:${email}`;
  };
  return (
    <div className="service-ext-main-div" id="services">
      {/* hr div line */}

      <div className="hr-serve"></div>

      {/* hr div line */}
      {/* service range */}
      <div>
        <div className="our-services-div">OUR SERVICES</div>
        <div className="range-services">Explore Our Range of Services</div>
        <div className="comp-services">
          Our comprehensive services encompass fit-out, interior work,
          construction, project management, and trading, seamlessly merging
          innovation and expertise to bring visionary spaces to life.
        </div>

        <div className="service-range-hr"></div>
      </div>
      <div className="servce-range-grid">
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={blind} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">BLACK SHINGLES</div>

          <div className="fit-out-write-up">
            Design, measure to fit and install all kinds of Window Blinds.
            {/* Our fit-out work is a symphony of precision and creativity,
            transforming empty spaces into vibrant realities. */}
          </div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={cautin} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">SHERK STONECOATED</div>

          <div className="fit-out-write-up">
            Design, measure to fit and install all kinds of Curtains.
          </div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={kitchen} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">MILANO</div>

          <div className="fit-out-write-up">
            Design, measure to fit and install all kinds of Kitchen units &
            cabinets.
          </div>
          <div className="service-range-btn" onClick={handleGmailClick}>
            Book Now
          </div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={light} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">CLASSIC CHARCOAL BLACK</div>

          <div className="fit-out-write-up">
            Our Lighting Decorations are top-notch aimed to meet up client’s
            satisfaction.
          </div>
          <div className="service-range-btn" onClick={handleGmailClick}>
            Book Now
          </div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={furniture} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">ALUMINUM</div>

          <div className="fit-out-write-up">
            Design, measure to fit and install all kinds of Furnitures to our
            customers test.
          </div>
          <div className="service-range-btn" onClick={handleGmailClick}>
            Book Now
          </div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={wall} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">BLACK ALUMINUM</div>

          <div className="fit-out-write-up">
            We have experts that can Design, measure to fit, and install all
            kinds Wall Designs
          </div>
          <div className="service-range-btn" onClick={handleGmailClick}>
            Book Now
          </div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={pop} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">SCREEDING & POP DESIGN</div>

          <div className="fit-out-write-up">
            Our fit-out work in screeding is a symphony of precision and
            creativity, transforming empty spaces into vibrant realities.
          </div>
          <div className="service-range-btn" onClick={handleGmailClick}>
            Book Now
          </div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={carpet} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">COFFEE WITH BLACK BATCH</div>

          <div className="fit-out-write-up">
            Our fit-out work is a symphony of precision and creativity,
            transforming empty spaces into vibrant realities.
          </div>
          <div className="service-range-btn" onClick={handleGmailClick}>
            Book Now
          </div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={sales} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">SALES OF INTERIORS MATERIALS</div>

          <div className="fit-out-write-up">
            We are our client’s and customers representatives from conception,
            planning to furnishing of the project.
            {/* Our fit-out work is a symphony of precision and creativity,
            transforming empty spaces into vibrant realities. */}
          </div>
          <div className="service-range-btn" onClick={handleGmailClick}>
            Book Now
          </div>
        </div>
      </div>
      {/* service range */}
    </div>
  );
};

export default Services2;
