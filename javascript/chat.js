// chat.js

function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();

    if (message !== "") {
        // Exibir a mensagem do usuário
        displayMessage(message, 'user');

        // Limpar o campo de entrada
        input.value = '';

        // Simular uma resposta do bot (opcional)
        setTimeout(() => {
            displayMessage("Esta é uma resposta do bot.", 'bot');
        }, 1000);
    }
}

function displayMessage(message, sender) {
    const chatContainer = document.getElementById('chat-container');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatContainer.appendChild(messageElement);

    // Rolagem automática para a última mensagem
    chatContainer.scrollTop = chatContainer.scrollHeight;
}