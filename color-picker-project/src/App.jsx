import React, { useState } from 'react';
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import ColorPicker from "./components/colorpicker/ColorPicker"
import PromptForm from "./components/prompt-form/PromptForm"


// AI TESTING
import { getGroqChatCompletion } from "./lib/groq-api";

const response = await getGroqChatCompletion()
// END AI TESTING

const App = () => {

  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });
  const [hex, setHex] = useState("#fff");

  return (
    <div>
      <Navbar />
      <Hero />
      <ColorPicker hsva={hsva} setHsva={setHsva} hex={hex} setHex={setHex} />
      <PromptForm />
    </div>
  );
};

export default App;