import { useState } from "react"
import "./PromptForm.css"
import { getGroqChatCompletion } from "../../lib/groq-api"

const PromptForm = ({ 
    setAiResponse, 
    colorCodeFormat, 
    setColorCodeFormat, 
    color 

}) => {
    const [ contextValue, setContextValue ] = useState("")
    const [ numOfColors, setNumOfColors ] = useState(1)
    const [ colorSchemeValue, setColorSchemeValue ] = useState("")
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

    const formatOptions = [
        "hex",
        "rgb",
        "hsl"
    ]

    const colorSchemes = [
        "monochromatic",
        "complementary",
        "analogous",
        "triadic",
        "tetradic"
    ]

    function handleFieldChange(event, stateSetter) {
        stateSetter(event.target.value)
    }

    function handleNumberInputChange(event) {
        if (event.target.value > 5) {
            event.target.value = 5
        }
        setNumOfColors(event.target.value)
    }

    async function handleFormSubmit(event) {
        event.preventDefault()

        try {
            if (contextValue && colorCodeFormat) {
                const groqResponse = await getGroqChatCompletion(color, contextValue, colorCodeFormat, numOfColors, colorSchemeValue, moodValue, miscInfoValue)
    
                setAiResponse(groqResponse)
            }
        } catch (error) {
            console.error("error fetching data:", error)
        }
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
                    onChange={(event) => handleFieldChange(event, setContextValue)}
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
                    htmlFor="format-dropdown"
                >What format would you like your recommended color(s) in?</label>
                <select
                    id="format-dropdown"
                    name="format-dropdown"
                    onChange={(event) => handleFieldChange(event, setColorCodeFormat)}
                    required
                >
                    <option
                        value=""
                    >Select an option from the list</option>
                    {
                        formatOptions.map(option => {
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
                    htmlFor="num-colors-input"
                >How many recommended colors do you need (up to 5)?</label>
                <input
                    id="num-colors-input"
                    name="num-colors-input"
                    type="number"
                    min="1"
                    max="5"
                    placeholder={1}
                    value={numOfColors}
                    onChange={(event) => handleNumberInputChange(event)}
                ></input>
            </div>

            <div className="input-container">
                <label
                    htmlFor="color-scheme-input"
                >Are you looking for a particular color scheme?</label>
                <select
                    id="color-scheme-input"
                    name="color-scheme-input"
                    onChange={(event) => handleFieldChange(event, setColorSchemeValue)}
                >
                    <option
                        value=""
                    >Select an option from the list</option>
                    {
                        colorSchemes.map(option => {
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
                    onChange={(event) => handleFieldChange(event, setMoodValue)}
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
                    onChange={(event) => handleFieldChange(event, setMiscInfoValue)}
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
