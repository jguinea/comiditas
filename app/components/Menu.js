import React from 'react';
import App from "./App";

export default class Menu extends React . Component {
    constructor(props) {
        super(props);
        this.selector = this.selector.bind(this);
    }
    selector(dias) {
        this.props.action(dias);
    }
    render() {

        return (
            <ul className={"w3-ul w3-card-4"}>
            </ ul >

        );
    }
}
