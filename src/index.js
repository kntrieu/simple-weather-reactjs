import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Content from './components/Content';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container w-100 p-3 bg-dark">
                <Header/>
                <Content/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));