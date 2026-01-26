const messages = [
    { text: "Ayubowan! 🙏 I am Dr. Deepani.", delay: 800 },
    { text: "How can I help you today?", delay: 1800 },
];

const chatContainer = document.getElementById('chat-messages');

function createMessage(text, isUser = false) {
    const div = document.createElement('div');
    div.className = `flex w-full ${isUser ? 'justify-end' : 'justify-start'} message-enter`;

    div.innerHTML = `
        <div class="max-w-[75%] rounded-2xl px-4 py-2.5 shadow-sm text-sm ${isUser
            ? 'bg-cyan-600 text-white rounded-br-sm'
            : 'bg-white text-dark rounded-bl-sm border border-slate-100'
        }">
            ${text}
            <div class="text-[9px] opacity-60 text-right mt-1">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
        </div>
    `;
    return div;
}

function createTypingIndicator() {
    const div = document.createElement('div');
    div.className = 'flex w-full justify-start message-enter typing-indicator-container';
    div.innerHTML = `
        <div class="bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm border border-slate-100 flex gap-1">
            <div class="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></div>
            <div class="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></div>
            <div class="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></div>
        </div>
    `;
    return div;
}

async function runChat() {
    for (const msg of messages) {
        // Show typing
        const typing = createTypingIndicator();
        chatContainer.appendChild(typing);
        chatContainer.scrollTop = chatContainer.scrollHeight;

        // Wait
        await new Promise(r => setTimeout(r, 800)); // Typing time

        // Remove typing and add message
        typing.remove();
        chatContainer.appendChild(createMessage(msg.text));
        chatContainer.scrollTop = chatContainer.scrollHeight;

        // Wait for next message delay
        await new Promise(r => setTimeout(r, msg.delay - 800));
    }
}

// Start chat sequence
runChat();

// Interaction Logic
const fakeInput = document.getElementById('fake-input');
fakeInput.addEventListener('click', () => {
    // 1. User "sends" a message
    const userMsg = createMessage("I need a consultation.", true);
    chatContainer.appendChild(userMsg);
    chatContainer.scrollTop = chatContainer.scrollHeight;

    // 2. Redirect to WhatsApp after short delay
    setTimeout(() => {
        window.location.href = "https://wa.me/94700000000?text=Hi Dr. Deepani, I would like to schedule a consultation.";
    }, 1000);
});
