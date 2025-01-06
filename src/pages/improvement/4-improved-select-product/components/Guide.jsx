import { useEffect, useState } from "react";

export const PackageGuide = () => {
  console.log("페키지를 수정하는 페이지입니다.");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "10px 10px 20px 10px",
      }}
    >
      <div>
        <div style={{ font: "var(--font-t1-sb)" }}>패키지를 선택해주세요</div>
        <div>1. 25(토), 2인 이용</div>
      </div>
    </div>
  );
};

// Train List에서 departStation, arrivalStation을 props로 받아서, departStation, arrivalStation에 따른 myTrainList를 필터링하는 함수
const filterMyTrainList = (data, departStation, arrivalStation) => {
  // 출발역과 도착역이 존재하는 리스트 필터링
  const filterTrains = data.filter((item) => {
    const stationNames = item.stations.map((i) => i.station);
    return (
      stationNames.includes(departStation) &&
      stationNames.includes(arrivalStation)
    );
  });

  // 출발역 index보다 도착역 index가 큰 리스트 반환
  const realconfirmTrainList = filterTrains.filter((item) => {
    const departIndex = item.stations.findIndex(
      (i) => i.station === departStation
    );
    const arrivalIndex = item.stations.findIndex(
      (i) => i.station === arrivalStation
    );
    return departIndex < arrivalIndex;
  });

  return realconfirmTrainList;
};

export const GoTrainGuide = ({ departStation, arrivalStation }) => {
  const [myTrainList, setMyTrainList] = useState([]);

  useEffect(() => {
    fetch("data/z-ktx-info.json")
      .then((res) => res.json())
      .then((data) => {
        setMyTrainList(filterMyTrainList(data, departStation, arrivalStation));
      });
  }, [departStation, arrivalStation]);

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
            가는편을 선택해주세요.
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
      {/* list의 wrapper 역할 */}
      <div>
        {/* 여기서 list들을 렌더링함 */}
        {myTrainList.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export const ComeTrainGuide = ({ type }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "10px 10px 20px 10px",
      }}
    >
      <div>
        <div style={{ font: "var(--font-t1-sb)" }}>오는편을 선택해주세요</div>
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
  );
};
