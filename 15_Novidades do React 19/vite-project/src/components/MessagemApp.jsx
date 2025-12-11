import { useState } from "react";
import FormularioMensagem from "./FormularioMensagem";

const MessagemApp = () => {
  const [messages, setMessages] = useState([
    { text: "Oi, sou a primeira mensagem", sending: false }
  ]);

  async function deliverMessage(messageText) {
    // simula envio ao servidor
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return messageText;
  }

  async function sendMessage(text) {
    const finalText = await deliverMessage(text);

    // adiciona mensagem final (não otimista)
    setMessages((prev) => [
      ...prev,
      { text: finalText, sending: false }
    ]);
  }

  return (
    <FormularioMensagem 
      messages={messages}
      sendMessage={sendMessage}
    />
  );
};

export default MessagemApp;
