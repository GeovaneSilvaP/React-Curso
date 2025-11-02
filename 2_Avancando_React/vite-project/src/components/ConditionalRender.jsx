import React from "react";

function ConditionalRender() {

    const x = false;

    const y = 200;

    return(
        
        <div>
            {/*7- Renderização condicional */}
            <h3>Isso será exibido?</h3>
            {x && <p>Se x for true Sim</p>}

            <h3>Testando Renderização condicional</h3>
            {y > 100 && <p>200 Nao é menor que 100</p>}
        </div>
    )
}

export default ConditionalRender;