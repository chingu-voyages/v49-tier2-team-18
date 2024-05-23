

// API KEY PLACEHOLDER
    // Manually paste API key when testing locally, delete before committing/pushing.
const apiKey = ""


const requestBody = {
    "messages": [
        {
            role: "system",
            content: "You are a helpful assistant specializing in recommending harmonious color combinations for various purposes.  For example, outfit coordination, interior design, website design, graphic design projects, etc."
        },
        {
            role: "user",
            content: "What kind of outfit would look good with red shoes?  For example, what color shirt and pants."
        }
    ],
    "model": "llama3-8b-8192"
}

// will eventually need to take parameters for request body, etc.
async function getGroqChatCompletion() {
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
        console.log(data.choices[0].message.content)
    }
    catch(error) {
        console.error(error)
    } 
}

export {
    getGroqChatCompletion
}