import api from "./api"

const productUrl = "/products"


export const addProduct = async (product, config) => {
    // console.log(`Sending a new Product to the server ${JSON.stringify(product)}`)
    console.log(`Request Config ${JSON.stringify(config)}`)
    console.log(`Stringified Object data ${JSON.stringify(product)}`)
   return api.post(productUrl, product, config).then(res => res.data)
}

export const fetchProducts = async () => {
    return api.get(productUrl)
}

export const deleteProduct = async (id) => {
    return api.delete(`${productUrl}/${id}`)
}