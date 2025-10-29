import { Item } from "./Item";

export function List() {
    return(
        <>
        <h1>Minha Lista</h1>
        <ul>
            <Item marca="Fiat" ano_lamcamento={1985}></Item>
            <Item marca="Ferrari" ano_lamcamento={1964}></Item>
            <Item marca="Renault"></Item>
            <Item marca="Fusca" ano_lamcamento={91}></Item>
            <Item></Item>
        </ul>
        </>
    )
} 