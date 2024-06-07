

import "./ResponseDisplay.css"

const ResponseDisplay = ({ aiResponse }) => {

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
        </div>
    )
}

export default ResponseDisplay