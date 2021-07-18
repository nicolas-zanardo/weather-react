import React, {Component} from 'react';
import not_found from '../../../images/not_found.jpg';
import {withRouter} from 'react-router-dom';
import ReturnToSearch from "../../navigate/ReturnToSearch";
import ApiOpenweathermap from "../../../conf/ApiOpenweathermap";
import {requestOpenweatherCity} from "../../../api-request/openweather.request";
import StringJs from "../../layout/function/StringJs";
import styles from "./ResultWeather.module.scss"
import ElementWeather from "./element-weather/ElementWeather";

/**
 * @class ResultWeather
 * @description Retrieves the results of the request and passes the state in the properties
 */
export default class ResultWeather extends Component<{ location: { pathname: string; } }, {
    weatherData: {
        main: {
            temp: number | null,
            feels_like: number | null,
            temp_min: number | null,
            temp_max: number | null,
        },
        weather: [{ description: string | null, main: string | null }, {}]
    }, loading: boolean, dataNotFound: boolean
}> {


    private cityName?: string;
    private dataNotFound?: boolean;
    // Component ReturnToSearch
    private returnSearch:any = ReturnToSearch;
    //  Return to the home page
    private ReturnWithRouter = withRouter(this.returnSearch);


    constructor(props) {
        super(props);
        this.formattingPathCity();
        this.state = {
            weatherData: {
                main: {
                    temp: null,
                    feels_like: null,
                    temp_min: null,
                    temp_max: null,
                },
                weather: [{description: null, main: null}, {}]
            },
            loading: false,
            dataNotFound: false
        }
    }

    // Format Pathname Ex: /Bordeaux (to=>) bordeaux
    private formattingPathCity(): void {
        this.cityName = this.props.location.pathname.replace('/', '').toLowerCase();
    }

    componentDidMount() {
        // Request HTTP
        ApiOpenweathermap.Instance.axios.get(requestOpenweatherCity(this.cityName))
            .then(apiData => apiData.data)
            .then(weatherData => {
                // Hydrate th state
                this.updateWeather(weatherData);
            })
            .catch(err => {
                if (err.response.status === 404) {
                    this.setState({
                        dataNotFound: true
                    })
                }
            });
    }

    // Hydrate the state and set loading as true
    private updateWeather = (weatherData) => {
        this.setState({
            weatherData,
            loading: true,
        })
    }

    // Displays the background screen according to the results of the Request HTTP
    private bgInfo(): object | undefined {
        if (this.state.dataNotFound) {
            return {
                backgroundImage: `url(${not_found})`,
                backgroundSize: 'cover',
            };
        }
        if(this.state.weatherData.main.temp !== null) {
            if (this.state.weatherData.main.temp! >= 15) {
                return {
                    backgroundColor: `#f1c40f`
                };
            }
            if (this.state.weatherData.main.temp! < 15) {
                return {
                    backgroundColor: `#3498db`
                };
            }
        } else {
            return {
                backgroundColor: `none`
            };
        }
    }

    // Display background City title in card BT5
    private bgTitle() {
        if(this.state.weatherData.main.temp !== null) {
            if (this.state.weatherData.main.temp! >= 15) {
                return "warning";
            }
            if (this.state.weatherData.main.temp! < 15) {
                return "info";
            }
        } else {
            return {
                backgroundColor: `none`
            };
        }
    }

    render() {
        return (
            <div className={`minHeightPage ${styles.bg}`} style={this.bgInfo()}>
                {/*Return to search page*/}
                <this.ReturnWithRouter/>
                <div className={"h-100 d-flex justify-content-center align-content-stretch"}>
                    <div className={"d-flex  align-items-center flex-column mb-5 w-100"}>
                        {this.state.dataNotFound ? (
                            <>
                                {/*-- data Not Found --*/}
                                <h5 className={"mt-5"}>We haven’t found this city</h5>
                                <div className={`card mt-3 shadow bg-warning`}>
                                    <div className={`card-body text-center`}>
                                        <h3 className="card-title m-3">
                                            " {StringJs.Instance.strFirstUppercase(this.cityName!)} "
                                        </h3>
                                    </div>
                                </div>
                                <div className={"mt-3"}>Please can you do another search</div>
                            </>
                        ) : (
                            <>
                                {/*-- data --*/}
                                <h1 className={`mb-5 card px-5 py-4 text-white shadow text-center bg-${this.bgTitle()} ${styles.city}`}>
                                    {this.cityName ? StringJs.Instance.strFirstUppercase(this.cityName!) : "You must enter the name of a city"}
                                </h1>
                                {/*Element that displays the results*/}
                                <ElementWeather weatherData={this.state.weatherData} loading={this.state.loading}/>
                            </>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}