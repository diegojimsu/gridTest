export const IndicatorsCarrousel = (props) => {
    return (
      <>
 <div className="col-3 px-2 ">
<img data-bs-target="#carouselProduct" data-bs-slide-to={props.id} className={`active w-100 h-auto border-0 ${props.id == 0 ? 'active' : ''}`}  aria-current="true" aria-label={`slide ${props.id}`} src={props.img}  />
 
</div>
  
      </>
    );
  }
  