<<<<<<< main
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import PromptForm from "./components/prompt-form/PromptForm";
import TeamSection from "./components/teamsection/TeamSection";

// AI TESTING
import { getGroqChatCompletion } from "./lib/groq-api";

const response = await getGroqChatCompletion();
// END AI TESTING
=======
import React, { useState, useEffect } from 'react';
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import ColorPicker from "./components/colorpicker/ColorPicker"
import PromptForm from "./components/prompt-form/PromptForm"
import ResponseDisplay from "./components/response-display/ResponseDisplay"
import MoreInfo from "./components/more-info/MoreInfo"
>>>>>>> development

// Define the colors for the top of the page
const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const App = () => {
  
  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });
  const [hex, setHex] = useState("#fff");
  const [ aiResponse, setAiResponse ] = useState(null)
  const [ testColor, setTestColor ] = useState("#036ffc");

  return (
    <div>
      <Navbar />
<<<<<<< main
      <Hero colorsTop={COLORS_TOP} />
      <PromptForm />
      <TeamSection />
      <Footer colorsTop={COLORS_TOP} />
=======
      <Hero />
      <ColorPicker hsva={hsva} setHsva={setHsva} hex={hex} setHex={setHex} />
      <PromptForm 
        setAiResponse={setAiResponse}
        color={hex}
      />
      <ResponseDisplay 
        aiResponse={aiResponse}
        color={hex}
      />
      <MoreInfo />
>>>>>>> development
    </div>
  );
};

export default App;