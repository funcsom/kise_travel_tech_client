import ImgCarousel from "../../../../improved/Carousel";
import styles from "./PeriodicTourTrain.module.css";

import carouselitem0 from "../../../../assets/image/improved/lovinglocal/bottom-carousel/carousel-item-0.jpg";
import carouselitem1 from "../../../../assets/image/improved/lovinglocal/bottom-carousel/carousel-item-1.jpg";
import carouselitem2 from "../../../../assets/image/improved/lovinglocal/bottom-carousel/carousel-item-2.jpg";

const PeriodicTourTrain = () => {
  return (
    <div className={styles.PeriodicTourTrain}>
      <div className={styles.textwrapper}>
        <div className={styles.title}>정기관광열차</div>
        <div className={styles.subtitle}>
          동해 · 협곡 · 남도 · 아리랑 · 서해금빛열차
        </div>
      </div>
      <ImgCarousel elems={[carouselitem0, carouselitem1, carouselitem2]} />
      <div className={styles.buttonwrapper}>
        <button className={styles.button}>정기관광열차 여행상품</button>
      </div>
    </div>
  );
};

export default PeriodicTourTrain;
