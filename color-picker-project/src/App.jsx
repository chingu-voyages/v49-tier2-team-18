import { useState } from "react"
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import PromptForm from "./components/prompt-form/PromptForm"
import MoreInfo from "./components/more-info/MoreInfo"


const App = () => {
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
      <PromptForm 
        setAiResponse={setAiResponse}
        color={testColor}
      />
      
      <MoreInfo />
    </div>
  );
};

export default App;
