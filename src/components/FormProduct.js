import React, { useState, useEffect } from 'react';
import { useColors, useSizes, useVariants } from '../hooks/useData'
import { ModalCarrito } from './ModalCarrito'

export const FormProduct = (props) => {
    const [checkColor, setcheckColor] = useState("Red");
    const [checkSize, setcheckSize] = useState("7");
    const [cantidad, setcantidad] = useState(1);
    const [price, setPrice] = useState(0);
    const [Baseprice, setBasePrice] = useState(0);
    const [variant, setVariants] = useState([]);
    const colors = useColors(props.datos);
    const sizes = useSizes(props.datos);
    const variants = useVariants(props.datos);
    const handleInputAdd = () => {
        setcantidad(cantidad + 1);
    }
    const handleInputMin = () => {
        if (cantidad > 1) {
            setcantidad(cantidad - 1);
        }
    }
    useEffect(() => {
        const filterv = variants.filter(data => data.option1 == checkColor && data.option2 == checkSize)
        if (filterv[0]) {
            const precio = (filterv[0].price / 100)
            setPrice(precio);
            setBasePrice(precio);
            setVariants(filterv[0]);
        }
    }, [variants]);
    useEffect(() => {
        const filterv = variants.filter(data => data.option1 == checkColor && data.option2 == checkSize)
        if (filterv[0]) {
            const precio = (filterv[0].price / 100)
            setBasePrice(precio);
            setPrice(precio*cantidad);
            setVariants(filterv[0]);
        }
    }, [checkColor]);
    useEffect(() => {
        const filterv = variants.filter(data => data.option1 == checkColor && data.option2 == checkSize)
        if (filterv[0]) {
            const precio = (filterv[0].price / 100)
            setBasePrice(precio);
            setPrice(precio*cantidad);
            setVariants(filterv[0]);
        }
    }, [checkSize]);
    useEffect(() => {
        setPrice(Baseprice * cantidad);
    }, [cantidad]);


    return (
        <>
            <div className='form-product d-flex align-items-center'>
                <span className="me-3 ">Color:</span>
                {
                    colors.map((color, index) => {
                        const button = {
                            '--bg-pseudo': color,
                        };
                        return (
                            <div key={color}>
                                <input checked={checkColor === color} onChange={() => setcheckColor(color)} value={color} type="radio" name="radio" id={`radio${index}`} />
                                <label style={button} className='mb-0 me-2' htmlFor={`radio${index}`}></label>
                            </div>
                        );
                    }
                    )
                }


            </div>
            <hr />
            <div className='d-flex'>
                <div>
                    <span className='me-3 fixed-box'>Size:</span>
                </div>
                <div >
                    <div className='d-flex align-items-center  flex-wrap'>
                        {
                            sizes.map((size, index) => {
                                return (
                                    <div key={size} className='w-10'>

                                        <input checked={checkSize === size} onChange={() => setcheckSize(size)} type="radio" className="btn-check " value={size} id={`size${index}`} name="options" autoComplete="off" />
                                        <label className="btn btn-outline-secondary w-100 px-1 mb-0" htmlFor={`size${index}`}>{size}</label>

                                    </div>
                                );
                            }
                            )
                        }
                    </div>
                </div>
            </div>
            <hr />
            <div className='d-flex justify-content-between w-100 align-items-center'>
                <div className="num-block skin-2">
                    <div className="num-in">
                        <span className="minus dis" onClick={handleInputMin} ></span>
                        <input type="text" className="in-num" value={cantidad} readOnly="readonly" />
                        <span className="plus" onClick={handleInputAdd}></span>
                    </div>
                </div>
                <div>
                    <span className='text-gris font-600'>Total price: </span><span className='font-600'>$ {price}</span>
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-lg-6'>
                    <button className='btn btn-favourite font-600 w-100 py-2 mb-3 mb-lg-0' >Add to favourite</button>
                </div>
                <div className='col-lg-6'>
                    <button className='btn btn-add-cart font-600 w-100 py-2 ' data-bs-toggle="modal" data-bs-target="#ModalCarrito">Add to cart</button>
                </div>
            </div>
            <ModalCarrito variants={variant} title={props.datos.title} />
        </>
    );
}
