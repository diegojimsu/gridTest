import React, { useRef } from 'react';
import { FormProduct } from './FormProduct'
import NumberFormat from 'react-number-format';


export const GridProductCard = (props) => {
    let desripcion = useRef(null);
    if(props.datos.description){
        desripcion.current.innerHTML = props.datos.description;
    }
    //
    return (
        <>
            <div className="col-md-5">
                <h1>{props.datos.title} </h1>
                <div className="d-flex align-items-end mb-5">
                    <h3 className="me-2 mb-0"><NumberFormat
                        thousandsGroupStyle="lakh"
                        value={props.datos.price / 100}
                        prefix="$"
                        decimalSeparator="."
                        displayType="text"
                        type="text"
                        thousandSeparator={false}
                        allowNegative={true}
                        fixedDecimalScale={true}
                        decimalScale={2} />
                    </h3>
                    <span className='text-black-50 line-throught '>
                        <NumberFormat
                            thousandsGroupStyle="lakh"
                            value={props.datos.compare_at_price / 100}
                            prefix="$"
                            decimalSeparator="."
                            displayType="text"
                            type="text"
                            thousandSeparator={false}
                            allowNegative={true}
                            fixedDecimalScale={true}
                            decimalScale={2} />
                    </span>
                </div>
                <hr />
                <FormProduct datos={props.datos} />
                <div className='mt-4 texto-descripcion' ref={desripcion}>
                    
                </div>
            </div>

        </>
    );
}
