const products = [
    {
        id        :   1,
        nombre    :   "Planeta Tierra",
        imagen    :   <img className="product__img" src={require("../media/img/planetas/tierra.png")} alt="tierra"/>,
        precio    :   500
    }
]

export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}