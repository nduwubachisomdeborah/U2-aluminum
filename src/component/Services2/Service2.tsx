import blind from "../../assets/sharpalu.png";
import bid from "../../assets/officeshingle.jpg";
import "./Services2.css";
import cautin from "../../assets/brightaluimg.png";
import kitchen from "../../assets/brownbundle.png";
import chen from "../../assets/ALLshade.png";
import lit from "../../assets/copperimage1.png";
import kit from "../../assets/corperimage3.png";
import light from "../../assets/sharpaluminum.png";
import lig from "../../assets/officeshingle.jpg";
import furniture from "../../assets/brightalumi.png";
import furn from "../../assets/copperimage4.png";
import wall from "../../assets/shinyblackaluminum.png";
import sales from "../../assets/Aluminum.png";
import carpet from "../../assets/copperimage.png";
import pop from "../../assets/cleanaluimage.png";
import corp from "../../assets/corperimage5.png";
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
          <div className="fit-out">
            Metcoppo (Stone-Coated or Colored Metcoppo)
          </div>

          <div className="fit-out-write-up">
            {/* Mimics clay tiles but made of aluminum. Known for aesthetics and
            strength. */}
            {/* Our fit-out work is a symphony of precision and creativity,
            transforming empty spaces into vibrant realities. */}
          </div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={cautin} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">Aluminum</div>

          {/* <div className="fit-out-write-up">ALuminum roofing sheet</div> */}
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={kitchen} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">Shingles</div>

          <div className="fit-out-write-up">
            {/* Milano Stonecoated roofing sheets feature a classic Roman-style
            design, blending timeless elegance with superior durability. Their
            bold curves and textured finish add a luxurious touch while ensuring
            long-lasting protection against the elements. */}
          </div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={light} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">Step Tile Aluminum Sheets</div>

          <div className="fit-out-write-up">
            {/* Classic Charcoal Black stonecoated roofing sheets offer a refined,
            timeless look with deep, rich tones that complement any building
            style. Built for strength and longevity, they combine aesthetic
            appeal with reliable all-weather performance. */}
          </div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={furniture} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">Different Shades of ALUMINUM</div>

          <div className="fit-out-write-up">
            {/* Aluminum roofing sheets are lightweight, durable, and */}
            corrosion-resistant.
          </div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={wall} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">BLACK ALUMINUM</div>

          <div className="fit-out-write-up">
            {/* Black aluminum roofing sheets deliver a sleek, modern appearance
            with exceptional resistance to rust, fading, and corrosion.
            Lightweight yet durable, they provide long-lasting protection while
            enhancing the architectural elegance of any structure. */}
          </div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={pop} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">Metcopo</div>

          {/* <div className="fit-out-write-up">metcopo</div> */}
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={carpet} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">
            {" "}
            Standing Seam Aluminum Roofs Interlocking panels with raised seams
          </div>

          <div className="fit-out-write-up">
            {/* Has ridged, stepped design for tiled look. Used in residential
            buildings. */}
          </div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={sales} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">ASH GREY ALUMINUM</div>

          <div className="fit-out-write-up">
            rust-resistant
            {/* Our fit-out work is a symphony of precision and creativity,
            transforming empty spaces into vibrant realities. */}
          </div>
        </div>
      </div>
      <div className="servce-range-grid">
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={corp} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">Long Span Aluminum Sheets</div>

          <div className="fit-out-write-up">
            {/* Mimics clay tiles but made of aluminum. Known for aesthetics and
            strength. */}
            {/* Our fit-out work is a symphony of precision and creativity,
            transforming empty spaces into vibrant realities. */}
          </div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={cautin} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">Aluminum</div>

          <div className="fit-out-write-up">ALuminum roofing sheet</div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={kit} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">
            {" "}
            Corrugated Aluminum Sheets Wavy/rippled pattern.
          </div>

          <div className="fit-out-write-up"></div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={lit} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">
            Aluminum Shingles Small, shingle-shaped sheets
          </div>

          <div className="fit-out-write-up"></div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={furn} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out"> Embossed Aluminum Roofing </div>

          <div className="fit-out-write-up">
            patterned surface for better grip and aesthetics.
          </div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={wall} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">Charcoal Black Aluminum</div>

          <div className="fit-out-write-up"></div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={pop} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">Metcopo</div>

          <div className="fit-out-write-up"></div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={carpet} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out"> Step Tile Aluminum Sheets</div>

          <div className="fit-out-write-up"></div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={sales} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">Ash Grey Aluminum</div>

          <div className="fit-out-write-up">
            {/* Ash Grey aluminum roofing sheets offer a sleek, contemporary look
            with a neutral tone that complements both modern and traditional
            architecture. Lightweight, rust-resistant, and durable, they provide
            reliable protection with minimal maintenance. */}
            {/* Our fit-out work is a symphony of precision and creativity,
            transforming empty spaces into vibrant realities. */}
          </div>
        </div>
      </div>
      <div className="servce-range-grid">
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={blind} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">
            Metcoppo (Stone-Coated or Colored Metcoppo)
          </div>

          <div className="fit-out-write-up">
            {/* Mimics clay tiles but made of aluminum. Known for aesthetics and
            strength. */}
            {/* Our fit-out work is a symphony of precision and creativity,
            transforming empty spaces into vibrant realities. */}
          </div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={cautin} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">Aluminum</div>

          <div className="fit-out-write-up"></div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={kitchen} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">Shingles Stonecoated</div>

          <div className="fit-out-write-up"></div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={light} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">Step Tile Roofing sheets</div>

          <div className="fit-out-write-up"></div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={furniture} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">Corrosive-resistant Aluminum Sheets</div>

          <div className="fit-out-write-up"></div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={wall} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">Long Span BLack Aluminum</div>

          <div className="fit-out-write-up"></div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={pop} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">Shiny Ash Grey Metcopo</div>

          <div className="fit-out-write-up"></div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={carpet} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out"> Rigid Step-designed Aluminum Sheets</div>

          <div className="fit-out-write-up"></div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={sales} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">Neutral-tone Aluminum</div>

          <div className="fit-out-write-up">
            modern and traditional architecture
            {/* Our fit-out work is a symphony of precision and creativity,
            transforming empty spaces into vibrant realities. */}
          </div>
        </div>
      </div>
      <div className="servce-range-grid">
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={blind} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">Stone-Coated or Colored Metcoppo</div>

          <div className="fit-out-write-up">
            Known for aesthetics and strength.
            {/* Our fit-out work is a symphony of precision and creativity,
            transforming empty spaces into vibrant realities. */}
          </div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={cautin} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">Aluminum</div>

          <div className="fit-out-write-up"></div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={chen} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">Charcoal-black Stonecoated shingle</div>

          <div className="fit-out-write-up"></div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={lig} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">Shingles black With white Patch</div>

          <div className="fit-out-write-up"></div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={furniture} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">Different Shades of ALUMINUM</div>

          <div className="fit-out-write-up"></div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={wall} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">BLACK ALUMINUM</div>

          <div className="fit-out-write-up"></div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={pop} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">Metcopo</div>

          <div className="fit-out-write-up"></div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={carpet} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out"> Step Tile Aluminum Sheets</div>

          <div className="fit-out-write-up"></div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={sales} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">ASH GREY ALUMINUM</div>

          <div className="fit-out-write-up">
            {/* Our fit-out work is a symphony of precision and creativity,
            transforming empty spaces into vibrant realities. */}
          </div>
        </div>
      </div>
      <div className="servce-range-grid">
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={bid} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">Shingles COffee-brown With Black Patch</div>

          <div className="fit-out-write-up">
            {/* Our fit-out work is a symphony of precision and creativity,
            transforming empty spaces into vibrant realities. */}
          </div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={cautin} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">Shiny Aluminum</div>

          <div className="fit-out-write-up"></div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={kitchen} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">Bundles of Shingles</div>

          <div className="fit-out-write-up"></div>
        </div>
      </div>
      {/* service range */}
    </div>
  );
};

export default Services2;
