const Hero = ({name, img}) =>{
    return(
        <div class="hero">
            <h3>name: {name}</h3>
            <img src={img} alt="Herói" width={300} height={300}></img>
        </div>
    )
}

const Enemy = ({name, img}) =>{
    return(
        <div className="enemy">
            <h3>name: {name}</h3>
            <img src={img} alt="inimigo" width={300} height={300} style={{ display: 'inline-block' }}></img>
        </div>
    )
}

const Arena = ({children}) =>{
    return(
        <div class="arena">
            
            {children}            
        </div>
    )
}

const World = ({children}) =>{
    return(
        <>
            {children}
        </>
    )
}

export {World, Arena, Hero, Enemy}