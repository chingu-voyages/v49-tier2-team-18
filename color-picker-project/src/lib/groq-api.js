

// API KEY PLACEHOLDER
    // Manually paste API key when testing locally, delete before committing/pushing.
const apiKey = "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"


async function getGroqChatCompletion(
    color, 
    context, 
    format, 
    number, 
    colorScheme, 
    mood, 
    miscInfo
) {

    const systemSpecialization = context === "other" 
        ? `who recommends harmonious color combinations for various purposes` 
        : `who specializes in making harmonious color recommendations for ${context}`

    const systemContent = `You are an enthusiastic assistant ${systemSpecialization}. You will be given a specific color in hexadecimal, rgb, or hsl format. You may also be given additional information that the user wants you to take into account. Your main job is to recommend colors that work well with the color provided by the user. You should take all information provided by the user into consideration. For hsl codes, always include the "%" symbol after the numeric value for saturation and lightness. Do not use the optional alpha values in your color codes for the recommended color, even if the supplied color has an alpha value.`

    const userNumber = number === 1
        ? `${number} color that works well`
        : `${number} colors that work well`

    const userColorScheme = colorScheme
        ? `I'd like the recommended colors to fit within a ${colorScheme} color scheme, along with provided color: ${color}.`
        : ""

    const userMood = mood 
        ? `I'm trying to evoke the following emotion: ${mood}.` 
        : "" 

    const userMiscInfo = miscInfo
        ? `Here is some additional information: ${miscInfo}.`
        : ""

    const userContent = `Please recommend ${userNumber} with ${color}. ${userColorScheme} ${userMood} Your color recommendations should always be stated using ${format} color codes, in addition to any other type of color code requested. Provide a brief explanation about your recommendation. ${userMiscInfo}`

    const requestBody = {
        "messages": [
            {
                role: "system",
                content: systemContent
            },
            {
                role: "user",
                content: userContent
            }
        ],
        "model": "llama3-8b-8192"
    }

    try {
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        })
        const data = await response.json()
        return data.choices[0].message.content
    }
    catch(error) {
        console.error(error)
    } 
}

export {
    getGroqChatCompletion
}