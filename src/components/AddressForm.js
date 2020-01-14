import React from 'react';
import PropTypes from 'prop-types';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';


const AddressForm = (props) => {

    const textRef = React.useRef();

    const handleSearch = () => {
        var keyword = textRef.current.value;
        props.onSearch(keyword);
    }

    return (
        <>
        <Row>
           <Col md={{ span: 10, offset: 0 }}>
               <input placeholder="Enter location" id="searchBtn" type="text" ref={textRef} className="form-control"/>
            </Col>
           <Col md={{ span: 2, offset: 0 }}>
               <button className="btn btn-primary w-100" onClick={handleSearch}>Search</button>
            </Col>
        </Row>
         </>
    );
}

export default AddressForm;