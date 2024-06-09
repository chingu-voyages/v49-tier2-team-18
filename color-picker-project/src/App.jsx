import React, { useState } from 'react';
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import ColorPicker from "./components/colorpicker/ColorPicker"

const App = () => {

  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });
  const [hex, setHex] = useState("#fff");

  return (
    <div>
      <Navbar />
      <Hero />
      <ColorPicker hsva={hsva} setHsva={setHsva} hex={hex} setHex={setHex} />
    </div>
  );
};

export default App;