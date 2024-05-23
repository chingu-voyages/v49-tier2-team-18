import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";


// AI TESTING
import { getGroqChatCompletion } from "./lib/groq-api";

const response = await getGroqChatCompletion()
// END AI TESTING

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
