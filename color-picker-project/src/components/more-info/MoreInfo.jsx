import "./MoreInfo.css"

const MoreInfo = () => {

    return (
        <section className="more-info-section">

            <h2>More Information</h2>

            <div className="info-container">

                <h3>How to Use PalettePro</h3>

                <p>First, you'll need a starting color. This will be the color that PalettePro bases its recommendation on. You can use the color wheel to select a color, or if you know the exact color code that you're looking for (in hex, rgb, or hsl, format) you can simply input that into the appropriate field to select your color. </p>

                <p>Next, we'll need a little more information about how you'll be using the selected color. You can provide that information on the Color Details form. The only required fields are the first two question on the form, which ask what you're using the selected color for and which color code format you'd like your recommendations in (hex, rgb, or hsl). Select your choices from the dropdown menus. For the first question, if your use case is not on the list select "other." You'll have the opportunity to provide more information later!</p>

                <p>For the optional fields you can select how many recommended colors you'd like (from 1-5), a specific color scheme, or a specific mood or emotion. These will be factored into the recommendation to help you get the best result possible, but you can also leave these fields blank if they aren't relevant. The default number of recommended colors is 1.</p>

                <p>The last form field is open-ended. If there's anything else that will help to refine our recommendation and give you the best possible results, feel free to add that information here. Then hit the "submit" button and within a few moments you'll get a customized color recommendation!</p>
            </div>

            <div className="info-container">

                <h3>About Color Codes</h3>

                <p><span className="bold-span">RGB</span> and <span className="bold-span">hexadecimal</span> (or <span className="bold-span">hex</span>) color codes both contain relative values for red, green, and blue. Values for each of these three base colors range from 0-255 in the RGB system, and 00-FF in the hex system. RGB colors are formatted as rgb(RR, GG, BB), while hex colors are formatted as #RRGGBB. Black is represented by rgb(0, 0, 0) or #000000 (with #000 as a shorthand). White is represented by rgb(255, 255, 255) or #FFFFFF (with #FFF as a shorthand). Shades of gray contain equal values for all three base colors in both systems. For example, rgb(60, 60, 60) is equivalent to #3c3c3c.</p>

                <p><span className="bold-span">HSV</span> and <span className="bold-span">HSL</span> color codes are both based around conic models, with hue corresponding to the color wheel with values ranging from 0-360 degrees. In HSV, saturation and value (or brightness) are both represented as percentages. 0% saturation is white, with the value/brightness representing darker colors at lower percentages and more pure colors at higher percentages. HSL measures saturation and lightness as percentages, but these are expressed differently compared with HSV. In HSL 0% saturation represents a middle gray, with lightness ranging from 0% (black) to 100% (white). A more in-depth explanation of HSV and HSL color models can be found <a href="https://www.tobiamontanari.com/hsl-and-hsv-explained-which-color-model-should-you-use/" target="_blank" >HERE</a>.</p>

                <p>Finally, an <span className="bold-span">alpha</span> value representing transparency is sometimes used with color codes. Alpha is expressed from 0.0 (completely transparent) through 1.0 (completely opaque).
                </p>
            </div>

            <div className="info-container">

                <h3>About AI Color Recommendations</h3>

                <p>PalettePro uses Artificial Intelligence (AI) to recommend the perfect color combinations for your use cases. It is powered by Groq's Language Processing Unit (LPU) Inference Engine, which offers industry-leading compute speed, quality, and energy efficiency. The specific Large Language Model (LLM) utilized by PalettePro is Meta's <span className="llm-span">llama3-8b-8192</span>.</p>

                <p>You can learn more about Groq <a href="https://wow.groq.com/why-groq/" target="_blank" >HERE</a>.</p>

                <p>You can learn more about Meta's llama3-8b LLM <a href="https://huggingface.co/meta-llama/Meta-Llama-3-8B-Instruct" target="_blank" >HERE</a>.</p>
            </div>

        </section>
    )
}

export default MoreInfo