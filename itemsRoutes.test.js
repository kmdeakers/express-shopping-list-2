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
})

describe("GET /items", function () {
    test("Gets a list of all items", async function() {
        const response = await request(app).get('/items');
        expect(response.body).toEqual({ items: [testItem] })
    })
})