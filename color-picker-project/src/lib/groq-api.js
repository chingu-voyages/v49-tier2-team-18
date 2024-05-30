

// API KEY PLACEHOLDER
    // Manually paste API key when testing locally, delete before committing/pushing.
const apiKey = ""


async function getGroqChatCompletion(color, context, mood, miscInfo) {
    const systemSpecialization = context === "other" 
        ? `who recommends harmonious color combinations for various purposes` 
        : `who specializes in making harmonious color recommendations for ${context}`

    const systemContent = `You are an enthusiastic assistant ${systemSpecialization}. You will be given a specific color in hexadecimal, RGB, or HSL format. You may also be given a specific mood or emotion that the user is trying to evoke, and you may be given additional information that the user wants you to take into account. Your main job is to recommend another color that works well with the color provided by the user. You should take all information provided by the user into consideration.`

    const userMood = mood 
        ? `I'm trying to evoke the following emotion: ${mood}.` 
        : "" 

    const userMiscInfo = miscInfo
        ? `Here is some additional information: ${miscInfo}.`
        : ""

    const userContent = `Please recommend a color that works well with ${color}. ${userMood} ${userMiscInfo} Provide the code of the recommended color in the same format as the provided color, and a brief explanation about your recommendation.`

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