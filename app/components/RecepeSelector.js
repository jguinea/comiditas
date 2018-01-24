import React from 'react';
import App from "./App";
import RecepeSelector from "./RecepeSelector"

export default class Calendar extends React . Component {
    constructor(props) {
        super(props);
    }

    render() {
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
        return (
            <div className="w3-dropdown-hover">
                <span>{eligeComida(this.props.tiempoComida)}</span>
                <div class="w3-dropdown-content w3-bar-block w3-card-4">
                    <a href="#" class="w3-bar-item w3-button">Pollito</a>
                    <a href="#" class="w3-bar-item w3-button">Toritilla</a>
                    <a href="#" class="w3-bar-item w3-button">Puré</a>
                </div>
            </div>
        );
    }
}
