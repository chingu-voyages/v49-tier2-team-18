

import "./ResponseDisplay.css"

const ResponseDisplay = ({ aiResponse }) => {

    return (
        <div className="response-container">
            {aiResponse}
        </div>
    )
}

export default ResponseDisplay