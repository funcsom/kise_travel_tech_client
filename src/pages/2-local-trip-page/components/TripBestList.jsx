import { CarouselProd } from "../../../components/Carousel";

const TripBestList = ({ prods, onClickProduct }) => {
  return (
    <div>
      <CarouselProd elems={prods} onClickProduct={onClickProduct} />
    </div>
  );
};

export default TripBestList;
