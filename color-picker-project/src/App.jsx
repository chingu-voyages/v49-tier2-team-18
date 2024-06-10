import React, { useState } from 'react';
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import ColorPicker from "./components/colorpicker/ColorPicker"
import PromptForm from "./components/prompt-form/PromptForm"

const App = () => {
  
  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });
  const [hex, setHex] = useState("#fff");
  const [ aiResponse, setAiResponse ] = useState(null)
  const [ testColor, setTestColor ] = useState("#036ffc")

  // TEST CODE >>>>>>
  if (aiResponse) {
    console.log(aiResponse)
  }
  
  // <<<<<< TEST CODE

  return (
    <div>
      <Navbar />
      <Hero />
      <ColorPicker hsva={hsva} setHsva={setHsva} hex={hex} setHex={setHex} />
      <PromptForm 
        setAiResponse={setAiResponse}
        color={testColor}
      />
    </div>
  );
};

export default App;