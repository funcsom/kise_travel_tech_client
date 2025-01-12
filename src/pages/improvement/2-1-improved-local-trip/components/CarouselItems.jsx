import styles from "./CarouselItems.module.css";

const formatPrice = (price) => price.toLocaleString("ko-KR");

const CarouselItems = ({ img, title, subtitle, onClickProduct }) => {
  return (
    <div className={styles.CarouselItems} onClick={onClickProduct}>
      <div className={styles.imagewrapper}>
        <img className={styles.image} src={img} alt="" />
      </div>
      <div className={styles.textwrapper}>
        <div className={styles.subtitle}>{subtitle}</div>
        <div className={styles.title}>{title}</div>
      </div>
    </div>
  );
};

export default CarouselItems;

export const CarouselSmallItems = ({
  img,
  title,
  subtitle,
  price,
  onClickProduct,
}) => {
  return (
    <div className={styles.CarouselSmallItems} onClick={onClickProduct}>
      <div className={styles.imagesmallwrapper}>
        <img className={styles.smallimage} src={img} alt="" />
      </div>
      <div className={styles.smalltextwrapper}>
        <div className={styles.titlewrapper}>
          <div className={styles.smalltitle}>{title}</div>
          <div className={styles.smallsubtitle}>{subtitle}</div>
        </div>
        <div className={styles.pricewrapper}>
          <div className={styles.tag}>당일</div>
          <div>{`${formatPrice(Number(price))}원~`}</div>
        </div>
      </div>
    </div>
  );
};
