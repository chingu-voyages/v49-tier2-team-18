import { useState, useEffect } from "react"
import ColorDisplay from "./ColorDisplay"
import "./ResponseDisplay.css"

const ResponseDisplay = ({ aiResponse, colorCodeFormat, color }) => {
    const [ colorRecs, setColorRecs ] = useState([])
    
    const hexRegex = /#([A-Fa-f0-9]{6})/g


    // Refactor this to ADD selected color if it's NOT present in the response?
    function extractRecommendedColors(response, colorRegex) {
        const responseColors = response.match(colorRegex)
        const filteredColors = responseColors.filter(colorCode => {
            return colorCode !== color
        })
        const colorRecsSet = [ ...new Set(filteredColors) ]

        setColorRecs(colorRecsSet)
    }

    function formatResponseText(response) {
        return response.split("\n").map((line, index) => {
            if (line === "" ) {
                return <br key={index} />
            } else {
                return (
                    <p key={index}>{line}</p>
                )
            }
        })
    }

    useEffect(() => {
        if (aiResponse) {
            extractRecommendedColors(aiResponse, hexRegex)
        }
    }, [aiResponse])

    return (
        <div className="response-container">
            {
                !aiResponse &&
                <p>Select a color, fill out the color details, and check back here for your personalized recommendation!</p>
            }

            {
                aiResponse &&
                <h3 className="response-header">Your Personalized Color Recommendation:</h3>
            }

            {
                aiResponse &&
                formatResponseText(aiResponse)
            }

            {
                color &&
                <ColorDisplay 
                    color={color}
                    colorRecs={colorRecs}
                />
            }
        </div>
    )
}

export default ResponseDisplay