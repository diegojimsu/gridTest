
import  { useState, useEffect } from 'react';

export const useColors = (datos) => {
    
    const [colors, setColors] = useState([]);
    useEffect(() => {
        if (datos.options) {
            const colors = datos.options.filter(data => data.name == "Color")
            setColors(colors[0].values);       
        }
    }, [datos]);

    return colors;

}
export const useSizes= (datos) => {

    const [sizes, setSizes] = useState([]);
    useEffect(() => {
        
        if (datos.options) {
            const sizes = datos.options.filter(data => data.name == "Size")
            setSizes(sizes[0].values);          
        }
    }, [datos]);

    return sizes;

}

export const useVariants= (datos) => {

    const [variants, setVariants] = useState([]);
    useEffect(() => {
        if (datos.variants) {
            setVariants(datos.variants)
        }
    }, [datos]);

    return variants;

}