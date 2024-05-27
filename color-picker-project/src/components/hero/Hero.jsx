import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

import "./Hero.css";
import {
  animate,
  useMotionTemplate,
  useMotionValue,
  motion,
  easeInOut,
} from "framer-motion";
import { useEffect } from "react";

import { FiArrowRight } from "react-icons/fi";

// Define the colors for the top of the page
const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const Hero = () => {
  // Create a motion value for the color, initially set to the first color in COLORS_TOP
  const color = useMotionValue(COLORS_TOP[0]);

  // Use the useEffect hook to start an animation when the component mounts
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "reverse",
    });
  }, []);

  // Create a radial gradient background image using the color motion value
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%,  #020617 50%, ${color})`;

  // Use the color motion value for the text color
  const textColor = useMotionTemplate`${color}`;

  // Use the color motion value for the border and box shadow of the button
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="section-container"
    >
      <div className="content-container">
        <span className="header-span">Chingu Voyages</span>
        <h1 className="headline">
          <motion.span
            style={{ color: textColor }}
            animate={{
              opacity: [0, 1],
            }}
            transition={{
              opacity: { duration: 2, ease: easeInOut },
            }}
          >
            PalettePro:
          </motion.span>{" "}
          Elevate Your Designs with Advanced Color Pickers
        </h1>
        <p className="description">
          Welcome to PalettePro, an innovative project from Chingu Voyages&apos;
          v49-tier2-team-18. PalettePro offers a suite of advanced color pickers
          designed to streamline and enhance your design workflow. Whether
          you&rdquo;re a professional designer or a hobbyist, our tools will
          help you find the perfect palette for any project.
        </p>
        <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{ scale: 0.95 }}
          className="cta-button"
        >
          Start free trial
          <FiArrowRight className="icon" />
        </motion.button>
      </div>

      {/* Add a Canvas component to render the stars */}

      <div className="canvas-container">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};

export default Hero;
