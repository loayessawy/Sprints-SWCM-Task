const axios = require('axios');
async function getData() {
    try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/products');
        const data = response.data;
        return data;
    } catch (error) {
        console.error('Error fetch product', error);
        throw error;
    }
}

async function currencyRate() {
    try {
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
        const exchangeRate = response.data.rates.EGP;
        return exchangeRate;
    } catch (error) {
        console.error('Error fetch currency rate:', error);
        throw error;
    }
}

function priceChange(products, exchangeRate) {
    products.forEach((product) => {
        product.price *= exchangeRate;
    });
}

function recategorize(products) {
    const categorizedProducts = {};

    products.forEach((product) => {
        const { category } = product;
        if (!categorizedProducts[category.name]) {
            categorizedProducts[category.name] = {
                category: {
                    id: category.id,
                    name: category.name,
                },
                products: [],
            };
        }
        categorizedProducts[category.name].products.push(product);
    });

    return Object.values(categorizedProducts);
}

async function displayData() {
    try {
        const products = await getData();
        const categorizedProducts = recategorize(products);
        const exchangeRate = await currencyRate();
        priceChange(products, exchangeRate);

        categorizedProducts.forEach((category) => {
            console.log('Category:', category.category);
            console.log('Products:', category.products);
        });
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

displayData();

