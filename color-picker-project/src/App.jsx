import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import ColorPicker from "./components/colorpicker/ColorPicker"
import PromptForm from "./components/prompt-form/PromptForm"


// AI TESTING
import { getGroqChatCompletion } from "./lib/groq-api";

const response = await getGroqChatCompletion()
// END AI TESTING

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ColorPicker />
      <PromptForm />
    </div>
  );
};

export default App;
