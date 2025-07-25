"use strict"

const express = require("express");

const db = require("./fakeDb");
const router = new express.Router();

/** GET /items: get a list of shopping itmes:
 *        { items: [
 *          {name: "popsicle", price: 1.45},
 *          {name: "cheerios", price: 3.40} 
 *      ]}
*/


/** POST /items: accept JSON body, add item, and return it:
 *  {name: "popsicle", price: 1.45} =>
        {added: {name: "popsicle", price: 1.45}}
 */


 /** GET /items/:name  returns single item
  * {name: "popsicle", "price": 1.45}
  */


 /** PATCH /items/:name  accept JSON body, modify item, return it:
  * {name: "new popsicle", price: 2.45} =>
  {updated: {name: "new popsicle", price: 2.45}}
  */


  /** DELETE /items/:name  delete item:
   * {message: "Deleted"}
   */