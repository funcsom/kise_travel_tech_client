import Toggle from "./Toggle";
import styles from "./ProductInfo.module.css";
import Clip from "./Clip";

const ProductInfo = ({ impInfo }) => {
  return (
    <div className={styles.ProductInfo}>
      <Toggle title="상품정보">
        {/* 상품명 */}
        <div className={`${styles.item} ${styles.itemsmall}`}>
          <span className={styles.title}>상품명</span>
          <span className={styles.text}>{impInfo.product.name}</span>
        </div>

        {/* 가는편 */}
        <div className={`${styles.item} ${styles.itemsmall}`}>
          <div className={styles.header}>
            <Clip>가는편</Clip>
            <span>{`${impInfo.date}(${impInfo.day})`}</span>
          </div>
          <div className={styles.infogap}>
            <span
              className={styles.title}
            >{`${impInfo.goTrain.departtime} - ${impInfo.goTrain.arrivaltime}`}</span>
            <span className={styles.text}>{`${
              impInfo.goTrain.departstation
            } - ${impInfo.goTrain.arrivalstation} | ${
              impInfo.goTrain.trainNo
            } | ${impInfo.people}인 | ${
              translate[impInfo.goTrain.trainGrade]
            }`}</span>
          </div>
        </div>

        {/* 오는편 */}
        <div className={`${styles.item} ${styles.itemsmall}`}>
          <div className={styles.header}>
            <Clip>오는편</Clip>
            <span>{`${impInfo.date}(${impInfo.day})`}</span>
          </div>
          <div className={styles.infogap}>
            <span
              className={styles.title}
            >{`${impInfo.comeTrain.departtime} - ${impInfo.comeTrain.arrivaltime}`}</span>
            <span className={styles.text}>{`${
              impInfo.comeTrain.departstation
            } - ${impInfo.comeTrain.arrivalstation} | ${
              impInfo.comeTrain.trainNo
            } | ${impInfo.people}인 | ${
              translate[impInfo.comeTrain.trainGrade]
            }`}</span>
          </div>
        </div>

        {/* 패키지 */}
        <div
          className={`${styles.item} ${styles.itemsmall} ${styles.itemlast}`}
        >
          <div className={styles.header}>
            <Clip>패키지</Clip>
            <span>{`${impInfo.date}(${impInfo.day})`}</span>
          </div>
          <div className={styles.infogap}>
            <span className={styles.title}>{impInfo.product.name}</span>
            <span className={styles.text}>{`${impInfo.people}인 이용`}</span>
          </div>
        </div>
      </Toggle>
    </div>
  );
};

export default ProductInfo;

const translate = { economy: "일반실", business: "특실" };
