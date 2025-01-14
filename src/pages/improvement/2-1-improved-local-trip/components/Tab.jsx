import { useState } from "react";
import styles from "./Tab.module.css";

import TabItem from "./TabItem";
import Modal from "../../1-improved-loving-local/components/Modal";

const Tab = ({ changeLocal, selectedLocal }) => {
  const [isNotiOpen, setIsNotiOpen] = useState(false);

  const openNoti = () => {
    setIsNotiOpen((prev) => !prev);
  };
  return (
    <div className={styles.Tab}>
      <TabItem
        text="수도권"
        onClickTabItem={openNoti}
        type={selectedLocal === "capital" && "active"}
      />
      <TabItem
        text="강원권"
        onClickTabItem={() => changeLocal("gangwon")}
        type={selectedLocal === "gangwon" && "active"}
      />
      <TabItem
        text="충청권"
        onClickTabItem={openNoti}
        type={selectedLocal === "chungcheong" && "active"}
      />
      <TabItem
        text="경상권"
        onClickTabItem={openNoti}
        type={selectedLocal === "gyeongsang" && "active"}
      />
      <TabItem
        text="전라권"
        onClickTabItem={openNoti}
        type={selectedLocal === "jeolla" && "active"}
      />
      <TabItem
        text="제주권"
        onClickTabItem={openNoti}
        type={selectedLocal === "jeju" && "active"}
      />
      {isNotiOpen && <Modal openNoti={openNoti} />}
    </div>
  );
};

export default Tab;
