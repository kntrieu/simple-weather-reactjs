import React from 'react';
import PropTypes from 'prop-types';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import AddressForm from './AddressForm';
import Results from './Results';
import * as Constants from '../constants/constants';
import axios from 'axios';
import moment from "moment";

class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            results: {
                weather: null,
                icon: null,
                cityName: null,
                wind: "N/A",
                cloudiness: "N/A",
                pressure: "N/A",
                humidity: "N/A",
                sunrise: "N/A",
                sunset: "N/A",
                geoCoords: "N/A",
                temp: null

            },

            isLoading: false,
            isError: false,
        }
        this.formatState = this.formatState.bind(this);
        this.onSearch = this.onSearch.bind(this);
    } 

    formatState (data, keyword) {
        const cityName = keyword;
        this.setState({
            results: {
                weather: data.weather[0].main,
                icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
                cityName: data.name,
                wind: data.wind.speed + "m/s",
                cloudiness: data.clouds.all + " %",
                pressure: data.main.pressure + " hpa",
                humidity: data.main.humidity + '%',
                sunrise: moment.unix(data.sys.sunrise).format("HH:mm:ss"),
                sunset: moment.unix(data.sys.sunset).format("HH:mm:ss"),
                geoCoords: `[${data.coord.lon}, ${data.coord.lat}]`,
                temp: Math.round(data.main.temp - 273.15)
            }
        })
    }

    

    onSearch (keyword) {
        if (!keyword) {
            return;
        }

        // const res = Constants.FAKE_DATA;

        //Get data from api by city name
        this.setState({isLoading: true});
        this.setState({isError: false});
        axios.get(Constants.BASE_WEATHER_URL + `?q=${keyword}&appid=${Constants.API_KEY}`).then(response => {
            console.log(response);
            this.setState({isLoading: false});
            this.formatState (response.data, keyword);
        }).catch(error => {
            this.setState({isLoading: false});
            this.setState({isError: true});
        })

        // setTimeout(() => {
        //     this.formatState (res.data, keyword);
        // }, 500)
        
    }


    render() {
        return (
            <Row>
                <Col md={{ span: 12, offset: 0 }}>
                    <br/>
                    <AddressForm onSearch={this.onSearch} />
                    <br/><br/>
                    <Results result={this.state.results} isError={this.state.isError} isLoading={this.state.isLoading}/>
                </Col>
            </Row>
        );
    }

}

export default Content;