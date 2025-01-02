import styles from "./Product.module.css";

const Product = ({ title, children }) => {
  return (
    <div className={styles.ProductBig}>
      <div className={styles.title}>
        <p>{title}</p>
        <p>
          남은수량: <span>100</span>
        </p>
      </div>
      {children && <div className={styles.content}>{children}</div>}
    </div>
  );
};

export default Product;
