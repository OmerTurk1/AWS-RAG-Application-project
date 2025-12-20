const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatWindow = document.getElementById('chat-window');

const LAMBDA_URL = "https://c2ajg7zdv2qepvle7j4zjadrji0dhrhv.lambda-url.us-east-1.on.aws/"; // API key to the lambda function

async function sendMessage() {
    const text = userInput.value.trim();
    if (!text) return;

    // 1. Print user message to screen
    addMessageToChat('user', text);
    userInput.value = '';

    try {
        // 2. Send request to Lambda
        const response = await fetch(LAMBDA_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ question: text })
        });

        const data = await response.json();

        // 3. Print the chatbot's answer to screen
        if (data.answer) {
            addMessageToChat('bot', data.answer);
        } else {
            addMessageToChat('bot', "Error: " + (data.error || "Unknown error"));
        }
    } catch (err) {
        addMessageToChat('bot', "Connection failed: " + err.message);
    }
}

function addMessageToChat(role, text) {
    const div = document.createElement('div');
    div.className = `message ${role}`;
    div.innerText = text;
    chatWindow.appendChild(div);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Go down in page
}

sendBtn.addEventListener('click', sendMessage);

userInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendMessage(); });
