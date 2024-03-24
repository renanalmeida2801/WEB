import React, { useContext } from "react";
import ColorTheme from "./MyColorContext";

class ClassA extends React.Component {

    render() {

        const cores = {bkgA:"green", bkgB:"white", bkgC:"yellow", bkgD:"blue"}
        return (
            <ColorTheme.Provider value={cores}>
                <h1 style={{backgroundColor:cores.bkgA, color:"black"}}>Contexto A</h1>
                <ClassB />
            </ColorTheme.Provider>
        )
    }
}

class ClassB extends React.Component {

    render() {
        let cores = this.context
        return (
            <div>
                <h1 style={{ backgroundColor: cores.bkgB, color:"black" }}>
                    Contexto B
                </h1>
            </div>
        )
    }
}


ClassB.contextType = ColorTheme

export default ClassA