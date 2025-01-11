import ImgCarousel from "../../../../improved/Carousel";
import styles from "./RecommandEvent.module.css";

import carouselitem0 from "../../../../assets/image/improved/lovinglocal/header-carousel/carousel-item-0.png";
import carouselitem1 from "../../../../assets/image/improved/lovinglocal/header-carousel/carousel-item-1.png";
import carouselitem2 from "../../../../assets/image/improved/lovinglocal/header-carousel/carousel-item-2.png";

const RecommandEvent = () => {
  return (
    <div className={styles.RecommandEvent}>
      <div className={styles.textwrapper}>
        <div className={styles.title}>지금 꼭 가봐야 할 추천 이벤트</div>
        <div className={styles.subtitle}>코레일에서 추천하는 이벤트</div>
      </div>
      <div className={styles.carouslewrapper}>
        <ImgCarousel elems={[carouselitem0, carouselitem1, carouselitem2]} />
      </div>
    </div>
  );
};

export default RecommandEvent;
