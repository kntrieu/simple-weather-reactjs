import React from 'react';
import PropTypes from 'prop-types';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

class Header extends React.Component {
    constructor (props) {
        super (props);
        this.state = {};
    }

    render () {
        return (
            <Row>
                <Col md={{ span: 12, offset: 0 }}>
                    <nav className="navbar navbar-dark bg-info">
                        <a className="navbar-brand" href="#">Welcome to simple weather</a>
                    </nav>
                </Col>
            </Row>
            
        )
    }
}

export default Header;