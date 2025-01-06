import { useEffect, useState } from "react";

import ListItemWrapper from "../ListItemWrapper";
import TrainListItem from "../TrainListItem";

import { filterMyTrainList } from "../func/filterMyTrainList";

const SelectComeTrain = ({
  departStation,
  arrivalStation,
  setStep,
  onChangeComeTrainGrade,
  selectComeTrain,
  onClickChangeBtn,
}) => {
  const [myTrainList, setMyTrainList] = useState([]);

  useEffect(() => {
    fetch("/data/z-ktx-info.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log("받아온 데이터 =>", data);
        setMyTrainList(filterMyTrainList(data, departStation, arrivalStation));
      });
  }, []);

  // useEffect(() => {
  //   console.log(myTrainList);
  // }, [myTrainList]);

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
          <button
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
              gap: "6px",
              border: "1px solid var(--common-0)",
            }}
          >
            <span style={{ font: "var(--font-b2-no-b)" }}>일반실</span>
            <span style={{ font: "var(--font-b4-no-b)" }}>59,800원</span>
          </button>
          <button
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
              gap: "6px",
              border: "1px solid var(--common-0)",
            }}
          >
            <span style={{ font: "var(--font-b2-no-b)" }}>특실</span>
            <span style={{ font: "var(--font-b4-no-b)" }}>59,800원</span>
          </button>
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
            <ListItemWrapper>
              <TrainListItem trainNo={item.name} trainInfo={item.stations} />
            </ListItemWrapper>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectComeTrain;
