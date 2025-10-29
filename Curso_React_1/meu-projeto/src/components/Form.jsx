export function Form() {

function userCadastrado(e) {
    e.preventDefault();
    console.log("O usuario foi cadrastrado com sucesso!!!");
}

    return (
        <>
        <h1>Meu Cadrastro:</h1>
        <form onSubmit={userCadastrado}>
            <div>
                <input type="text" placeholder="Digite seu nome"/>
            </div>
            <div>
                <input type="submit" value="Cadastrar"/>
            </div>
        </form>
        </>
    )
}