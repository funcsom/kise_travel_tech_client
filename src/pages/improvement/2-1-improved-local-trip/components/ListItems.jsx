import styles from "./ListItems.module.css";

const formatPrice = (price) => price.toLocaleString("ko-KR");

const ListItems = ({ title, subtitle, price, img }) => {
  return (
    <div className={styles.ListItems}>
      <div className={styles.imagewrapper}>
        <img className={styles.image} src={img} alt="" />
      </div>
      <div className={styles.textwrapper}>
        <div className={styles.titlewrapper}>
          <div className={styles.title}>{title}</div>
          <div className={styles.subtitle}>{subtitle}</div>
        </div>
        <div className={styles.pricewrapper}>
          <div className={styles.tag}>당일</div>
          <div>{`${formatPrice(Number(price))}원~`}</div>
        </div>
      </div>
    </div>
  );
};

export default ListItems;
