import { useFormStatus } from "react-dom";

const SubmitBotao = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Enviando..." : "Enviar"}
    </button>
  );
};

export default SubmitBotao;
