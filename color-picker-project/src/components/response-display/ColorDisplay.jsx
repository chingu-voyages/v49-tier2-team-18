

const ColorDisplay = ({ color, colorRecs }) => {

    return (
        <div className="color-palette-container">

            {
                color &&
                <div className="color-swatch-container">
                    <p className="swatch-label">Selected</p>
                    <div
                        className="color-swatch"
                        style={{backgroundColor: color}}
                    ></div>
                    <p>{color}</p>
                </div>
            }

            {
                colorRecs &&
                colorRecs.map((colorCode, index) => {
                    return (
                        <div 
                            className="color-swatch-container"
                            key={index}
                        >
                            <p className="swatch-label">Recommended</p>
                            <div
                                className="color-swatch"
                                style={{backgroundColor: colorCode}}
                            ></div>
                            <p>{colorCode}</p>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default ColorDisplay