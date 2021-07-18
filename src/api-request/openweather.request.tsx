import ApiOpenweathermap from "../conf/ApiOpenweathermap";

/**
 * @description Request api
 */

// OPTION
const appid:string  = `&appid=${ApiOpenweathermap.Instance.getAppid()}`;
const units:string  = `&units=${ApiOpenweathermap.Instance.getUnitsMetric()}`;
const lang:string =  `&lang=${ApiOpenweathermap.Instance.getLangFr()}`;


export const requestOpenweatherCity = (city) => `weather?q=${city}${appid}${units}${lang}`;