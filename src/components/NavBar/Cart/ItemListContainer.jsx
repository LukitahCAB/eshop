import React, {useEffect} from 'react'
import ItemList from './ItemList'

export default function ItemListContainer () {
    useEffect(() =>{

        const promise = new Promise((resolve) => {

            console.log('Iniciando carga de productos')

            setTimeout(() =>{

                resolve()

            }
            ,2500)
        })

        promise.then(()=>{

            console.log('Productos cargados exitosamente');

        })
        
    })
    return (
        <div>

            <ItemList />

        </div>
    )
}