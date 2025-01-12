import { useEffect, useState } from "react";
import styles from "./SelectBox.module.css";

const SelectBox = ({ elems, selectStation, setSelectStation }) => {
  const handleSelect = (e) => {
    setSelectStation({
      ...selectStation,
      goTrain: { ...selectStation.goTrain, departstation: e.target.value },
      comeTrain: { ...selectStation.comeTrain, arrivalstation: e.target.value },
    });
  };

  useEffect(() => {
    console.log(selectStation);
  }, [selectStation]);

  return (
    <select
      className={styles.SelectBox}
      onChange={handleSelect}
      // value={selectStation}
    >
      <option value="" selected disabled hidden>
        출발역
      </option>
      {elems.map((elem, index) => (
        <option key={index} value={elem}>
          {elem}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;

export const SelectBoxPreselected = ({
  elems,
  selectStation,
  setSelectStation,
}) => {
  useEffect(() => {
    setSelectStation({
      ...selectStation,
      goTrain: { ...selectStation.goTrain, arrivalstation: elems[0] },
      comeTrain: { ...selectStation.comeTrain, departstation: elems[0] },
    });
  }, []);

  return (
    <select className={styles.SelectBox} value={selectStation}>
      {elems.map((elem, index) => (
        <option key={index} value={elem}>
          {elem}
        </option>
      ))}
    </select>
  );
};
