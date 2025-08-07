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
        if (foundItem === undefined) throw new NotFoundError();

        Object.assign(foundItem, data);

        return foundItem;
    }

    /** Find item by name */
    static find(name) {
        const foundItem = db.items.find(v => v.name === name);
        if (foundItem === undefined) throw new NotFoundError();
        
        return foundItem;
    }
    /** Remove item from list */
    static remove(name) {
        let itemIndex = db.items.findIndex(v => v.name === name);
        if (itemIndex === -1) throw new NotFoundError();

        db.items.splice(itemIndex, 1);
    }
}

module.exports = Item