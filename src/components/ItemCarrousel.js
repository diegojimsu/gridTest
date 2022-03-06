
export const ItemCarrousel = (props) => {
  return (
    <>
      <div className={`carousel-item ${props.id == 0 ? 'active' : ''}`}>
        <img className="d-block img-carrousel" src={props.img}  />
      </div>
    
    </>
  );
}
