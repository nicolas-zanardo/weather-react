import places from 'places.js';

/**
 * @class CityPlaces
 * @Description this class allows to have the autocompletion of the cities in the form
 * https://community.algolia.com/places/examples.html
 */
export default class CityPlaces {

    public placesAutocomplete;
    public city?: string;

    constructor(private inputElt: string){
        this.initPlaceAutocomplete();
    }

    // Select input and init variable
    private initPlaceAutocomplete(): void {
        this.placesAutocomplete = places({
            container: document.querySelector<HTMLInputElement>(this.inputElt)!,
        });
    }

    // Assign the name of the city to the variable city
    public changeCity(): void {
        this.placesAutocomplete.on('change', (e) => {
            this.city = e.suggestion.name || '';
        })
    }
}