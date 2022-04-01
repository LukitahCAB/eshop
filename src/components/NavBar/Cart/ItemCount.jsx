import React, { useState } from 'react'

export default function ItemCount (props) {

    const { initial, stock } = props

    const [counter, setCounter] = useState(initial);

    function increase() {
        if(counter < stock){
            setCounter(counter +1);
        }
    } 
    function decrease() {
        if(counter > initial){
            setCounter(counter -1);
        }
    }
    function reset() {
        setCounter(initial);
        console.log(counter + ' objetos sumandos al carrito.')
    }

    return (
        <div className="waves-effect waves-light deep-purple lighten-3">

            <div className="waves-effect waves-light deep-purple lighten-3">
                <button onClick={ decrease } className="waves-effect waves-light deep-purple darken-1 btn">
                    - 
                </button>
                <button className="waves-effect waves-light deep-purple darken-4 btn">
                    {counter}
                </button>
                <button onClick={ increase } className="waves-effect waves-light deep-purple darken-1 btn">
                    +
                </button>
            </div>
            <br></br>
            <hr></hr>
            <button onClick={ reset } className="waves-effect waves-light deep-purple darken-1 btn pulse">
                Al carrito
            </button>

        </div>
    )    
}