const express = require("express");
const User = require("../schemas/user");
const router = express.Router();

router.get("/", async (req, res) => {
    const page = parseInt(req.query.page || "1");
    const perPage = parseInt(req.query.perPage || "10");
    console.log(req.query);

    const projection = { name: 1, email: 1, password: 1, age: 1, products: 1 };

    const Users = await User.find({}, projection)
        .skip((page - 1) * perPage)
        .limit(perPage);

    res.send(Users);
});

router.post("/", async (req, res) => {
    const body = req.body;
    const newUser = new User({
        name: body.name,
        email: body.email,
        password: body.password,
        age: body.age,
        products: []
    });
    const data = await newUser.save().catch((err) => {
        console.log(err);
    });
    res.send(data);
});
router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const projection = { name: 1, email: 1, password: 1, age: 1, products: 1 };
    const result = await User.find({ _id: id }, projection).catch((err) => {
        res.send({ error: err.message });
    });
    res.send(result);
});

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const result = await User.deleteOne({ _id: id }).catch((err) => {
        res.send({ error: err.message });
    });
    res.send(result);
});

router.put("/:id", async (req, res) => {
    const body = req.body;
    const id = req.params.id;
    const data = await User.updateOne({ _id: id }, body).catch((err) => {});
    res.send(data);
});

module.exports = router;
