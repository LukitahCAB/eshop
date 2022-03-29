import React from 'react'

const tierra = {
    "nombre"    :   "Planeta Tierra",
    "imagen"    :   <img className="product__img" src={require("../../../media/img/planetas/tierra.png")} alt="tierra"/>,
    "precio"    :   500

};

const ItemListContainer = () => {
    return (
        <div>

            <div class="row">
                <div class="col s12 m2">
                    <div class="card orange lighten-5">
                      <div class="card-image">
                          {tierra.imagen}
                      </div>
                      <div class="card-content">
                        <p>{tierra.nombre}</p>
                        <p>Precio $$$ {tierra.precio}</p>
                      </div>
                      <div class="card-action ">
                        <a class="waves-effect waves-light btn orange darken-3"><i class="material-icons right tiny ">add_circle</i>Agregar</a>
                      </div>
                    </div>
                </div>
                <div class="col s12 m2">
                    <div class="card orange lighten-5">
                      <div class="card-image">
                        {tierra.imagen}
                      </div>
                      <div class="card-content">
                        <p>{tierra.nombre}</p>
                        <p>Precio $$$ {tierra.precio}</p>
                      </div>
                      <div class="card-action">
                      <a class="waves-effect waves-light btn orange darken-3"><i class="material-icons right tiny">add_circle</i>Agregar</a>
                      </div>
                    </div>
                </div>
                <div class="col s12 m2">
                    <div class="card orange lighten-5">
                      <div class="card-image">
                        {tierra.imagen}
                      </div>
                      <div class="card-content">
                        <p>{tierra.nombre}</p>
                        <p>Precio $$$ {tierra.precio}</p>
                      </div>
                      <div class="card-action">
                      <a class="waves-effect waves-light btn orange darken-3"><i class="material-icons right tiny">add_circle</i>Agregar</a>
                      </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ItemListContainer;
