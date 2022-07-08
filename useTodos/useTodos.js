import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"

// {
//     id: new Date().getTime(),
//     description: 'Recolectar la piedra del alma',
//     done: false,
// },
const initialState = [];
/** intenta parsear todo lo q esta aqui, (parse es lo contrario
 * a stringify) json de null es null y hara el 'or' con un arreglo
 *  vacio y enviaria el arreglo en caso de encontrar un error al parsear   
 * 
 * si llega a marcar un erro de error de parse, comenta la linea del parse
 * con todo y return, guardar, regresar y deshacer y se quitara el error
 *  */

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])


    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch(action)
    }

    const handleDeleteTodo = (id) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: id
        }

        dispatch(action)
    }

    const handleToggleTodo = (id) => {
        //console.log({id})
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id,
        }
        dispatch(action)
    }

    const todosCount = todos.length
    
    const pendingTodosCount = todos.filter(todo=>!todo.done).length

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount, 
        pendingTodosCount,
    }
}
