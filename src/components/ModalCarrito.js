
export const ModalCarrito = (props) => {
   
    return (
        <>
            <div className="modal fade" id="ModalCarrito" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Shopping Cart</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <span className="fw-bold">{props.title}</span><br/>
                        <span>Color: {props.variants.option1}</span><br/>
                        <span>Size: {props.variants.option2}</span>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}


