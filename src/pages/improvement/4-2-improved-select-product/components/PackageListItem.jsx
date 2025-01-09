import styles from "./PackageListItem.module.css";

import InfoItem from "./InfoItem";

const PackageListItem = ({ name, reccommandedhead }) => {
  return (
    <div className={styles.PackageListItem}>
      <div className={styles.infowrapper}>
        <span className={styles.title}>{name}</span>
        <span className={styles.subtitle}>{reccommandedhead}</span>
      </div>
      <InfoItem type="package">20개 남음</InfoItem>
    </div>
  );
};

export default PackageListItem;
