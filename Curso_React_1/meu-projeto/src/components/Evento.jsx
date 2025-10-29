import { Button } from "./evento/Button";

export function Evento({numero}) {

function meuEvento() {
    console.log(`Opa!! O botão ${numero}`);
}

function meuEventoDois() {
    console.log("Aticando meu Segundo Evento!!!");
    
}

    return(
        <>
        <p>Clique para disparar um evento:</p>
        <Button event={meuEvento} text="Primeiro Evento"/>
        <Button event={meuEventoDois} text="Segundo Evento"/>
        <button onClick={meuEvento}>Ativar</button>
        </>
    )
}