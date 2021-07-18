import React, {Component} from 'react';
import styles from "./ElementWeather.module.scss";
import Rain from "../../../../images/meteo/Rain.gif";
import Clouds from "../../../../images/meteo/Clouds.gif";
import Clear from "../../../../images/meteo/Clear.gif";
import Mist from "../../../../images/meteo/Mist.gif";
import Thunderstorm from "../../../../images/meteo/Thunderstorm.gif";
import Drizzle from "../../../../images/meteo/Drizzle.gif";


/**
 * @class ElementWeather
 * @description Displays the results of the HTTP request
 */
export default class ElementWeather extends Component<{ weatherData, loading }, {}> {

    private arrayTemp = [Rain, Clouds, Clear, Clouds, Mist, Thunderstorm, Drizzle];
    private tempDescription?: string;

    // Find the animation according to the result of the HTTP request
    private findImgBg = () => {
        if (this.props.loading) {
            this.arrayTemp.forEach(item => {
                // Get the name of the image without the extension
                let value = item.replace('/static/media/', '').replace(/(?:.\w+.gif)$/, '');
                if (this.props.weatherData.weather[0].main === value) {
                    this.tempDescription = item;
                }
            });
        }
    }

    // INSERT imgBackground in card
    private bgImg() {
        this.findImgBg();
        return {
            backgroundImage: 'url(' + this.tempDescription + ')',
            backgroundSize: '100%',
            backgroundPosition: 'center center',
            backgroundRepeat: "no-repeat"
        };
    }

    render() {
        return (
            <>
                {this.props.loading ? (
                    // display result
                    <div className={`card shadow p-5 ${styles.cardWeather}`} style={this.bgImg()}>
                        <div className={`card-body`}>
                            {this.props.weatherData.main.temp >= 15 ?
                                <div className={"text-center"}>Il fait chaud 🌡</div> :
                                <div className={"text-center"}>Il fait froid 🥶</div>}
                            <h1 className={"card-title text-center"}>{this.props.weatherData.main.temp} °C</h1>
                            <div>Description : {this.props.weatherData.weather[0].description}</div>
                            <hr/>
                            <div className={"text-info"}>min : {this.props.weatherData.main.temp_min} °C</div>
                            <div className={"text-danger"}>max : {this.props.weatherData.main.temp_max} °C</div>
                            <div>Feels like : {this.props.weatherData.main.feels_like} °C</div>
                        </div>
                    </div>
                ) : (
                    // spinner BT5
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                )}

            </>


        )
    }
}