import { useState } from "react"
import "./PromptForm.css"

const PromptForm = ({ color }) => {
    const [ contextValue, setContextValue ] = useState("")
    const [ moodValue, setMoodValue ] = useState("")
    const [ miscInfoValue, setMiscInfoValue ] = useState("")

    const contextOptions = [
        "web design",
        "graphic design",
        "fashion",
        "interior decorating",
        "art",
        "other"
    ]

    // if "other" selected set system context as a more generic assistant.

    function handleContextChange(event) {
        setContextValue(event.target.value)
    }    

    function handleMoodChange(event) {
        setMoodValue(event.target.value)
    }

    function handleMiscInfoChange(event) {
        setMiscInfoValue(event.target.value)
    }

    function handleFormSubmit(event) {
        event.preventDefault()
        // TO DO
            // Generate AI prompt from input values
        
        console.log(contextValue)
        console.log(moodValue)
        console.log(miscInfoValue)
    }
            

    return (
        <form className="prompt-form">

            <div className="header-container">
                <h2>Color Details</h2>
                <p className="form-subheading">Have you selected a color? Great! Now provide us with a little more information that will help us make a recommendation that's customized to your needs.</p>
            </div>
            

            <div className="input-container">
                <label
                    htmlFor="context-dropdown"
                >What are you using your selected color for?</label>
                <select
                    id="context-dropdown"
                    name="context-dropdown"
                    onChange={handleContextChange}
                    required
                >
                    <option
                        value=""
                    >Select an option from the list</option>
                    {
                        contextOptions.map(option => {
                            return (
                                <option
                                    value={option}
                                    key={option}
                                >{option}</option>
                            )
                        })
                    }
                </select>
            </div>

            <div className="input-container">
                <label
                    htmlFor="mood-input"
                >If you are trying to evoke a specific mood or emotion, add it here.</label>
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
                <label
                    htmlFor="misc-info"
                >Is there anything else we should know before making a recommendation?</label>
                <textarea
                    id="misc-info"
                    name="misc-info"
                    placeholder="Type any additional information here (300 characters or less)"
                    maxLength="300"
                    value={miscInfoValue}
                    onChange={handleMiscInfoChange}
                ></textarea>
            </div>
        
            <button
                className="submit-btn"
                onClick={handleFormSubmit}
            >Submit</button>
        </form>
    )
}

export default PromptForm