import {
  animate,
  useMotionTemplate,
  useMotionValue,
  motion,
} from "framer-motion";
import { FooterMenu } from "../../constants/Footer";
import Logo from "../navbar/Logo";
import { MaxWidthWrapper } from "../utils/MaxWidthWrapper";
import "./Footer.css";
import GenericColumn from "./GenericColumn";
import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const Footer = ({ colorsTop }) => {
  const color = useMotionValue(colorsTop[0]);

  useEffect(() => {
    animate(color, colorsTop, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "reverse",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(75% 125% at 50% 0%,  #020617 10%, ${color})`;

  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.footer
      className="footer"
      style={{
        background: backgroundImage,
      }}
    >
      <MaxWidthWrapper className="max-width-wrapper">
        <div className="logo-column">
          <Logo />
          <h1 className="footer-title">PalettePro</h1>
        </div>

        {FooterMenu.map(({ title, links }, index) => (
          <GenericColumn title={title} links={links} key={index} />
        ))}
      </MaxWidthWrapper>
      <div className="footer-bottom">
        <motion.span
          style={{
            border,
            boxShadow,
          }}
          className="copyright"
        >
          © Chingu Voyages&apos; v49-tier2-team-18. - All rights reserved.
        </motion.span>
        <div className="canvas-container">
          <Canvas>
            <Stars radius={50} count={200} factor={4} fade speed={2} />
          </Canvas>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
