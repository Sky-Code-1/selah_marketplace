import api from "./api"

const productUrl = "/products"


export const addProduct = async (product) => {
   return api.post(productUrl, product).then(res => res.data)
}

export const fetchProducts = async () => {
    return api.get(productUrl).then(res => res.data)
}

export const deleteProduct = async (id) => {
    return api.delete(`${productUrl}/${id}`)
}