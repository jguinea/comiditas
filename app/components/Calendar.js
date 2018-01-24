import React from 'react';
import App from "./App";
import RecepeSelector from "./RecepeSelector"

export default class Calendar extends React . Component {
    constructor(props) {
        super(props);
        this.selector = this.selector.bind(this)
    }
    selector(dias) {
        this.props.action(dias);
    }

    render() {
        function getCelda (dia, celda){
            switch (celda){
                case 0:
                    return  (
                      <th className="w3-blue">
                          {dia}
                      </th>
                    );
                case 1:
                    return (
                        <th style={{height: "200px", backgroundColor: "#E0FFFF"}} >
                            <div style={{height: "35%"}}/>
                            <div className="w3-dropdown-hover">
                                <RecepeSelector tiempoComida = {celda}/>
                            </div>
                        </th>
                    );
                default:
                    return (
                        <th style={{height: "200px", backgroundColor: "#ADD8E6"}} >
                            <div style={{height: "35%"}}/>
                            <div className="w3-dropdown-hover">
                                <RecepeSelector tiempoComida = {celda}/>
                            </div>
                        </th>
                    );

            }
        }
        function getTabla() {
            let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Finde"];
            var indents = [];
            for (var celda = 0; celda < 3; celda++) {
                indents.push(
                    <tr key={celda}>
                        {dias.map((dia)=>(getCelda(dia,celda)))}
                    </tr>
                );
            }
            return indents;

        }
        return (
            <table style={{width: "100%"}} className="w3-table w3-blue-gray">
                {getTabla()}
            </table>
        );
    }
}
