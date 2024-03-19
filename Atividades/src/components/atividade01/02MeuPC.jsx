const PlacaMae = ({nome, preco}) =>{
    return(
        <div className="box">
            <h2>Placa Mãe</h2>
            <h3>nome: {nome}</h3>
            <h3>preço: {preco}</h3>
        </div>
    )
}

const Memoria = ({nome, preco}) =>{
    return(
        <div className="box">
            <h2>Memória</h2>
            <h3>nome: {nome}</h3>
            <h3>preço: {preco}</h3>
        </div>
    )
}

const PlacaDeVideo = ({nome, preco}) =>{
    return(
        <div className="box">
            <h2>Placa de Vídeo</h2>
            <h3>nome: {nome}</h3>
            <h3>preço: {preco}</h3>
        </div>
    )
}

export {PlacaMae, Memoria, PlacaDeVideo}
