import clock from "../../assets/clock.png";
import int from "../../assets/whoweare.jpg";
import CountUp from "react-countup";
import good from "../../assets/good-removebg-preview.png";
import smart from "../../assets/execute-removebg-preview.png";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Link } from "react-router-dom";
import "./Aboutus.css";

// ✅ Animation Variants
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const fadeLeftVariant: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const AboutUs = () => {
  return (
    <div className="About-us-main-div">
      {/* Animated Cards */}
      <motion.div
        className="About-us-div-display"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {[
          {
            image: clock,
            caption: "Swift Roofing",
            text:
              "Using smart methods, strong tools, and a trained team, we accelerate " +
              "project timelines without compromising quality. From roofing sheets to " +
              "aluminum works, Swift Roof transforms your vision into a safe, durable, and " +
              "visually appealing result.",
          },
          {
            image: good,
            caption: "Smart Execution",
            text:
              "With cutting-edge technology, streamlined processes, and a team of experts, " +
              "we ensure efficient and precise project implementation. From concept to " +
              "completion, Smart Execute transforms ideas into reality, delivering excellence " +
              "every step of the way.",
          },
          {
            image: smart,
            caption: "Flawless Project Delivery",
            text:
              "We meticulously inspect, refine, and ensure that every detail is flawlessly " +
              "executed. Our dedication to quality and precision ensures that your project is " +
              "not just delivered, but handed over with pride, confidence, and the assurance of perfection.",
          },
        ].map((card, index) => (
          <motion.div
            className="About-us-card-div"
            key={index}
            variants={cardVariant}
          >
            <div className="about-us-img-div">
              <img src={card.image} alt="icon" className="about-us-img" />
            </div>
            <div className="about-us-caption">{card.caption}</div>
            <div className="about-us-writeup">{card.text}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* WHO WE ARE Section */}
      <div className="who-we-are-display-div">
        <motion.div
          className="about-us-div2-img"
          variants={fadeLeftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src={int} alt="interior" className="who-img" />
        </motion.div>

        <motion.div
          className="who-we-are-content-div"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="who-we-are-h1">WHO WE ARE</div>
          <div className="Builders-writeup">U2 Aluminum Systems Enterprise</div>
          <div className="uz">
            U2 Aluminum Systems Enterprise is a leading roofing and aluminum
            solutions company, specializing in the supply and installation of
            high-quality roofing sheets and aluminum products across Nigeria and
            beyond. With a diverse portfolio spanning residential, commercial,
            industrial, and institutional projects, we bring precision,
            durability, and innovation to every build.
          </div>

          <div className="numbers-display-div">
            <div>
              <div className="number-div">
                <CountUp end={1} duration={20} />
                k+
              </div>
              <div>Project Done</div>
            </div>

            <div className="about-us-hr"></div>

            <div>
              <div className="number-div">
                <CountUp end={100} duration={20} />%
              </div>
              <div>Happy Clients</div>
            </div>

            <div className="about-us-hr"></div>

            <div>
              <div className="number-div">
                <CountUp end={50} duration={20} />+
              </div>
              <div>Professional Worker</div>
            </div>
          </div>

          <div className="know-more">
            <Link
              to="/About-us"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Know More
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
