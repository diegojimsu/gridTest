
import { GridCarrousel } from './components/GridCarrousel';
import { GridProductCard } from './components/GridProductCard';
import { useFetchData } from './hooks/useFetchData'


const TiendaAPP = () => {

  const { data: datos } = useFetchData();

  return (
    <>
      <div className="container py-3 py-md-5">
        <div className="row">
          <GridCarrousel datos={datos} />
          <GridProductCard datos={datos}/>
        </div>
      </div>

    </>
  );
}
export default TiendaAPP;
