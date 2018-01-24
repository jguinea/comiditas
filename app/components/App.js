import React from 'react';
import './../assets/scss/main.scss';
import {comidas} from './../assets/mock.data'
import Calendar from './Calendar'

class App extends React.Component {
    constructor() {
        super();
        this.handler = this.handler.bind(this);
        this.state = {
            dias: null,
            comidas: null,
        };

    }

    handler(d) {
        this.state.dias = d;
    }

    render() {
        console.log(comidas);
        return (
            <div>
                <div className="w3-center w3-container">
                    <h1 style={{fontWeight: "bold"}}>Comiditas</h1>
                </div>
                <Calendar/>
            </div>
        );
    }
};

export default App;
