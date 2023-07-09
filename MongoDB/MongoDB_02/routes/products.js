const express = require("express");
const Product = require("../schemas/product");
const router = express.Router();

router.get("/", async (req, res) => {
    const page = parseInt(req.query.page || "1");
    const perPage = parseInt(req.query.perPage || "10");
    const minRating = parseInt(req.query.minRating || "0");
    const maxRating = parseInt(req.query.maxRating || "10");

    console.log(req.query);

    const query = { rating: { $gte: minRating, $lte: maxRating } };

    if (req.query.genre) {
        query.genre = { $in: req.query.genre };
    }

    console.log(query);

    const projection = { title: 1, description: 1, rating: 1, price: 1 };

    const Products = await Product.find(query, projection)
        .skip((page - 1) * perPage)
        .limit(perPage);

    res.send(Products);
});

router.post("/", async (req, res) => {
    const body = req.body;
    
    const newProduct = new Product({
        title: body.title,
        description: body.description,
        price: body.price,
        rating: body.rating
    });

    const data = await newProduct.save().catch((err) => {
        console.log(err);
    });
    res.send(data);
});
router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const projection = { title: 1, description: 1, rating: 1, price: 1 };
    const result = await Product.find({ _id: id }, projection).catch((err) => {
        res.send({ error: err.message });
    });
    res.send(result);
});

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const result = await Product.deleteOne({ _id: id }).catch((err) => {
        res.send({ error: err.message });
    });
    res.send(result);
});

router.put("/:id", async (req, res) => {
    const body = req.body;
    const id = req.params.id;

    const data = await Product.updateOne({ _id: id }, body).catch((err) => {});
    res.send(data);
});

module.exports = router;
