import { useEffect, useState } from "react"

export const useFetch = (url) => {
    //console.log(url)
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })

    const getFetch = async () => {
        /** este sera cuando el url cambio, tenemos que "avisar"
         * que estamos cargando         */
        setState({
            ...state,
            isLoading: true,
        })

        const resp = await fetch(url)
        const data = await resp.json()

        //console.log(data)
        setState({
            data: data,
            isLoading: false,
            hasError: null,
        })
    }
    
    useEffect(() => {
          getFetch()
    }, [url])
    
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    };
}
