import { useState, useEffect } from "react"
import ColorDisplay from "./ColorDisplay"
import "./ResponseDisplay.css"

const ResponseDisplay = ({ aiResponse, color }) => {
    const [ colorRecs, setColorRecs ] = useState([])
    
    function extractRecommendedColors(response) {
        const hexRegex = /#([A-Fa-f0-9]{6})/g
        const responseColors = response.match(hexRegex)
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
            extractRecommendedColors(aiResponse)
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