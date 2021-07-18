import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowCircleLeft, faCity, faCloudSun} from '@fortawesome/free-solid-svg-icons';
import React from "react";

/**
 * @class IconFa
 * @description Singleton to display fontawesome icon
 */
export class IconFa {

    private static _instance: IconFa;

    public static get Instance()
    {
        return this._instance || (this._instance = new this());
    };

    // icon Fontawesome
    public faCity = <FontAwesomeIcon icon={faCity} />
    public faCloud = <FontAwesomeIcon icon={faCloudSun} />
    public faArrowBack = <FontAwesomeIcon icon={faArrowCircleLeft} />
}