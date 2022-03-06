import { ItemCarrousel } from './ItemCarrousel'
import React, { useState, useEffect } from 'react'
import { IndicatorsCarrousel } from './IndicatorsCarrousel'
import { IndicatorsCarrouselResponsive } from './IndicatorsCarrouselResponsive'
import { useMediaQuery } from 'react-responsive'


export const GridCarrousel = (props) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 991px)' });
  const [images, setImages] = useState([]);
  useEffect(() => {
    if (props.datos.images) {
      setImages(props.datos.images);
    }
  }, [props.datos]);

  return (
    <>
      <div className="col-md-7 pe-md-5">
        <div id="carouselProduct" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false" >
          <div className="carousel-inner">
            {
              images.map((img, index) =>
                <ItemCarrousel
                  id={index}
                  key={img}
                  img={img} />
              )
            }
          </div>
          {!isTabletOrMobile ?
            <div className="carousel-indicators carousel-images position-relative mx-0 mt-3">
              {
                images.map((img, index) =>
                  <IndicatorsCarrousel
                    id={index}
                    key={img}
                    img={img} />
                )
              }

            </div>

            : <div className='carousel-responsive mb-4'>
              <div className="carousel-indicators  position-relative mx-0 mt-3">
                {
                  images.map((img, index) =>
                    <IndicatorsCarrouselResponsive
                      id={index}
                      key={img}
                      img={img} />
                  )
                }
              </div>
            </div>}
        </div>
      </div>

    </>
  );
}
