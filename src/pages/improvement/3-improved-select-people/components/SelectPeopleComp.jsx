import { useState } from "react";
import Stepper from "../../../../improved/stepper/Stepper";
import styles from "./SelectPeopleComp.module.css";

const SelectPeopleComp = () => {
  return (
    <div className={styles.SelectPeopleComp}>
      <div className={styles.section}>
        <Stepper
          title="어른"
          subtitle="만 13세 이상"
          state="default"
          init={0}
        />
        <Stepper
          title="어린이"
          subtitle="만 6세 ~ 만 12세"
          state="disabled"
          init={0}
        />
      </div>

      <div className={styles.divider}></div>

      <Stepper
        title="동반유아"
        subtitle="만 6세 미만"
        discription="보호자 어른 1명당 유아 1명까지 동반 가능"
        discription2="유아 1명 초과 시 어린이 승차권을 구매해 주세요."
        state="disabled"
        init={0}
      />
      <div className={styles.divider}></div>
      <Stepper title="경로" subtitle="만 65세 이상" state="disabled" init={0} />
      <div className={styles.divider}></div>
      <div className={styles.section}>
        <Stepper
          title="중증장애인"
          subtitle="장애 1 ~ 3급"
          state="disabled"
          init={0}
        />
        <Stepper
          title="경증장애인"
          subtitle="장애 4 ~ 6급"
          state="disabled"
          init={0}
        />
        <Stepper
          title="장애 보호"
          discription="장애인 1명당 어른 1명 예매시 보호자 할인 가능"
          state="disabled"
          init={0}
        />
      </div>
    </div>
  );
};

export default SelectPeopleComp;
