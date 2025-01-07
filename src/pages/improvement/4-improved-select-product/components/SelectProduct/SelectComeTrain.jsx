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
  onChangeComeTrainPrice,
  selectComeTrain,
  onClickChangeBtn,
  preselectedInfo,
}) => {
  const [myTrainList, setMyTrainList] = useState([]);

  useEffect(() => {
    fetch("/data/z-ktx-info.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log("받아온 데이터 =>", data);
        setMyTrainList(filterMyTrainList(data, departStation, arrivalStation));
      });
    if (currentTrainGrade === "economy" && preselectedInfo)
      onChangeComeTrainPrice(59800);
    else if (currentTrainGrade === "business" && preselectedInfo)
      onChangeComeTrainPrice(68300);
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          padding: "10px 10px 20px 10px",
        }}
      >
        <div>
          <div style={{ font: "var(--font-t1-sb)" }}>
            오는편을 선택해주세요.
          </div>
          <div style={{ font: "var(--font-b3-n)", color: "var(--gray-50)" }}>
            1. 25(토), 성인 2인 편도요금
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "space-between",
          }}
        >
          {currentTrainGrade === "economy" ? (
            <TrainGradeBtn
              type="selected"
              onClickBtn={() => {
                onChangeComeTrainGrade("economy");
              }}
            >
              <span style={{ font: "var(--font-b2-no-b)" }}>일반실</span>
              <span style={{ font: "var(--font-b4-no-b)" }}>
                59,800원
                <span style={{ font: "var(--font-b4-no-m)" }}> / 1명당</span>
              </span>
            </TrainGradeBtn>
          ) : (
            <TrainGradeBtn
              type="default"
              onClickBtn={() => {
                onChangeComeTrainGrade("economy");
              }}
            >
              <span style={{ font: "var(--font-b2-no-b)" }}>일반실</span>
              <span style={{ font: "var(--font-b4-no-b)" }}>
                59,800원
                <span style={{ font: "var(--font-b4-no-m)" }}> / 1명당</span>
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
              <span style={{ font: "var(--font-b2-no-b)" }}>특실</span>
              <span style={{ font: "var(--font-b4-no-b)" }}>
                68,300원
                <span style={{ font: "var(--font-b4-no-m)" }}> / 1명당</span>
              </span>
            </TrainGradeBtn>
          ) : (
            <TrainGradeBtn
              type="default"
              onClickBtn={() => {
                onChangeComeTrainGrade("business");
              }}
            >
              <span style={{ font: "var(--font-b2-no-b)" }}>특실</span>
              <span style={{ font: "var(--font-b4-no-b)" }}>
                68,300원
                <span style={{ font: "var(--font-b4-no-m)" }}> / 1명당</span>
              </span>
            </TrainGradeBtn>
          )}
        </div>
      </div>
      <div
        className="ListsWrapper"
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "24px 16px",
          backgroundColor: "var(--gray-99)",
          gap: "10px",
        }}
      >
        {myTrainList.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              {
                onClickChangeBtn && onClickChangeBtn();
              }
              selectComeTrain([
                item.name,
                item.stations[0].time,
                item.stations[1].time,
              ]);
              setStep((prev) => prev + 1);
            }}
          >
            {preselectedInfo === item.name ? (
              <ListItemWrapper type="selected">
                <TrainListItem trainNo={item.name} trainInfo={item.stations} />
              </ListItemWrapper>
            ) : (
              <ListItemWrapper type="default">
                <TrainListItem trainNo={item.name} trainInfo={item.stations} />
              </ListItemWrapper>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectComeTrain;
