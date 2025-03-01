// Chat Widget Script
(function () {
    // Create and inject styles
    const styles = `
        .n8n-chat-widget {
            --chat--color-primary: var(--n8n-chat-primary-color, #854fff);
            --chat--color-secondary: var(--n8n-chat-secondary-color, #6b3fd4);
            --chat--color-background: var(--n8n-chat-background-color, #ffffff);
            --chat--color-font: var(--n8n-chat-font-color, #333333);
            --chat--message-bg-user: linear-gradient(135deg, var(--chat--color-primary) 0%, var(--chat--color-secondary) 100%);
            --chat--message-bg-bot: var(--chat--color-background);
            font-family: 'Geist Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        .n8n-chat-widget .chat-container {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
            display: none;
            width: 90vw;
            max-width: 400px;
            height: 90vh;
            background: var(--chat--color-background);
            border-radius: 16px;
            box-shadow: 0 12px 48px rgba(255, 144, 79, 0.25);
            border: 1px solid rgba(255, 144, 79, 0.25);
            overflow: hidden;
            font-family: inherit;
        }

        .n8n-chat-widget .chat-container.position-left {
            right: auto;
            left: 20px;
        }

        .n8n-chat-widget .chat-container.open {
            display: flex;
            flex-direction: column;
        }

        .n8n-chat-widget .brand-header {
            padding: 16px;
            display: flex;
            align-items: center;
            gap: 12px;
            border-bottom: 1px solid rgba(133, 79, 255, 0.1);
            position: relative;
        }

        .n8n-chat-widget .close-button {
            position: absolute;
            right: 16px;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            color: var(--chat--color-font);
            cursor: pointer;
            padding: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: color 0.2s;
            font-size: 20px;
            opacity: 0.7;
        }

        .n8n-chat-widget .close-button:hover {
            opacity: 1;
        }

        .n8n-chat-widget .brand-header img {
            height: 32px;
            width: 72px;
        }

        .n8n-chat-widget .brand-header span {
            font-size: 18px;
            font-weight: 600;
            color: var(--chat--color-font);
        }

        .n8n-chat-widget .new-conversation {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 20px;
            text-align: center;
            width: 100%;
            max-width: 300px;
        }

        .n8n-chat-widget .welcome-text {
            font-size: 24px;
            font-weight: 700;
            color: var(--chat--color-font);
            margin-bottom: 24px;
            line-height: 1.4;
        }

        .n8n-chat-widget .new-chat-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            width: 100%;
            padding: 16px 24px;
            background: linear-gradient(135deg, var(--chat--color-primary) 0%, var(--chat--color-secondary) 100%);
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
            transition: transform 0.3s;
            font-weight: 600;
            font-family: inherit;
            margin-bottom: 12px;
        }

        .n8n-chat-widget .new-chat-btn:hover {
            transform: scale(1.02);
        }

        .n8n-chat-widget .message-icon {
            width: 20px;
            height: 20px;
        }

        .n8n-chat-widget .response-text {
            font-size: 14px;
            color: var(--chat--color-font);
            opacity: 0.7;
            margin: 0;
        }

        .n8n-chat-widget .chat-interface {
            display: none;
            flex-direction: column;
            height: 100%;
        }

        .n8n-chat-widget .chat-interface.active {
            display: flex;
        }

        .n8n-chat-widget .chat-messages {
            flex: 1;
            overflow-y: auto;
            padding: 16px;
            background: var(--chat--color-background);
            display: flex;
            flex-direction: column;
            scroll-behavior: smooth;
            -ms-overflow-style: none;
            scrollbar-width: none;
        }

        .n8n-chat-widget .chat-messages::-webkit-scrollbar {
            display: none;
        }

        .n8n-chat-widget .chat-message {
            padding: 12px 14px;
            margin: 8px 0;
            border-radius: 12px;
            max-width: 85%;
            word-wrap: break-word;
            font-size: 14px;
            line-height: 1.5;
        }

        .n8n-chat-widget .chat-message.user {
            background: var(--chat--message-bg-user);
            color: white;
            align-self: flex-end;
            border: none;
        }

        .n8n-chat-widget .chat-message.bot {
            background: var(--chat--message-bg-bot);
            border: 1px solid rgba(255, 144, 79, 0.2);
            color: var(--chat--color-font);
            align-self: flex-start;
        }

        .n8n-chat-widget .chat-input {
            padding: 12px;
            background: var(--chat--color-background);
            border-top: 1px solid rgba(133, 79, 255, 0.1);
            display: flex;
            align-items: center;
            position: relative; /* needed for positioning */
        }

        .n8n-chat-widget .chat-input textarea {
            flex: 1;
            padding: 10px;
            border: 1px solid rgba(255, 144, 79, 0.2);
            border-radius: 8px;
            background: var(--chat--color-background);
            color: var(--chat--color-font);
            resize: none;
            font-family: inherit;
            font-size: 14px;
            line-height: 1.4;
            height: 40px;
            overflow: hidden; /* Hide scrollbar */
            overflow-wrap: break-word;
            word-break: break-word;
            margin-right: 70px; /* Space for buttons */
        }

        .n8n-chat-widget .chat-input textarea::placeholder {
            color: var(--chat--color-font);
            opacity: 0.6;
        }

        /* Style for file and emoji and send buttons */
        .n8n-chat-widget .chat-input .action-buttons {
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            display: flex;
            align-items: center;
            gap: 4px;
        }

        .n8n-chat-widget .chat-input .action-button {
            background: none;
            border: none;
            color: var(--chat--color-font);
            cursor: pointer;
            padding: 4px;
            border-radius: 50%;
            transition: background-color 0.2s;
        }

        .n8n-chat-widget .chat-input .action-button:hover {
            background-color: rgba(255, 144, 79, 0.2);
        }

        .n8n-chat-widget .chat-input input[type="file"] {
            display: none; /* Hide the actual file input */
        }

        .n8n-chat-widget .chat-input label {
            cursor: pointer; /* Make label clickable */
        }

        .n8n-chat-widget .chat-input .image-preview {
            position: absolute;
            bottom: 45px; /* Position to the right of emoji button */
            left: 0;
            z-index: 1;
            transform: translateY(-50%);
            max-width: 50px;
            max-height: 50px;
            border-radius: 8px;
            overflow: hidden;
            display: none;
            pointer-events: none; /* Disable interaction with the image */
        }

        .n8n-chat-widget .chat-input .image-preview img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        /* Style for emoji picker */
        .n8n-chat-widget .chat-input .emoji-picker-container {
            position: absolute;
            top: auto;
            bottom: 45px;
            right: 50px;
            transform: translateX(-50%);
            z-index: 1001;
            background-color: var(--chat--color-background);
            border: 1px solid rgba(255, 144, 79, 0.2);
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(255, 144, 79, 0.2);
            display: none;
        }

        .n8n-chat-widget .chat-input .emoji-picker-container.open {
            display: block;
        }

        .n8n-chat-widget .chat-input .emoji-picker-container button {
            border: none;
            background: none;
            padding: 8px;
            font-size: 20px;
            cursor: pointer;
            transition: background-color 0.2s;
        }

        .n8n-chat-widget .chat-input .emoji-picker-container button:hover {
            background-color: rgba(133, 79, 255, 0.1);
        }

        .n8n-chat-widget .chat-input button {
            background: linear-gradient(135deg, var(--chat--color-primary) 0%, var(--chat--color-secondary) 100%);
            color: white;
            border: none;
            border-radius: 8px;
            padding: 8px 16px; /* Reduced padding */
            cursor: pointer;
            transition: transform 0.2s;
            font-family: inherit;
            font-weight: 600;
            font-size: 14px; /* Reduced font size */
            white-space: nowrap; /* Prevent text wrapping */
        }

        .n8n-chat-widget .chat-input button:hover {
            transform: scale(1.05);
        }

        .n8n-chat-widget .chat-toggle {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 120px;
            height: 50px;
            padding: 2px;
            border-radius: 20px;
            background: linear-gradient(135deg, var(--chat--color-primary) 0%, var(--chat--color-secondary) 100%);
            color: white;
            border: none;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(255, 144, 79, 0.15);
            z-index: 999;
            transition: transform 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .n8n-chat-widget .chat-toggle.position-left {
            right: auto;
            left: 20px;
        }

        .n8n-chat-widget .chat-toggle:hover {
            transform: scale(1.05);
        }

        .n8n-chat-widget .chat-toggle svg {
            width: 24px;
            height: 24px;
            fill: currentColor;
            padding-right: 3px;
        }

        .n8n-chat-widget .chat-footer {
            padding: 8px;
            text-align: center;
            background: var(--chat--color-background);
            border-top: 1px solid rgba(133, 79, 255, 0.1);
        }

        .n8n-chat-widget .chat-footer a {
            color: var(--chat--color-primary);
            text-decoration: none;
            font-size: 12px;
            opacity: 0.8;
            transition: opacity 0.2s;
            font-family: inherit;
        }

        .n8n-chat-widget .chat-footer a:hover {
            opacity: 1;
        }

        /* New rules for better aesthetics */
        .n8n-chat-widget .chat-input {
            border-radius: 10px; /* Rounded input */
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
        }
    `;

    // Load Geist font
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://cdn.jsdelivr.net/npm/geist@1.0.0/dist/fonts/geist-sans/style.css';
    document.head.appendChild(fontLink);

    // Inject styles
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);

    // Default configuration
    const defaultConfig = {
        webhook: {
            url: '',
            route: ''
        },
        branding: {
            logo: '',
            name: '',
            welcomeText: '',
            responseTimeText: '',
            poweredBy: {
                text: 'Powered by Teros AI',
                link: '/'
            }
        },
        style: {
            primaryColor: '',
            secondaryColor: '',
            position: 'right',
            backgroundColor: '#ffffff',
            fontColor: '#333333'
        }
    };
    window.ChatWidgetConfig = {
        webhook: {
            url: 'https://puresmoke.app.n8n.cloud/webhook/chat',
            route: 'chat'
        },
        branding: {
            logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg',
            name: 'Teros AI', // Your company name
            welcomeText: 'Hi 👋, how can we help?', //Welcome message
            responseTimeText: 'We typically respond right away' //Response time message
        },
        style: {
            primaryColor: '#FFA500', //Primary color
            secondaryColor: '#111', //Secondary color
            position: 'right', //Position of the widget (left or right)
            backgroundColor: '#000000', //Background color of the chat widget
            fontColor: '#cccccc' //Text color for messages and interface
        }
    };

    // Merge user config with defaults
    const config = window.ChatWidgetConfig ?
        {
            webhook: { ...defaultConfig.webhook, ...window.ChatWidgetConfig.webhook },
            branding: { ...defaultConfig.branding, ...window.ChatWidgetConfig.branding },
            style: { ...defaultConfig.style, ...window.ChatWidgetConfig.style }
        } : defaultConfig;

    // Prevent multiple initializations
    if (window.N8NChatWidgetInitialized) return;
    window.N8NChatWidgetInitialized = true;

    let currentSessionId = '';

    // Create widget container
    const widgetContainer = document.createElement('div');
    widgetContainer.className = 'n8n-chat-widget';

    // Set CSS variables for colors
    widgetContainer.style.setProperty('--n8n-chat-primary-color', config.style.primaryColor);
    widgetContainer.style.setProperty('--n8n-chat-secondary-color', config.style.secondaryColor);
    widgetContainer.style.setProperty('--n8n-chat-background-color', config.style.backgroundColor);
    widgetContainer.style.setProperty('--n8n-chat-font-color', config.style.fontColor);

    const chatContainer = document.createElement('div');
    chatContainer.className = `chat-container${config.style.position === 'left' ? ' position-left' : ''}`;

    const newConversationHTML = `
        <div class="brand-header">
            <img src="${config.branding.logo}" alt="${config.branding.name}">
            <span>${config.branding.name}</span>
            <button class="close-button">×</button>
        </div>
        <div class="new-conversation">
            <h2 class="welcome-text">${config.branding.welcomeText}</h2>
            <button class="new-chat-btn">
                <svg class="message-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.2L4 17.2V4h16v12z"/>
                </svg>
                Send us a message
            </button>
            <p class="response-text">${config.branding.responseTimeText}</p>
        </div>
    `;

    const chatInterfaceHTML = `
        <div class="chat-interface">
            <div class="brand-header">
                <img src="${config.branding.logo}" alt="${config.branding.name}">
                <span>${config.branding.name}</span>
                <button class="close-button">×</button>
            </div>
            <div class="chat-messages"></div>
            <div class="chat-input">
                <div class="input-actions">
                    
                    
                  </div>
                <textarea placeholder="Type your message here..." rows="1"></textarea>
                 <div class="action-buttons">
                 <div class="image-preview">
                 <img src="#" alt="Image preview" style="display:none;"/>
                </div>
                     <label for="file-upload" class="action-button">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                     </label>
                     <input type="file" id="file-upload" accept="image/*"/>
                     <button type="submit" class="action-button">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>
                     </button>
                     </div>
            </div>
            <div class="chat-footer">
                <a href="${config.branding.poweredBy.link}" target="_blank">${config.branding.poweredBy.text}</a>
            </div>
        </div>
    `;

    chatContainer.innerHTML = newConversationHTML + chatInterfaceHTML;

    const toggleButton = document.createElement('button');
    toggleButton.className = `chat-toggle${config.style.position === 'left' ? ' position-left' : ''}`;
    toggleButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.476 0-2.886-.313-4.156-.878l-3.156.586.586-3.156A7.962 7.962 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
        </svg>
        Ask Sam`;

    widgetContainer.appendChild(chatContainer);
    widgetContainer.appendChild(toggleButton);
    document.body.appendChild(widgetContainer);

    const newChatBtn = chatContainer.querySelector('.new-chat-btn');
    const chatInterface = chatContainer.querySelector('.chat-interface');
    const messagesContainer = chatContainer.querySelector('.chat-messages');
    const textarea = chatContainer.querySelector('textarea');
    const sendButton = chatContainer.querySelector('button[type="submit"]');
    const fileInput = chatContainer.querySelector('input[type="file"]');
    const imagePreview = chatContainer.querySelector('.chat-input .image-preview');
    const imagePreviewImg = chatContainer.querySelector('.chat-input .image-preview img');


    function generateUUID() {
        if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
            return crypto.randomUUID();
        } else {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                const r = Math.random() * 16 | 0,
                    v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }
    }

    async function startNewConversation() {
        currentSessionId = generateUUID();
        const data = [{
            action: "loadPreviousSession",
            sessionId: currentSessionId,
            route: config.webhook.route,
            metadata: {
                userId: ""
            }
        }];

        try {
            const response = await fetch(config.webhook.url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            const responseData = await response.json();
            chatContainer.querySelector('.brand-header').style.display = 'none';
            chatContainer.querySelector('.new-conversation').style.display = 'none';
            chatInterface.classList.add('active');

            const botMessageDiv = document.createElement('div');
            botMessageDiv.className = 'chat-message bot';
            const markdownText = Array.isArray(responseData) ? responseData[0].output : responseData.output;
            const htmlContent = marked.parse(markdownText); // Convert to HTML
            botMessageDiv.innerHTML = htmlContent;

            messagesContainer.appendChild(botMessageDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async function sendMessage(message, file = null) {
        const formData = new FormData();
        formData.append('action', 'sendMessage');
        formData.append('sessionId', currentSessionId);
        formData.append('route', config.webhook.route);
        formData.append('chatInput', message);
        formData.append('metadata', JSON.stringify({ userId: "" })); // Stringify metadata

        if (file) {
            formData.append('file', file);
        }

        const userMessageDiv = document.createElement('div');
        userMessageDiv.className = 'chat-message user';
        userMessageDiv.textContent = message;
        if (file) {
            const userImageDiv = document.createElement('img');
            userImageDiv.src = URL.createObjectURL(file)
            userMessageDiv.textContent = null;
            userMessageDiv.appendChild(userImageDiv)
        }
        messagesContainer.appendChild(userMessageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        try {
            const response = await fetch(config.webhook.url, {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            const botMessageDiv = document.createElement('div');
            botMessageDiv.className = 'chat-message bot';
            botMessageDiv.innerHTML = marked.parse(Array.isArray(data) ? data[0].output : data.output); // Use Marked to parse Markdown

            messagesContainer.appendChild(botMessageDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        } catch (error) {
            console.error('Error:', error);
        }
    }

    newChatBtn.addEventListener('click', startNewConversation);

    sendButton.addEventListener('click', () => {
        const message = textarea.value.trim();
        const file = fileInput.files[0];

        if (message || file) {
            sendMessage(message, file);
            textarea.value = '';
            fileInput.value = '';
            imagePreviewImg.style.display = 'none';
            URL.revokeObjectURL(imagePreviewImg.src);
        }
    });

    textarea.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            const message = textarea.value.trim();
            const file = fileInput.files[0];
            if (message || file) {
                sendMessage(message, file);
                textarea.value = '';
                fileInput.value = '';
                imagePreviewImg.style.display = 'none';
                URL.revokeObjectURL(imagePreviewImg.src);
            }
        }
    });

    toggleButton.addEventListener('click', () => {
        chatContainer.classList.toggle('open');
    });

    const closeButtons = chatContainer.querySelectorAll('.close-button');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            chatContainer.classList.remove('open');
        });
    });

    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];

        if (file && file.type.startsWith('image/')) {
            imagePreviewImg.src = URL.createObjectURL(file);
            imagePreviewImg.style.display = 'block';
            imagePreview.style.display = 'block';

        } else {
            fileInput.value = '';
            imagePreviewImg.style.display = 'none';
            imagePreview.style.display = 'none';
        }
    });
})();