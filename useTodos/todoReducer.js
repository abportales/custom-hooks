
export const todoReducer = ( initialState = [], action ) => {


    switch (action.type) {
        case '[TODO] Add Todo':
            return [ ...initialState, action.payload ];
        

        /** filter regresa un arreglo nuevo (no modificamos), 
         * cada 'todo' que tenga un id diferente del q estamos borrandoi
         *  sera agregado al nuevo arreglo         */
        case '[TODO] Remove Todo':
            return initialState.filter( todo => todo.id !== action.payload );

        /**
         * vamos a regresar un nuevo arreglo con el map, el todo
         * es el iterador es cada elemento, y cuando encuentre el elemento
         * copiara todo su contenido y solo modificara el done         */
        case '[TODO] Toggle Todo':
            return initialState.map( todo => { 

                if( todo.id === action.payload) { //id
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            });

        default:
            return initialState;
    }
}

/**
 * cuando queremos dejar algo pendiente
 * throw new Error('Action.type = ABC no esta implementado')
 */