import { useEffect, useState } from "react"
import { GetProductData } from '../helpers/GetProduct'




export const useFetchData = () => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });
    useEffect(() => {

        GetProductData()
            .then(datos => {
                setState({
                    data: datos,
                    loading: false
                });
            })

    }, []);

    return state;

}



