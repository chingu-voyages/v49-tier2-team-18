
async function getGroqChatCompletion(
    color,
    context,
    format,
    number,
    colorScheme,
    mood,
    miscInfo
) {
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
        throw new Error("Network response was not ok")
    }

    const data = await response.json()
    return data.message
}

export {
    getGroqChatCompletion
}
