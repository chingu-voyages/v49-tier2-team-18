import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
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
      <PromptForm />
    </div>
  );
};

export default App;
