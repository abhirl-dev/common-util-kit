class Iterator {

    #items: Array<any> = [];
    #index: number = 0;

    constructor(items: Array<any> = []) {
        this.#items = items;
        this.#index = 0;
    }

    /**
     * Checks whether it has next item or not.
     */
    hasNext(): boolean {
        return this.#index < this.#items.length;
    }

    /**
     * Give the next item of an array.
     */
    next(): any {
        return this.#items[this.#index++];
    }
}


export { Iterator };