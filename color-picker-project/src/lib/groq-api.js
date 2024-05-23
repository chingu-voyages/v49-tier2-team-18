// EXPOSED FOR TESTING, WILL NEED TO MAKE IT SECURE W/ NETFLIFY FUNCTIONS OR SIMILAR
const apiKey = "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"


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
    ]
};

// if successful try with llama3-8b-8192

// will eventually need to take parameters for request body, etc.
async function getGroqChatCompletion() {
    try {
        const response = await fetch("https://api.groq.com/v1/models/llama3-70b/generate", {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        })
        const data = await response.json()
        console.log(data)
    }
    catch(error) {
        console.error(error)
    }

    
}




// Chat Completion example from Groq docs

// async function main() {
//     const chatCompletion = await getGroqChatCompletion()
//     // Print the completion returned by the LLM
//     process.stdout.write(chatCompletion.choices[0]?.message?.content || "")
// }

// async function getGroqChatCompletion() {
//     return groq.chat.completions.create({
//         messages: [
//             {
//                 role: "system",
//                 content: "You are a helpful assistant specializing in recommending harmonious color combinations for various purposes.  For example, outfit coordination, interior design, website design, graphic design projects, etc."
//             },
//             {
//                 role: "user",
//                 content: "What kind of outfit would look good with red shoes?  For example, what color shirt and pants."
//             }
//         ],
//         model: "llama3-8b-8192"
//     })
// }

export {
    getGroqChatCompletion
}