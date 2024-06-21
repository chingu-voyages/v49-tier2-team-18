
async function getGroqChatCompletion(
    color,
    context,
    format,
    number,
    colorScheme,
    mood,
    miscInfo
) {
    try {
        const response = await fetch("/api/getGroqChatCompletion", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                color,
                context,
                format,
                number,
                colorScheme,
                mood,
                miscInfo
            })
        })
    
        if (!response.ok) {
            throw new Error("there was a problem connecting to Groq. Please try again later.")
        }
    
        const data = await response.json()
        return data.message

    } catch(error) {
        console.error(error)
        throw new Error(error)
    }    
}

export {
    getGroqChatCompletion
}
