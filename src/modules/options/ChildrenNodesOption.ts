/**
 * The children option model.
 */


import Option from "../models/Option";


export default class ChildNodesOption extends Option {

    /**
     * Parameterless constructor.
     */
    constructor() {

        super('childNodes', 'array', [], []);
    }

    /**
     * Performs inheritance process on an option.
     * 
     * @param hierarchy The hierarchy object that inherits.
     * @param childNodes The childNodes to inherit.
     */
    public inherit(hierarchy: any, childNodes: any): void {

        if (hierarchy.from.children.allow === true) {

            if (hierarchy.from.mode === 'append') {
    
                if (hierarchy.from.children.placement === 'before') {

                    hierarchy.childNodes.shift(childNodes);
                } else {
                    
                    hierarchy.childNodes.push(childNodes);
                }
            } else {
    
                hierarchy.childNodes = childNodes;
            }
        }
    }
}
