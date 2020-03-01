const express = require("express");
const router = new express.Router();
const fakeDb = require("../fakeDb")
const ExpressError = require("../expressError");

// get list of shopping items
router.get("/", function (req, res, next) {
    return res.json(fakeDb);
});

// Take request JSON data and add it to shopping list.
router.post("/", function (req, res, next) {
    try {

        // Check for valid Input
        if (req.body.name === undefined || req.body.price === undefined) {
            throw new ExpressError(
                `Not a valid item input. Make sure your item has a proper name. Item should look like:{
                        "name": "eggs",
                        "price": 3.00
                    }
                    `, 400)
        }

        if (isNaN(req.body.price)) {
            throw new ExpressError(
                `Not a valid item input. Make sure your price is a valid number. :{
                        "name": "eggs",
                        "price": 3.00
                    }
                    `, 400)
        }

        for (let i = 0; i < fakeDb.length; i++) {
            if (fakeDb[i].name === req.body.name) {
                throw new ExpressError(
                    `Not a valid item input. That item already exists.`, 400)
            }
        }

        // Inputs are now valid, push new data in DB and return added item.
        fakeDb.push(req.body);
        return res.json({
            "added": fakeDb[fakeDb.length - 1]
        });

    } catch (err) {
        next(err);
    }
});

// Display a single item's name and price
router.get("/:name", function (req, res, next) {
    try {
        for (let i = 0; i < fakeDb.length; i++) {
            if (fakeDb[i].name === req.params.name) {
                return res.send(fakeDb[i]);
            } else {
                throw new ExpressError("Item not found on shopping list! ", 404)
            }
        }
    } catch (err) {
        next(err);
    }
});

// Update a single item's name & price
router.patch("/:name", function (req, res, next) {
    try {
        for (let i = 0; i < fakeDb.length; i++) {
            if (fakeDb[i].name === req.params.name) {
                fakeDb[i].name = req.body.name;
                fakeDb[i].price = req.body.price;
                return res.json({
                    "updated": fakeDb[i]
                });
            } else {
                throw new ExpressError("Item not found on shopping list! ", 404)
            }
        }
    } catch (err) {
        next(err);
    }
});

// Delete an item
// Code courtesy of lecture notes
router.delete("/:name", function (req, res, next) {
    const idx = fakeDb.findIndex(item => item.name === req.params.name);
    if (idx !== -1) {
        console.log(idx);
        fakeDb.splice(idx, 1);
        return res.json({
            message: "Deleted"
        })
    } else {
        throw new ExpressError("Item not found on shopping list! ", 404)
    }
});


module.exports = router;