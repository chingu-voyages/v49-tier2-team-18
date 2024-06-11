import React, { useState } from 'react';
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import ColorPicker from "./components/colorpicker/ColorPicker"
import PromptForm from "./components/prompt-form/PromptForm"
import ResponseDisplay from "./components/response-display/ResponseDisplay"

const App = () => {
  
  const [hsva, setHsva] = useState({ h: 214, s: 99, v: 99, a: 1 });
  // hex state is not updating when color changed in ColorPicker
  const [hex, setHex] = useState("#036ffc");
  const [ colorCodeFormat, setColorCodeFormat ] = useState("hex")
  const [ aiResponse, setAiResponse ] = useState(null)

  console.log(colorCodeFormat)

  return (
    <div>
      <Navbar />
      <Hero />
      <ColorPicker 
        hsva={hsva} 
        setHsva={setHsva} 
        hex={hex} 
        setHex={setHex} 
      />
      <PromptForm 
        setAiResponse={setAiResponse}
        colorCodeFormat={setColorCodeFormat}
        setColorCodeFormat={setColorCodeFormat}
        color={hex}
      />
      <ResponseDisplay 
        aiResponse={aiResponse}
        colorCodeFormat={colorCodeFormat}
        color={hex}
      />
    </div>
  );
};

export default App;