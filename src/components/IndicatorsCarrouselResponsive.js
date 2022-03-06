export const IndicatorsCarrouselResponsive = (props) => {
  return (
    <>

      <button type="button" data-bs-target="#carouselProduct" data-bs-slide-to={props.id} className={`w-100 ${props.id == 0 ? 'active' : ''}`} aria-current="true" aria-label={`slide ${props.id}`}></button>

    </>
  );
}
