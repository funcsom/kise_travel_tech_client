import styles from "./SelectComeTrain.module.css";

import { useEffect, useState } from "react";

import ListItemWrapper from "../ListItemWrapper";
import TrainListItem from "../TrainListItem";
import TrainGradeBtn from "./TrainGradeBtn";

import { filterMyTrainList } from "../func/filterMyTrainList";

const SelectComeTrain = ({
  departStation,
  arrivalStation,
  setStep,
  onChangeComeTrainGrade,
  currentTrainGrade,
  selectComeTrain,
  onClickChangeBtn,
  preselectedInfo,
  info,
}) => {
  const [myTrainList, setMyTrainList] = useState([]);

  useEffect(() => {
    fetch("/data/z-ktx-info.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log("받아온 데이터 =>", data);
        setMyTrainList(filterMyTrainList(data, departStation, arrivalStation));
      });
    onChangeComeTrainGrade(currentTrainGrade);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.SelectComeTrain}>
        <div>
          <div className={styles.title}>오는편을 선택해주세요.</div>
          <div className={styles.subtitle}>
            {`${info.date}(${info.day}), 성인 ${info.people}인 편도요금`}
          </div>
        </div>
        <div className={styles.traingradebtnwrapper}>
          {currentTrainGrade === "economy" ? (
            <TrainGradeBtn
              type="selected"
              onClickBtn={() => {
                onChangeComeTrainGrade("economy");
              }}
            >
              <span>일반실</span>
              <span
                style={{
                  font: "var(--font-b4-no-b)",
                  color: "var(--color-label-normal)",
                }}
              >
                59,800원
                <span
                  style={{
                    font: "var(--font-b4-no-m)",
                    color: "var(--color-label-alternative)",
                  }}
                >
                  {" "}
                  / 1명당
                </span>
              </span>
            </TrainGradeBtn>
          ) : (
            <TrainGradeBtn
              type="default"
              onClickBtn={() => {
                onChangeComeTrainGrade("economy");
              }}
            >
              <span>일반실</span>
              <span
                style={{
                  font: "var(--font-b4-no-b)",
                  color: "var(--color-label-normal)",
                }}
              >
                59,800원
                <span
                  style={{
                    font: "var(--font-b4-no-m)",
                    color: "var(--color-label-alternative)",
                  }}
                >
                  {" "}
                  / 1명당
                </span>{" "}
              </span>
            </TrainGradeBtn>
          )}
          {currentTrainGrade === "business" ? (
            <TrainGradeBtn
              type="selected"
              onClickBtn={() => {
                onChangeComeTrainGrade("business");
              }}
            >
              <span>특실</span>
              <span
                style={{
                  font: "var(--font-b4-no-b)",
                  color: "var(--color-label-normal)",
                }}
              >
                68,000원
                <span
                  style={{
                    font: "var(--font-b4-no-m)",
                    color: "var(--color-label-alternative)",
                  }}
                >
                  {" "}
                  / 1명당
                </span>{" "}
              </span>
            </TrainGradeBtn>
          ) : (
            <TrainGradeBtn
              type="default"
              onClickBtn={() => {
                onChangeComeTrainGrade("business");
              }}
            >
              <span>특실</span>
              <span
                style={{
                  font: "var(--font-b4-no-b)",
                  color: "var(--color-label-normal)",
                }}
              >
                68,000원
                <span
                  style={{
                    font: "var(--font-b4-no-m)",
                    color: "var(--color-label-alternative)",
                  }}
                >
                  {" "}
                  / 1명당
                </span>{" "}
              </span>
            </TrainGradeBtn>
          )}
        </div>
      </div>
      <div className={styles.listwrapper}>
        {myTrainList.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              {
                onClickChangeBtn && onClickChangeBtn();
              }
              selectComeTrain([
                item.id,
                item.name,
                item.no,
                item.stations[0].time,
                item.stations[1].time,
              ]);
              setStep((prev) => prev + 1);
              console.log(
                `selected ComeTrain is ... : ${[
                  item.id,
                  item.name,
                  item.no,
                  item.stations[0].time,
                  item.stations[1].time,
                ]}`
              );
            }}
          >
            {preselectedInfo === item.id ? (
              <ListItemWrapper type="selected">
                <TrainListItem
                  logo={item.logo}
                  trainNo={item.name}
                  no={item.no}
                  trainInfo={item.stations}
                />
              </ListItemWrapper>
            ) : (
              <ListItemWrapper type="default">
                <TrainListItem
                  logo={item.logo}
                  trainNo={item.name}
                  no={item.no}
                  trainInfo={item.stations}
                />
              </ListItemWrapper>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectComeTrain;
