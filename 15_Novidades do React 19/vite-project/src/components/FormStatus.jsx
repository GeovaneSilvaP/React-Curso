import SubmitBotao from "./SubmitBotao";

const FormStatus = () => {
  async function formAction(FormData) {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert("E-mail recebido: " + FormData.get("email"));
  }

  return (
    <form action={formAction}>
      <input type="email" name="email" placeholder="Digite um e-mail..." />
      <SubmitBotao />
    </form>
  );
};

export default FormStatus;
