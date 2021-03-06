/**
 * The reference option model.
 */


import Option from "../models/Option";


export default class RefOption extends Option {

    /**
     * Parameterless constructor.
     */
    constructor() {

        super('ref', 'string', [], '');
    }


    /**
     * Performs inheritance process on an option.
     * 
     * @param hierarchy The hierarchy object that inherits.
     * @param ref The ref to inherit.
     */
    public inherit(hierarchy: any, ref: any): void { }


    /**
     * Gets nothing from a given HTML element.
     * 
     * @param element The HTML element to target. 
     */
    public getKeyFromElement = (element: HTMLElement): any => null;
}
