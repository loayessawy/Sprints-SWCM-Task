import http from 'http'
import fetch from "node-fetch";
import { json } from 'stream/consumers';
import url from 'url';

const _fetch = (url) => fetch(url).then((res) => res.json());

const _post = async (url, object) => await fetch(url, {
    method: 'post',
    body: JSON.stringify(object),
    headers: { 'Content-Type': 'application/json' }
});


const groupWithCategory = (products) => {
    const categorized = {};

    products.forEach((element) => {
        if (categorized[element.category.id]) {
            categorized[element.category.id].products.push(element);
        } else {
            categorized[element.category.id] = {
                category: {
                    id: element.category.id,
                    name: element.category.name,
                },
                products: [element],
            };
        }
    });

    return Object.values(categorized);
};

const transferCurrency = (products, rate) => {
    return products.map((el) => ({ ...el, price: el.price * rate }));
};

const categorizeProducts = async (currency) => {
    const products = await _fetch("https://api.escuelajs.co/api/v1/products?offset=1&limit=10");
    const rate = await _fetch("https://api.exchangerate.host/latest?base=USD").then(
        (res) => res.rates[currency]
    );

    const transformedPrices = transferCurrency(products, rate);
    const categorizedProducts = groupWithCategory(transformedPrices);

    return categorizedProducts;
    console.log(finalData);
    // data = finalData
};
const postCategorizeProducts = async (body) => {
    const response = await _post("https://api.escuelajs.co/api/v1/products/", body)
    return response;
};
// -----------------------------------------------------------------------
const requestListner = async (req, res) => {
    const method = req.method;
    // console.log(method, query.CUR, newData)
    if (method === "GET") {
        const query = url.parse(req.url, true).query;
        const newData = await categorizeProducts(query.CUR);
        res.setHeader("Content-Type", "application/json")
        res.writeHead(200)
        // console.log("method, route, data")
        res.write(JSON.stringify(newData));
        // res.write('Hello World!'); //write a response to the client    
        res.end();
    }
    if (method === "POST") {

        const chunks = [];
        req.on("data", (chunk) => {
            chunks.push(chunk)
        });

        req.on("end", async () => {
            const body = JSON.parse(chunks.toString())
            if (!body.title || !body.price || !body.description) {
                res.writeHead(400);
                res.setHeader("Content-Type", "application/json");
                res.end("Wrong request !!!")
            }
            await postCategorizeProducts(body)
            res.end()
        });
        req.on('error', (error) => {
            res.writeHead(500)
            res.write(JSON.stringify(error.message))
            res.end()
        })
    }
};
const server = http.createServer(requestListner);
server.listen(8080, "localhost", () => {

    console.log("server UP")
})

