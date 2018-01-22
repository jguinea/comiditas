import React from 'react';
import './../assets/scss/main.scss';

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
        return (
            <div className="w3-center w3-container w3-teal">
                <h2>Comiditas</h2>
            </div>
        );
    }
};

export default App;
