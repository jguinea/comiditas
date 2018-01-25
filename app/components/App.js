import React from 'react';
import './../assets/scss/main.scss';
import {comidas} from './../assets/mock.data'
import Calendar from './Calendar'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            comidas: comidas,
            eleccion: null,
        };
        this.haElegido = this.haElegido.bind(this);
    }

    haElegido(eleccion){
        this.eleccion = eleccion;
    }

    render() {
        return (
            <div>
                <div className="w3-center w3-container">
                    <h1 style={{fontWeight: "bold"}} >Comiditas</h1>
                </div>
                <Calendar recetas = {this.state.comidas} accion = {this.haElegido}/>
            </div>
        );
    }
}

export default App;
