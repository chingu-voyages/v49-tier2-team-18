import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import PromptForm from "./components/prompt-form/PromptForm"


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
