import { useState, useEffect } from "react";

const TrainSelectPlace = ({
  info,
  setInfo,
  trainGoStation,
  trainComeStation,
}) => {
  const handleDepartChangeOnGo = (e) => {
    const selectedValue = JSON.parse(e.target.value); // JSON 파싱
    setInfo({
      ...info,
      goTrain: {
        ...info.goTrain,
        departstation: selectedValue.station, // 출발역 이름
        departtime: selectedValue.time, // 출발 시간
      },
    });
  };

  const handleArrivalChangeOnGo = (e) => {
    const selectedValue = JSON.parse(e.target.value); // JSON 파싱
    setInfo({
      ...info,
      goTrain: {
        ...info.goTrain,
        arrivalstation: selectedValue.station, // 도착역 이름
        arrivaltime: selectedValue.time, // 도착 시간
      },
    });
  };

  const handleDepartChangeOnCome = (e) => {
    const selectedValue = JSON.parse(e.target.value); // JSON 파싱
    setInfo({
      ...info,
      comeTrain: {
        ...info.comeTrain,
        departstation: selectedValue.station, // 출발역 이름
        departtime: selectedValue.time, // 출발 시간
      },
    });
  };

  const handleArrivalChangeOnCome = (e) => {
    const selectedValue = JSON.parse(e.target.value); // JSON 파싱
    setInfo({
      ...info,
      comeTrain: {
        ...info.comeTrain,
        arrivalstation: selectedValue.station, // 도착역 이름
        arrivaltime: selectedValue.time, // 도착 시간
      },
    });
  };

  useEffect(() => {
    if (trainGoStation) {
      setInfo((prevInfo) => ({
        ...prevInfo,
        goTrain: {
          ...prevInfo.goTrain,
          departstation: trainGoStation.destination[0].station,
          departtime: trainGoStation.destination[0].time,
          arrivalstation: trainGoStation.origin[0].station,
          arrivaltime: trainGoStation.origin[0].time,
        },
      }));
    } else if (trainComeStation) {
      setInfo((prevInfo) => ({
        ...prevInfo,
        comeTrain: {
          ...prevInfo.comeTrain,
          departstation: trainComeStation.origin[0].station,
          departtime: trainComeStation.origin[0].time,
          arrivalstation: trainComeStation.destination[0].station,
          arrivaltime: trainComeStation.destination[0].time,
        },
      }));
    }
  }, [trainGoStation, trainComeStation, setInfo]);

  if (trainGoStation) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {/* 출발역 */}
        <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
          <div style={{ flexShrink: "0" }}>출발역</div>
          <select
            name="departstation"
            id="departstation"
            onChange={handleDepartChangeOnGo} // 출발역 선택 변경 이벤트
          >
            {trainGoStation.destination.map((train, index) => (
              <option
                key={index}
                value={JSON.stringify({
                  station: train.station,
                  time: train.time,
                })}
              >{`${train.station}(${train.time})`}</option>
            ))}
          </select>
        </div>

        {/* 도착역 */}
        <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
          <div style={{ flexShrink: "0" }}>도착역</div>
          <select
            name="arrivalstation"
            id="arrivalstation"
            onChange={handleArrivalChangeOnGo} // 도착역 선택 변경 이벤트
          >
            {trainGoStation.origin.map((train, index) => (
              <option
                key={index}
                value={JSON.stringify({
                  station: train.station,
                  time: train.time,
                })}
              >{`${train.station}(${train.time})`}</option>
            ))}
          </select>
        </div>
      </div>
    );
  } else if (trainComeStation) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
          <div style={{ flexShrink: "0" }}>출발역</div>
          <select
            name="departstation"
            id="departstation"
            onChange={handleDepartChangeOnCome} // 출발역 선택 변경 이벤트
          >
            {trainComeStation.origin.map((train, index) => (
              <option
                key={index}
                value={JSON.stringify({
                  station: train.station,
                  time: train.time,
                })}
              >{`${train.station}(${train.time})`}</option>
            ))}
          </select>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
          <div style={{ flexShrink: "0" }}>도착역</div>
          <select
            name="arrivalstation"
            id="arrivalstation"
            onChange={handleArrivalChangeOnCome} // 도착역 선택 변경 이벤트
          >
            {trainComeStation.destination.map((train, index) => (
              <option
                key={index}
                value={JSON.stringify({
                  station: train.station,
                  time: train.time,
                })}
              >{`${train.station}(${train.time})`}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }
  return null;
};

export default TrainSelectPlace;
