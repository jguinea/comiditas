import React from 'react';
import App from "./App";
import RecepeSelector from "./RecepeSelector"

export default class Calendar extends React . Component {
    constructor(props) {
        super(props);
        this.eleccion = null;
    }
    componentDidMount() {
        this.eleccion = this.props.tiempoComida;
        console.log(this.eleccion);
        this.forceUpdate();
    }

    render() {
        function nombreComida(tiempo) {
            switch (tiempo) {
                case 1:
                    return "Comida";
                case 2:
                    return "Cena";
                default:
                    return tiempo;

            }
        }
        let theThis = this;
        function eligeComida(nombre) {
            theThis.eleccion = nombre;
            theThis.props.accion(nombre);
            theThis.forceUpdate();
        }
        function creaDropdown(recetas) {
            return (recetas.map((receta)=>(
                <button onClick={function() { eligeComida(receta.name) }} className="w3-bar-item w3-button">{receta.name}</button>
            )))
        }
        let nombreSelector = "w3-dropdown-content w3-bar-block w3-card-4";
        return (
            <div className="w3-dropdown-hover">
                <span className="comida">{nombreComida(this.eleccion)}</span>
                <div className= {nombreSelector}>
                    {creaDropdown(this.props.recetas)}
                </div>
            </div>
        );
    }
}
