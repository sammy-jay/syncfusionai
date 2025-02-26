(function () {
    // Create a new ElevenLabs element
    const convaiElement = document.createElement('elevenlabs-convai');
    convaiElement.setAttribute('agent-id', 'ExtaHoLem098HHLZAoQ6');

    // Create a new script element
    const convaiScript = document.createElement('script');
    convaiScript.src = 'https://elevenlabs.io/convai-widget/index.js';
    convaiScript.async = true;
    convaiScript.type = 'text/javascript';

    // Append the ElevenLabs element and the script element to the body
    document.body.appendChild(convaiElement);
    document.body.appendChild(convaiScript);
})()
