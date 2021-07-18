/**
 * @class StringJs
 * @description Singleton transform a string with the method
 */
export default class StringJs {
    private static _instance: StringJs;

    public static get Instance() {
        return this._instance || (this._instance = new this());
    };

    // Capitalizes first letter
    public strFirstUppercase(word: string) : string {
        return word!.charAt(0).toUpperCase() + word!.slice(1)
    }
}