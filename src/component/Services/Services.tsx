import "./Services.css";
import modern from "../../assets/shingleswhitebtch.jpeg";
import closed from "../../assets/machines.png";
import CountUp from "react-countup";

const Services = () => {
  const email = "U2aluminum@gmail.com";
  const handleGmailClick = () => {
    // Replace 'mailto' with the recipient's email
    window.location.href = `mailto:${email}`;
  };
  return (
    <div className="Services-main-div">
      <div className="Services-div-dsiplay ">
        <div className="Service-first-div">
          <div className="sectors-we-serve">SECTORS WE SERVE</div>
          <div className="dedicate">
            We're dedicated to transforming spaces and creating lasting impacts
            in aluminum and roofing sectors
          </div>
          <div className="service-hr"></div>
          <div className="Service-disover-border" onClick={handleGmailClick}>
            Visit Us
          </div>
        </div>
        <div className="Service-div-second">
          <div className="writeup">
            U2 Aluminum Systems Enterprise specializes in delivering
            high-quality aluminum solutions across a wide range of industries.
            From supplying durable materials for modern residential projects to
            enhancing commercial and industrial spaces with precision-engineered
            aluminum products, our commitment to excellence drives innovation at
            every level. Whether it's for architectural facades, interior
            fittings, or custom fabrication, we provide reliable systems that
            meet the evolving needs of our clients.
          </div>
          <div className="service-img-display-div">
            <div className="closed-img-div">
              <img src={modern} alt="modern" className="service-mode-pix" />{" "}
            </div>
            <div className="closed-img-div">
              <img src={closed} alt="modern" className="service-mode-pix" />
            </div>
          </div>
          <div className="border-twenty">
            <div className="border-twenty-three">
              {" "}
              <CountUp end={10} duration={50} />+
            </div>
            <div className="experience">Years of Experience</div>
          </div>
        </div>
      </div>
      {/* card on service */}

      {/* card on service div */}
    </div>
  );
};

export default Services;
