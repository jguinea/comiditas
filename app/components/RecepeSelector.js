import React from 'react';
import App from "./App";
import RecepeSelector from "./RecepeSelector"

export default class Calendar extends React . Component {
    constructor(props) {
        super(props);
    }

    render() {
        function eleccion(nombre) {
            document.getElementsByClassName("comida").value = nombre;
            console.log(nombre);
        }
        function eligeComida(tiempo) {
            switch (tiempo){
                case 1:
                    return "Comida";
                case 2:
                    return "Cena";
                default:
                    return null;
            }
        }
        function creaDropdown(recetas) {
            console.log("llega a crear la vaina")
            return (recetas.map((receta)=>(
                <button onClick={function() { eleccion(receta.name) }} className="w3-bar-item w3-button">{receta.name}</button>
            )))
        }
        return (
            <div className="w3-dropdown-hover">
                <span className="comida">{eligeComida(this.props.tiempoComida)}</span>
                <div className="w3-dropdown-content w3-bar-block w3-card-4">
                    {creaDropdown(this.props.recetas)}
                </div>
            </div>
        );
    }
}
