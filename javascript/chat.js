document.addEventListener('DOMContentLoaded', function () {
    const newChatButton = document.getElementById('newChatButton');
    const conversations = document.querySelectorAll('.conversation');
    const chatInput = document.getElementById('chatInput');
    const sendButton = document.getElementById('sendButton');
    const chatMessages = document.querySelector('.chat-messages');

    // Adicionar nova conversa
    newChatButton.addEventListener('click', function () {
        const newConversation = document.createElement('div');
        newConversation.className = 'conversation';
        newConversation.innerHTML = `
            <span>Nova Conversa</span>
            <button class="delete-conversation">🗑️</button>
        `;
        document.querySelector('.conversations').appendChild(newConversation);
        addConversationListeners(newConversation);
    });

    // Selecionar conversa
    conversations.forEach(conversation => {
        addConversationListeners(conversation);
    });

    // Enviar mensagem
    sendButton.addEventListener('click', function () {
        const messageText = chatInput.value.trim();
        if (messageText) {
            const messageElement = document.createElement('div');
            messageElement.className = 'message sent';
            messageElement.innerHTML = `<p>${messageText}</p>`;
            chatMessages.appendChild(messageElement);
            chatInput.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    });

    // Função para adicionar listeners às conversas
    function addConversationListeners(conversation) {
        conversation.addEventListener('click', function () {
            document.querySelectorAll('.conversation').forEach(c => c.classList.remove('active'));
            conversation.classList.add('active');
            document.querySelector('.chat-header h2').textContent = conversation.querySelector('span').textContent;
        });

        conversation.querySelector('.delete-conversation').addEventListener('click', function (e) {
            e.stopPropagation();
            conversation.remove();
        });
    }
});