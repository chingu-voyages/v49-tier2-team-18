import React, { useState } from 'react';
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import ColorPicker from "./components/colorpicker/ColorPicker"
import PromptForm from "./components/prompt-form/PromptForm"
import ResponseDisplay from "./components/response-display/ResponseDisplay"

const App = () => {
  
  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });
  const [hex, setHex] = useState("#fff");
  const [ aiResponse, setAiResponse ] = useState(null)
  const [ testColor, setTestColor ] = useState("#036ffc")


  return (
    <div>
      <Navbar />
      <Hero />
      <ColorPicker hsva={hsva} setHsva={setHsva} hex={hex} setHex={setHex} />
      <PromptForm 
        setAiResponse={setAiResponse}
        color={testColor}
      />
      <ResponseDisplay 
        aiResponse={aiResponse}
        color={testColor}
      />
    </div>
  );
};

export default App;