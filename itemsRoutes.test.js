"use strict"

const request = require("supertest");

const app = require("./app");
let db = require("./fakeDb");

const testItem = { name: "banana", price: 1.25 };

beforeEach(function () {
    db.items.push({...testItem});
});

afterEach(function () {
    db.items.length = 0;
});

describe("GET /items", function () {
    test("Gets a list of all items", async function() {
        const response = await request(app).get('/items');
        expect(response.body).toEqual({ items: [testItem] })
    })
});

describe("GET /items/:name", function() {
    test("Gets an item by name", async function () {
        const response = await request(app).get(`/items/${testItem.name}`);
        expect(response.body).toEqual(testItem);
    })
})

describe("POST /items", function () {
    test("Adds a new item to the list", async function () {
        const newItem = { name: "apple", price: 1.05 };
        
        const response = await request(app)
            .post('/items')
            .send(newItem);
        expect(response.body).toEqual({ added: newItem });
    });
});