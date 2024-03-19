import Filho from "./01Filho"

const Pai = () =>{
    return (
        <div className="container">
            <div className=" box">
                <h2>Filho 1</h2>
                <Filho altura={1.8} peso={90}></Filho>
            </div>
            <div className="box">
                <h2>Filho 2</h2>
                <Filho altura={1.7} peso={69}></Filho>
            </div>
            <div className="box">
                <h2>Filho 3</h2>
                <Filho altura={1.75} peso={48}></Filho>
            </div>
        </div>
    )
}
export default Pai