import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import ColorPicker from "./components/colorpicker/ColorPicker"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ColorPicker />
    </div>
  );
};

export default App;
