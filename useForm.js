import { useState } from "react"


export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm)

    const onInputChange = ({ target }) => {
        //console.log(event.target.value)
        const { name, value } = target
        //console.log({ name, value })
        setFormState({
            ...formState,
            [name]: value,
        })
    }

    const onResetForm = () => {
        setFormState(
            initialForm,
        )
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}

/** si queremos mandar todos los datos que nos estan mandando en el objeto
 * de initialFrom, para evitar hacer:
 * const {username, email, password } = formState
 * 
 * podemos hacer un spread de esas variables, con:
 * ...formState
 */