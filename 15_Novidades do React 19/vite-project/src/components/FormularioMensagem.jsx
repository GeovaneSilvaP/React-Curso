import { useOptimistic } from "react";

const FormularioMensagem = ({ messages, sendMessage }) => {
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      ...state,
      { text: newMessage, sending: true }
    ]
  );

  const formAction = async (formData) => {
    const text = formData.get("message");

    // adiciona versão otimista
    addOptimisticMessage(text);

    // envia mensagem real
    await sendMessage(text);
  };

  return (
    <>
      {optimisticMessages.map((msg, index) => (
        <div key={index}>
          {msg.text} {msg.sending && <small>(Enviando...)</small>}
        </div>
      ))}

      <form action={formAction}>
        <input type="text" name="message" placeholder="Digite algo..." />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default FormularioMensagem;
