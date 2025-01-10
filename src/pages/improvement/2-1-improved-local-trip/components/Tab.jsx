import styles from "./Tab.module.css";

import TabItem from "./TabItem";

const Tab = ({ changeLocal, selectedLocal }) => {
  return (
    <div className={styles.Tab}>
      <TabItem
        text="수도권"
        onClickTabItem={() => changeLocal("capital")}
        type={selectedLocal === "capital" && "active"}
      />
      <TabItem
        text="강원권"
        onClickTabItem={() => changeLocal("gangwon")}
        type={selectedLocal === "gangwon" && "active"}
      />
      <TabItem
        text="충청권"
        onClickTabItem={() => changeLocal("chungcheong")}
        type={selectedLocal === "chungcheong" && "active"}
      />
      <TabItem
        text="경상권"
        onClickTabItem={() => changeLocal("gyeongsang")}
        type={selectedLocal === "gyeongsang" && "active"}
      />
      <TabItem
        text="전라권"
        onClickTabItem={() => changeLocal("jeolla")}
        type={selectedLocal === "jeolla" && "active"}
      />
      <TabItem
        text="제주권"
        onClickTabItem={() => changeLocal("jeju")}
        type={selectedLocal === "jeju" && "active"}
      />
    </div>
  );
};

export default Tab;
