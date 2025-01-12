import styles from "./SelectPackage.module.css";

import { useEffect, useState } from "react";

import ListItemWrapper from "../ListItemWrapper";
import PackageListItem from "../PackageListItem";

const SelectPackage = ({
  setStep,
  selectPackage,
  onClickChangeBtn,
  preselectedInfo,
}) => {
  const [packageList, setPackageList] = useState([]);

  useEffect(() => {
    fetch("/data/z-package-info.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log("받아온 데이터 =>", data);
        setPackageList(data);
      });
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.SelectPackage}>
        <div className={styles.title}>패키지를 선택해주세요</div>
        <div className={styles.subtitle}>1. 25(토), 2인 이용</div>
      </div>
      <div className={styles.packagelistwrapper}>
        {packageList.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              {
                onClickChangeBtn && onClickChangeBtn();
              }
              setStep((prev) => prev + 1);
              selectPackage([item.name, item.price]);
              console.log(
                `selected Package is ... : ${[item.name, item.price]}`
              );
            }}
          >
            {preselectedInfo === item.name ? (
              <ListItemWrapper type="selected">
                <PackageListItem
                  name={item.name}
                  reccommandedhead={item.reccommandedhead}
                />
              </ListItemWrapper>
            ) : (
              <ListItemWrapper type="default">
                <PackageListItem
                  name={item.name}
                  reccommandedhead={item.reccommandedhead}
                />
              </ListItemWrapper>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectPackage;
