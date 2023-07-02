const axios = require('axios');
const util = require('util');


const _fetch = (url) => fetch(url).then((res) => res.json());

const doGetData = async (currency) => {
    const products = await _fetch("https://api.escuelajs.co/api/v1/products?offset=1&limit=10");
    const rate = await _fetch("https://api.exchangerate.host/latest?base=USD").then(
        (res) => res.rates[currency]
    );

    const newPriceCategory = doCurrencyChange(products, rate);
    const categorizedProducts = doCategorization(newPriceCategory)
    //    console.log(util.inspect(products, { depth: null }));
    
    console.log(categorizedProducts)
    return categorizedProducts;
    
}
module.exports = doGetData;

const _post = async (url, object) => await fetch(url, {
    method: 'post',
    body: JSON.stringify(object),
    headers: { 'Content-Type': 'application/json' }
});

const doCategorization = (products) => {
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

const doCurrencyChange = (products, rate) => {
    return products.map((el) => ({ ...el, price: el.price * rate }));

}

const doPostCategorizeProducts = async (body) => {
    const response = await _post("https://api.escuelajs.co/api/v1/products/", body)
    return response;
};
module.exports = doPostCategorizeProducts;