import { useState } from "react"

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = (value = 1) => {
        // setCounter( counter + value )
        setCounter( (current) => current + value )
        /**
         * para las pruebas se usa current, ya que el act toma
         * el valor del counter iniciado y si se realizan varias
         * pruebas, siempre regresa al initialValue. y nos daria
         * un falso-negativo         */
    }

    const decrement = (value = 1) => {
        if(counter === 0) return;
        // setCounter( counter - value )
        setCounter( (current) => current - value )
    }

    const reset = () => {
        setCounter( initialValue )
    }

    return {
        counter,
        increment,
        decrement,
        reset,
    }
}


/** al final del dia, muchos hooks propios estaran
 * usando otros hooks ya creados, todo para simplificar
 * la tareas que deseemos hacer. */

/** recordemos que 'counter' es como tener 'counter: counter'
 * un counter que regresa el valor del useState de su counter
 * 
 * return {
        counter,
    }
 * aqui estamos regresando un objeto (por eso esta entre llaves)
 * y podemos deses en donde lo usemos con 'const {counter}'
 * en otro caso podriamos regresar un arreglo y el return deberia
 * ser entre [] y la des igual 'const [counter]'
 */

/** exponer metodos, tenemos de alguno manera enviar los
 * cambios de estado, para que nuestro hook tenga funcionalidad
 * y esto es como crear un set and get, pero el nombre del
 * metodo se manda por return para que pueda ser accesado por la deses
 */

/** podemos agregar ciertas condiciones como un minimo y maximo
 * si es lo que necesitamos, si tenemos un carrito de comprar no nos
 * interesa que llega a menos que cero */

/** se agrega la opcion de que si quiere cambiar el counter en otra
 * escala, para eso pasariamos la escala como referencia y recordemos
 * modificar el llamada a la funcion, porque si la dejamos asi, estamos
 * enviando un event y no el value que queremos
 */