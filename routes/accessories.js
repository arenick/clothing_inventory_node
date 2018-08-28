"use strict";
const express = require("express");
const accessories = express.Router();

//creating an array of objects
const accessoriesList = [{
    item: "Necklace",
    size: 10,
    material: ["gold"],
    price: 1000,
    id: 0
    },
    {
    item: "Necklace",
    size: 10,
    material: ["gold"],
    price: 1000,
    id: 0
    }];
//setting a variable to equal to length of the array
let idCount = accessoriesList.length;

// PUT - params + body
// DELETE - params
// POST - body
// GET - params

//gets data from the module
accessories.get("/accessories", (req, res) => {
    res.send(accessoriesList);
});

//sends data into the array
accessories.post("/accessories", (req, res) => {
    accessoriesList.push({
        item: req.body.item,
        size: req.body.size,
        material: req.body.material,
        price: req.body.price,
        id: idCount++
    });
    res.send(accessoriesList);
});

//updates data from the module into the array
accessories.put("/accessories/:id", (req, res) => {
    let count = 0;
    for (let accessory of accessoriesList) {
        if (accessory.id == req.params.id) {
            accessoriesList.splice(count, 1, req.body);
        }
        count++;
    }
    res.send(accessoriesList);
});

//deletes data from the array, once the delete function is initiated in the module.
accessories.delete("/accessories/:id", (req, res) => {
    // req.params = the param added to the url
    console.log(req.params.id);
    let count = 0;
    for (let accessory of accessoriesList) {
        if (accessory.id == req.params.id) {
            accessoriesList.splice(count, 1);
        }
        count++;
    }
    res.send(accessoriesList);
});

//exports the accessories data to the module
module.exports = accessories;