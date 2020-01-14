import React from 'react';
import PropTypes from 'prop-types';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import AddressForm from './AddressForm';



class Results extends React.Component {
    constructor (props) {
        super(props);
        this.state = {};
    }


    render () {
        let loadingImg = "";
        let errorText = "";
        if (this.props.isLoading) {
            loadingImg = <img src="loading.gif" width="20" height="20"/>
        }

        if (this.props.isError) {
            errorText = "No location found!";
        }
        return (
            <div className="result-table">
                <Row>
                    <Col>
                    <span className="text-danger">{errorText}</span>
                    <div className="card">
                        <div className="card-header bg-dark text-light">
                            <h5>
                                {this.props.result.cityName ? "Weather in " + this.props.result.cityName : "Please enter location"}
                                {loadingImg}
                            </h5>
                        </div>
                        <div className="card-body bg-dark">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item main-results">
                                    Main weather:
                                    <p> {this.props.result.weather}</p>
                                    <p><img src={this.props.result.icon} /></p>
                                </li>

                                <li className="list-group-item main-results">
                                    Temperature: {this.props.result.temp ? this.props.result.temp + '\u00b0' + "C" : ""} 
                                </li>
                            </ul>
                        </div>
                    </div>
                    </Col>
                    <Col>
                        <table className="table table-striped table-dark">
                            <tbody>
                            <tr>
                                <td>
                                Wind
                                </td>

                                <td>
                                {this.props.result.wind}
                                </td>
                            </tr>

                            <tr>
                                <td>
                                Cloudiness
                                </td>

                                <td>
                                {this.props.result.cloudiness}
                                </td>
                            </tr>

                            <tr>
                                <td>
                                Pressure
                                </td>

                                <td>
                                {this.props.result.pressure}
                                </td>
                            </tr>

                            <tr>
                                <td>
                                Humidity
                                </td>

                                <td>
                                {this.props.result.humidity}
                                </td>
                            </tr>

                            <tr>
                                <td>
                                Sunrise
                                </td>

                                <td>
                                {this.props.result.sunrise}   
                                </td>
                            </tr>

                            <tr>
                                <td>
                                Sunset
                                </td>

                                <td>
                                {this.props.result.sunset}   
                                </td>
                            </tr>

                            <tr>
                                <td>
                                Geo coords
                                </td>

                                <td>
                                {this.props.result.geoCoords}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Results;