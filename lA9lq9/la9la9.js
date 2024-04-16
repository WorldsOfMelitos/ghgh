require('dotenv').config();
const axios = require('axios');

const apiKey = process.env.OPENAI_API_KEY;
const baseURL = 'https://api.openai.com/v1/chat/completions';

async function queryChatGPT(message) {
    try {
        const response = await axios.post(
            baseURL,
            {
                model: "gpt-4", // You can specify the model version here.
                messages: [{
                    role: "user",
                    content: message
                }]
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                }
            }
        );

        // Output the response from ChatGPT
        console.log("ChatGPT says:", response.data.choices[0].message.content);
    } catch (error) {
        console.error("Error communicating with OpenAI:", error.response.data);
    }
}

// Example usage
queryChatGPT("Hello, who are you?");
