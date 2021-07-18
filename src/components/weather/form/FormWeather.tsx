import React, {Component} from 'react';
import logo from '../../../images/logo.png';
import styles from "./FormWeather.module.scss";
import {Formik} from 'formik';
import {IconFa} from "../../layout/IconFa";
import CityPlaces from "../../../library/CityPlaces";

/**
 * @class FormWeather
 * @description Form to retrieve the name of the city. We retrieve the city in the state thanks to the algolia API with autocompletion.
 */
export default class FormWeather extends Component<{ history: string[] }, { city: string }> {

    private cityPlaces;
    /* REF input cityName */
    private readonly weatherRef: React.RefObject<HTMLInputElement>;

    constructor(props) {
        super(props);
        this.weatherRef = React.createRef();
    }

    // SUBMIT FORM
    // Get the name of the city thanks to the form
    private submit = (values, actions) => {
        this.setState((state) => ({
            city: this.cityPlaces.city,
        }))
        // Redirect to result page
        if (this.state.city !== undefined) {
            this.props.history.push(`/${this.state.city}`);
        }
        actions.setSubmitting(false);
    };


    componentDidMount(): void {
        // Algolia init input
        this.cityPlaces = new CityPlaces('#floatingInput');
        // Changes the value of the city
        this.cityPlaces.changeCity();
        // Start on cityName input focus
        this.weatherRef.current!.focus();
    }

    render() {
        return (
            <div className={`minHeightPage d-flex align-items-center flex-column justify-center ${styles.container}`}>
                <div className={`text-center ${styles.title}`}>
                    <img src={logo} alt="Weather"/>
                    <h1 className={"text-white text-center"}>Weather</h1>
                </div>
                <div className={`shadow border p-4 rounded-3 ${styles.cardForm}`}>
                    {/*--- Formik ---*/}
                    <Formik initialValues={{cityName: ''}} onSubmit={this.submit}>
                        {({isSubmitting, handleSubmit, handleChange, handleBlur}) => (
                            // HTML
                            <form className={"d-flex border form"} onSubmit={handleSubmit}>
                                <div className={`${styles.formWeather}`}>
                                    {/* input(text) --- cityName */}
                                    <input className={`form-control ${styles.inputWeather}`} type={"text"}
                                           name={"cityName"}
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           id={"floatingInput"}
                                           ref={this.weatherRef}
                                    />
                                </div>
                                {/*button --- SUBMIT*/}
                                <button type={"submit"} disabled={isSubmitting}
                                        className={styles.btnSubmit}>
                                    {IconFa.Instance.faCloud}
                                </button>
                            </form>

                        )}
                    </Formik>
                    {/*--- Formik ---*/}
                </div>
            </div>
        )
    }
}