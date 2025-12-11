import { useFormState } from "react-dom";

const EstadoDoFormulario = () => {
  const validarUsuario = (prevState, dadosDoFormulario) => {
    const nome = dadosDoFormulario.get("nomeDoUsuario");

    if (nome === "Geovane") {
      console.log(nome);

      return {
        success: true,
        text: "Bem-vindo Geovane",
      };
    } else {
      return {
        success: false,
        text: "Erro, usuário não encontrado",
      };
    }
  };

  const [mensagem, acaoDoFormulario] = useFormState(validarUsuario, null);

  return (
    <form action={acaoDoFormulario}>
      <label htmlFor="nomeDoUsuario">Nome:</label>
      <input type="text" name="nomeDoUsuario" />
      <button type="submit">Enviar</button>
      {mensagem && <h4>{mensagem.text}</h4>}
    </form>
  );
};

export default EstadoDoFormulario;
