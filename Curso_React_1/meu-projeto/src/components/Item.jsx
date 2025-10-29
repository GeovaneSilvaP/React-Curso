import { PropTypes } from "prop-types";

export function Item({marca, ano_lamcamento}){
    return(
        <>
        <li>{marca} - {ano_lamcamento}</li>
        </>
    )
} 

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lamcamento: PropTypes.number,
}

Item.defaultProps = {
    marca: "Faltou a marca",
    ano_lamcamento: 0,
}