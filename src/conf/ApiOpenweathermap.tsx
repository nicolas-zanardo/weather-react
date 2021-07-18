import axios from 'axios';
import EnvOpenweathermap from "../env/env.openweathermap";

/**
 * @class ApiOpenweathermap
 * @description Singleton Request API OpenWeather doc: https://openweathermap.org/appid
 */
export default class ApiOpenweathermap extends EnvOpenweathermap {

    private static _instance: ApiOpenweathermap;

    private constructor(){
        super();
    }

    public axios = axios.create({
            baseURL: 'http://api.openweathermap.org/data/2.5/',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            }
    });

    public static get Instance() {
        return this._instance || (this._instance = new this());
    };

    public getAppid():string {
        return this.appid;
    }

    public getUnitsMetric():string {
        return this.unitsMetric;
    }

    public getLangFr():string {
        return this.langFr;
    }

}
