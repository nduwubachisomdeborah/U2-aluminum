import blind from "../../assets/stonecoated.png";
import "./Services2.css";
import cautin from "../../assets/ALLshade.png";
import kitchen from "../../assets/brownbundle.png";
import light from "../../assets/bundle shingles.png";
import furniture from "../../assets/Shinyaluminum.png";
import wall from "../../assets/shinyblackaluminum.png";
import sales from "../../assets/Aluminum.png";
import carpet from "../../assets/Allshingles.png";
import pop from "../../assets/shingleswhitebtch.jpeg";
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
          Our comprehensive services span aluminum fabrication, installation,
          cladding, construction support, project management, and material
          supply — combining innovation and craftsmanship to bring architectural
          visions to life with strength and style.
        </div>

        <div className="service-range-hr"></div>
      </div>
      <div className="servce-range-grid">
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={blind} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">CHARCOAL BLACK SHINGLES</div>

          <div className="fit-out-write-up">
            Charcoal black shingle roofing sheets offer a sleek, modern finish
            that enhances any architectural design. Durable and
            weather-resistant, they provide long-lasting protection with
            timeless aesthetic appeal.
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
            Sherk Stonecoated roofing sheets combine the elegance of natural
            stone with the strength of galvanized steel, delivering premium
            durability and beauty. Designed to withstand harsh weather, they
            offer lasting protection with a stylish finish.
          </div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={kitchen} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">MILANO</div>

          <div className="fit-out-write-up">
            Milano Stonecoated roofing sheets feature a classic Roman-style
            design, blending timeless elegance with superior durability. Their
            bold curves and textured finish add a luxurious touch while ensuring
            long-lasting protection against the elements.
          </div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={light} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">CLASSIC CHARCOAL BLACK</div>

          <div className="fit-out-write-up">
            Classic Charcoal Black stonecoated roofing sheets offer a refined,
            timeless look with deep, rich tones that complement any building
            style. Built for strength and longevity, they combine aesthetic
            appeal with reliable all-weather performance.
          </div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={furniture} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">ALUMINUM</div>

          <div className="fit-out-write-up">
            Aluminum roofing sheets are lightweight, durable, and
            corrosion-resistant, making them ideal for long-term performance in
            all climates. Their sleek finish and low maintenance needs offer
            both aesthetic appeal and cost-effective protection for residential
            and commercial buildings.
          </div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={wall} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">BLACK ALUMINUM</div>

          <div className="fit-out-write-up">
            Black aluminum roofing sheets deliver a sleek, modern appearance
            with exceptional resistance to rust, fading, and corrosion.
            Lightweight yet durable, they provide long-lasting protection while
            enhancing the architectural elegance of any structure.
          </div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={pop} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">SHINGLE BLACK WITH WHITE PATCH</div>

          <div className="fit-out-write-up">
            Shingle Black with White Patch roofing sheets feature a striking
            contrast that adds depth and dimension to any roof design. Combining
            style with durability, they offer excellent weather resistance and a
            unique, eye-catching finish.
          </div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={carpet} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">SHINGLE COFFEE WITH BLACK PATCH</div>

          <div className="fit-out-write-up">
            Shingle Coffee with Black Patch roofing sheets showcase a rich,
            earthy tone accented by bold black highlights, creating a warm and
            sophisticated roof finish. Built for durability and style, they
            offer lasting protection with a distinctive visual appeal.
          </div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={sales} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">ASH GREY ALUMINUM</div>

          <div className="fit-out-write-up">
            Ash Grey aluminum roofing sheets offer a sleek, contemporary look
            with a neutral tone that complements both modern and traditional
            architecture. Lightweight, rust-resistant, and durable, they provide
            reliable protection with minimal maintenance.
            {/* Our fit-out work is a symphony of precision and creativity,
            transforming empty spaces into vibrant realities. */}
          </div>
        </div>
      </div>
      {/* service range */}
    </div>
  );
};

export default Services2;
