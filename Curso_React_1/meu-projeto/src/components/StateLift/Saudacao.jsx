export function Saudacao({seuNome}) {

    function gerarSaudacao(algumNome){
        return `Ola ${algumNome}, tudo bem?`
    }

    return <>{seuNome && <p>{gerarSaudacao(seuNome)}</p>}</>
}