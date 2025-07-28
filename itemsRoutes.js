"use strict"

const express = require("express");

const db = require("./fakeDb");
const { BadRequestError } = require("./expressError");
const router = new express.Router();
const Item = require("./item")

/** GET /items: get a list of shopping itmes:
 *        { items: [
 *          {name: "popsicle", price: 1.45},
 *          {name: "cheerios", price: 3.40} 
 *      ]}
*/
router.get("/", function(req, res) {
    return res.json(db.items)
})


/** POST /items: accept JSON body, add item, and return it:
 *  {name: "popsicle", price: 1.45} =>
        {added: {name: "popsicle", price: 1.45}}
 */
router.post("/", function(req, res) {
    if (!req.body) throw new BadRequestError;

    const newItem = new Item(req.body.name, req.body.price);

    return res.json({added: newItem})
})


 /** GET /items/:name  returns single item
  * {name: "popsicle", "price": 1.45}
  */
 router.get("/:name", function(req, res) {
    const itemName =  req.params.name;
    const item = Item.find(itemName);

    return res.json({item});
 })


 /** PATCH /items/:name  accept JSON body, modify item, return it:
  * {name: "new popsicle", price: 2.45} =>
  {updated: {name: "new popsicle", price: 2.45}}
  */
router.patch("/:name", function(req, res) {
    if (req.body === undefined) throw new BadRequestError();

    let name = req.params.name;
    let data = req.body;

    let updatedItem = Item.updateList(name, data);

    return res.json({updated: updatedItem});
})

  /** DELETE /items/:name  delete item:
   * {message: "Deleted"}
   */
router.delete("/:name", function(req, res) {
    Item.remove(req.params.name);

    return res.json({message: "Deleted"})
})
  module.exports = router;