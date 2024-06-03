import { useState } from "react";
import "./PromptForm.css";

const PromptForm = ({ color }) => {
  // FROM PROJECT SPECS:

  // Incorporate a mechanism to prompt users for the context in which they intend to use the selected color. Include this context information in the prompt sent to the GroqAI API for more tailored color recommendations.

  // When sending color data to the GroqAI API, include it in the prompt along with a request for color recommendations. Ensure it also requests color codes with their respective names for the recommended colors. Example prompt:
  // "Suggest color recommendations based on the [selected color] and [context]"
  // "Color recomemmendations [selected color][context], provide color codes and explanation"
  // "Suggest compatible colors based on the [selected color] and [context]. Display color codes and descriptions"

  // character limits for text boxes!  Don't want to use too many tokens.

  // INPUTS NEEDED

  // color (saved as selectedColor state in higher level component and passed as prop into PromptForm)
  // colorCodeType state?  (hex, hsl, rgb)
  // Add in prompt to make recommendations using same color code type;
  // include names of the color represented by the code.
  //INPUT IN THIS FORM NOT NEEDED but we'll probably use the state values in the handleSubmit function

  // What are you doing with this color (context)?
  // broad dropdown categories?
  // web/graphic design
  // fashion
  // interior decorating
  // art
  // other (triggers prompt to contain more generic text)

  // Are you trying to evoke a specific mood or emotion?
  // if true, display input that allows user to specify (limit 50 characters?)

  // Anything else we should know before making a recommendation? (limit 300 characters?)

  // STRETCH GOAL - Do you need recommendations that include multiple colors?
  // How many (1-5)? Use dropdown.
  // Do you need a specific color scheme?
  // dropdown options: monochromatic, complementary, analogous, triadic, tetradic

  // STRETCH GOAL - how do you want your recommendations displayed?
  // palette, text on background, boxes on background, patterns?

  // STRETCH GOAL - Do you want some information about the selected color?

  function handleFormSubmit(event) {
    event.preventDefault();
    // TO DO
    // Generate AI prompt from input values
    console.log("button clicked");
  }
  const [contextValue, setContextValue] = useState("");
  const [moodValue, setMoodValue] = useState("");
  const [miscInfoValue, setMiscInfoValue] = useState("");

  const contextOptions = [
    "web design",
    "graphic design",
    "fashion",
    "interior decorating",
    "art",
    "other",
  ];

  // if "other" selected set system context as a more generic assistant.

  function handleContextChange(event) {
    setContextValue(event.target.value);
  }

  function handleMoodChange(event) {
    setMoodValue(event.target.value);
  }

  function handleMiscInfoChange(event) {
    setMiscInfoValue(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    // TO DO
    // Generate AI prompt from input values

    console.log(contextValue);
    console.log(moodValue);
    console.log(miscInfoValue);
  }

  return (
    <form>
      <div className="input-container">
        <label htmlFor="context-dropdown">
          What are you using this color for?
        </label>
        <select
          id="context-dropdown"
          name="context-dropdown"
          onChange={handleContextChange}
          required
        >
          {contextOptions.map((option) => {
            return (
              <option value={option} key={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>

      <div className="input-container">
        <label htmlFor="mood-input">
          Are you trying to evoke a specific mood or emotion?
        </label>
        <input
          id="mood-input"
          name="mood-input"
          type="text"
          placeholder="Type a mood or emotion (50 characters or less)"
          maxLength="50"
          value={moodValue}
          onChange={handleMoodChange}
        ></input>
      </div>

      <div className="input-container">
        <label htmlFor="misc-info">
          Anything else we should know before making a recommendation?
        </label>
        <textarea
          id="misc-info"
          name="misc-info"
          placeholder="Type any additional information here (300 characters or less)"
          maxLength="300"
          value={miscInfoValue}
          onChange={handleMiscInfoChange}
        ></textarea>
      </div>

      <button className="" onClick={handleFormSubmit}>
        Submit
      </button>
    </form>
  );
};
export default PromptForm;
