export const BASE_WEATHER_URL = "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather";
export const API_KEY = "04ca925fa8ea7ecb903d0aa8357cf5dd";
export const FAKE_DATA = {
    data: {
        "coord": {
            "lon": 105.84,
            "lat": 21.02
        },
        "weather": [
            {
                "id": 701,
                "main": "Mist",
                "description": "mist",
                "icon": "50d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 289.15,
            "feels_like": 289.25,
            "temp_min": 289.15,
            "temp_max": 289.15,
            "pressure": 1015,
            "humidity": 93
        },
        "visibility": 2800,
        "wind": {
            "speed": 2.1,
            "deg": 50
        },
        "clouds": {
            "name": "Broken clouds"
        },
        "dt": 1578898475,
        "sys": {
            "type": 1,
            "id": 9308,
            "country": "VN",
            "sunrise": 1578872155,
            "sunset": 1578911615
        },
        "timezone": 25200,
        "id": 1581130,
        "name": "Hanoi",
        "cod": 200
    }
}