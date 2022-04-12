import React, { useState, useEffect } from 'react'
import { getProducts } from '../../Productos'
// import ItemList from './ItemList'
import ItemCount from './ItemCount'

export default function ItemListContainer () {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(prods => {
            setProducts(prods);
            console.log('Productos cargados correctamente');
        })
    }, 2000)

    console.log('Iniciando la carga de productos');

    return (
        <div>
            <ul>
                {products.map(product => 
                    <div className="row">
                        <div className="col s12 m2">
                            <div className="card #b39ddb deep-purple lighten-3">
                              <div className="card-image">
                                  {product.imagen}
                              </div>
                              <div className="card-content">
                                <p>{product.nombre}</p>
                                <p>Precio $ {product.precio}</p>
                              </div>
                              <ItemCount stock={5} initial={1}/>
                            </div>
                        </div>
                    </div>
                )}
            </ul>
        </div>
    )
}