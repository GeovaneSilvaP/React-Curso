export function Evento({numero}) {

function meuEvento() {
    console.log(`Opa!! O botão ${numero}`);
}

    return(
        <>
        <p>Clique para disparar um evento:</p>
        <button onClick={meuEvento}>Ativar</button>
        </>
    )
}