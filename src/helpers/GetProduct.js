

const url = `https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js`;

export const GetProductData = async () => {

    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}





