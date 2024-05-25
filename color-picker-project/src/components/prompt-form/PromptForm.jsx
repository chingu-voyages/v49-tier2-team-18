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
        <form>

            <div className="input-container">
                <label
                    htmlFor="context-dropdown"
                >What are you using this color for?</label>
                <select
                    id="context-dropdown"
                    name="context-dropdown"
                    onChange={handleContextChange}
                    required
                >
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
                >Are you trying to evoke a specific mood or emotion?</label>
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
                >Anything else we should know before making a recommendation?</label>
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
                className=""
                onClick={handleFormSubmit}
            >Submit</button>
        </form>
    )
}

export default PromptForm