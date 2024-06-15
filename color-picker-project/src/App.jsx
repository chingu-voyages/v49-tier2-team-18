import React, { useState } from 'react';
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import ColorPicker from "./components/colorpicker/ColorPicker";
import PromptForm from "./components/prompt-form/PromptForm";
import ResponseDisplay from "./components/response-display/ResponseDisplay";
import MoreInfo from "./components/more-info/MoreInfo";
import TeamSection from "./components/teamsection/TeamSection";
import Footer from "./components/footer/Footer";

// Define the colors for the top of the page
const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const App = () => {
  const [ colorCodeFormat, setColorCodeFormat ] = useState("hex")
  const [ currentColor, setCurrentColor ] = useState("#036ffc")
  const [ aiResponse, setAiResponse ] = useState(null)
  

  return (
    <div>
      <Navbar />
      <Hero colorsTop={COLORS_TOP} />
      <ColorPicker 
        colorCodeFormat={colorCodeFormat}
        setCurrentColor={setCurrentColor} 
      />
      <PromptForm 
        setAiResponse={setAiResponse}
        colorCodeFormat={colorCodeFormat}
        setColorCodeFormat={setColorCodeFormat}
        color={currentColor}
      />
      <ResponseDisplay 
        aiResponse={aiResponse}
        colorCodeFormat={colorCodeFormat}
        color={currentColor}
      />
      <MoreInfo />
      <TeamSection />
      <Footer colorsTop={COLORS_TOP} />
    </div>
  );
};

export default App;