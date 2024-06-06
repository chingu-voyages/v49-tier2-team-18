import { useState } from "react"
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import PromptForm from "./components/prompt-form/PromptForm"
import ResponseDisplay from "./components/response-display/ResponseDisplay"


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
      <ResponseDisplay 
        aiResponse={aiResponse}
      />
    </div>
  );
};

export default App;
