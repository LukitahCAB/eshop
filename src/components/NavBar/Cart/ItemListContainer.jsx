import React from 'react'
import ItemCount from './ItemCount';

const tierra = {
    nombre    :   "Planeta Tierra",
    imagen    :   <img className="product__img" src={require("../../../media/img/planetas/tierra.png")} alt="tierra"/>,
    precio    :   500
};

export default function ItemListContainer () {
    return (
        <div>

            <div className="row">
                <div className="col s12 m2">
                    <div className="card #b39ddb deep-purple lighten-3">
                      <div className="card-image">
                          {tierra.imagen}
                      </div>
                      <div className="card-content">
                        <p>{tierra.nombre}</p>
                        <p>Precio $ {tierra.precio}</p>
                      </div>
                      <ItemCount stock={5} initial={1}/>
                    </div>
                </div>
            </div>

        </div>
    )
}
