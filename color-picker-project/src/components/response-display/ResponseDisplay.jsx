import { useState, useEffect } from "react"
import ColorDisplay from "./ColorDisplay"
import "./ResponseDisplay.css"

const ResponseDisplay = ({ 
    aiResponse, 
    colorCodeFormat, 
    color, 
    hasError, 
    errorDisplay 
}) => {
    const [ colorRecs, setColorRecs ] = useState([])
    const [ colorCodeRegex, setColorCodeRegex ] = useState(/#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/g)
    
    const hexRegex = /#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/g
    const rgbRegex = /(rgba?|RGBA?):?\(?\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(0|0?\.\d+|1(\.0)?)\s*)?\)?/g
    const hslRegex = /(hsla?|HSLA?):?\(?\s*(\d{1,3})\s*,\s*(\d{1,2}(\.\d+)?%|100%)\s*,\s*(\d{1,2}(\.\d+)?%|100%)\s*(?:,\s*(0|0?\.\d+|1(\.0)?)\s*)?\)?/g
    

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
        if (colorCodeFormat === "hsl") {
            setColorCodeRegex(hslRegex)
        } else if (colorCodeFormat === "rgb") {
            setColorCodeRegex(rgbRegex)
        } else {
            setColorCodeRegex(hexRegex)
        }
    }, [colorCodeFormat])

    useEffect(() => {
        if (aiResponse) {
            extractRecommendedColors(aiResponse, colorCodeRegex)
        }
    }, [aiResponse])

    return (
        <div className="response-container">

            {
                hasError &&
                <p className="error-display">{errorDisplay}</p>

            }    

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