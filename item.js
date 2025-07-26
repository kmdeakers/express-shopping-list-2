"use strict"

const { NotFoundError, BadRequestError } = require("./expressError");
const db = require("./fakeDb");


class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        
        // keep track of all items
        db.items.push(this);
    }

    /** Return all items */
    static findAll() {
        return db.items;
    }

    /** Update items list */
    static updateList(name, data) {
        let foundItem = Item.find(name);

        foundItem.name = data.name;
        foundItem.price = data.price;

        return foundItem;
    }

    /** Find item by name */
    static find(name) {
        const foundItem = db.items.find(v => v.name === name);
        if (foundItem === undefined) throw new BadRequestError();
        
        return foundItem;
    }
    /** Remove item from list */
    static remove(name) {

    }
}