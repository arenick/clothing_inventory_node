"use strict";

const express = require("express");
const clothing = express.Router();

const clothingList = [{
    type: "Shirt",
    color: ["blue","green","red"],
    size: "small",
    price: 200,
    id: 0
}]

let idCount = clothingList.length;

clothing.get("/clothing", (req, res) => {
    res.send(clothingList);
})

clothing.post("/clothing", (req, res) => {
    clothingList.push({
        type: req.body.type,
        color: req.body.color,
        size: req.body.size,
        price: req.body.price,
        id: idCount++
    });
    res.send(clothingList);
});

clothing.put("/clothing", (req, res) => {
    let count = 0;
    for (let clothing of clothingList) {
        if (clothing.id == req.params.id) {
            clothingList.splice(index, 1, req.body);
        }
        count++;
    }
    res.send(clothingList);
});

clothing.delete("/clothing", (req, res) => {
    let count = 0;
    for (let clothing of clothingList) {
        if (clothing.id == req.params.id) {
            clothingList.splice(index, 1);
        }
        count++;
    }
    res.send(clothingList);
});

module.exports = clothing;