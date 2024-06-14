import React, { useState } from 'react';
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import ColorPicker from "./components/colorpicker/ColorPicker"
import PromptForm from "./components/prompt-form/PromptForm"
import ResponseDisplay from "./components/response-display/ResponseDisplay"
import MoreInfo from "./components/more-info/MoreInfo"

const App = () => {
  const [ colorCodeFormat, setColorCodeFormat ] = useState("hex")
  const [ currentColor, setCurrentColor ] = useState("#036ffc")
  const [ aiResponse, setAiResponse ] = useState(null)
  

  return (
    <div>
      <Navbar />
      <Hero />
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
    </div>
  );
};

export default App;