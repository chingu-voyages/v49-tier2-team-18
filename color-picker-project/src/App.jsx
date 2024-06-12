import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import PromptForm from "./components/prompt-form/PromptForm";
import TeamSection from "./components/teamsection/TeamSection";

// AI TESTING
import { getGroqChatCompletion } from "./lib/groq-api";

const response = await getGroqChatCompletion();
// END AI TESTING

// Define the colors for the top of the page
const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero colorsTop={COLORS_TOP} />
      <PromptForm />
      <TeamSection />
      <Footer colorsTop={COLORS_TOP} />
    </div>
  );
};

export default App;
