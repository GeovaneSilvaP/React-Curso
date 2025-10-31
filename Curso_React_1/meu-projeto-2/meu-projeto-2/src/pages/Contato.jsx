function Contato() {

    const user = {
        nome: "Hedy Lammar",
        imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
        imageSize: 90,
    }
    return(
        <>
        <h1>Meu Contato</h1>
        <h3>{user.nome}</h3>
        <img className="avatar" src={user.imageUrl} alt={"Photo of" + user.name} 
        style={{
            width: user.imageSize,
            height: user.imageSize,  
        }}/>
        <br />
        <p>Email: geovanesil45sil@gmail.com</p>
        </>
    )
}

export default Contato;