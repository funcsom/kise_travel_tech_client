import ModalNavBtn from "./ModalNavBtn";
import iconprev from "../../../../../assets/icon/icon_previous.svg";
import { useEffect, useState } from "react";
import StationList from "./StationList";
import Clip from "./Clip";

import styles from "./BottomModal.module.css";

const serviceKey = import.meta.env.VITE_ENCODING;

const BottomModal = () => {
  const [cityCodeList, setCityCodeList] = useState();
  const [selectedCityCode, setSelectedCityCode] = useState(11);
  const [stationList, setStationList] = useState([]);

  const [selectedStation, setSelectedStation] = useState(["서울전체"]);

  // 도시 코드 목록 가져오기
  useEffect(() => {
    fetch(
      `http://apis.data.go.kr/1613000/TrainInfoService/getCtyCodeList?serviceKey=${serviceKey}&_type=json`
    )
      .then((response) => response.json())
      .then((data) => {
        const cityList = data.response.body.items.item;
        setCityCodeList(cityList);
      })
      .catch((error) => {
        console.error("Error fetching city code list:", error);
      });
  }, []);

  // 선택한 도시의 역 목록 가져오기
  useEffect(() => {
    fetch(
      `http://apis.data.go.kr/1613000/TrainInfoService/getCtyAcctoTrainSttnList?serviceKey=${serviceKey}&numOfRows=60&pageNo=1&_type=json&cityCode=${selectedCityCode}`
    )
      .then((response) => response.json())
      .then((data) => {
        const nodelist = data.response.body.items.item;
        setStationList(nodelist);
      })
      .catch((error) => {
        console.error("Error fetching station list:", error);
      });
  }, [selectedCityCode]);

  const changeCity = (code) => {
    setSelectedCityCode(code);
  };

  const addStation = (node) => {
    // 기존에 존재하는 node이면 추가 안하도록 처리
    if (!selectedStation.some((station) => station === node)) {
      setSelectedStation([...selectedStation, node]);
    }
  };

  const deleteStation = (node) => {
    setSelectedStation(selectedStation.filter((station) => station !== node));
  };

  return (
    <div
      className="wrapper"
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        height: "500px",
      }}
    >
      <header
        style={{
          display: "flex",
          width: "100%",
          backgroundColor: "gray",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          borderRadius: "20px 20px 0 0",
        }}
      >
        <img src={iconprev} alt="" />
        <span>지역</span>
        <img src={iconprev} alt="" />
      </header>
      <div
        style={{
          // 스크롤 가능화 영역 height
          height: "300px",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
        }}
      >
        <aside
          className="local"
          style={{
            width: "40%",
            height: "100%",
            overflowY: "auto",
          }}
        >
          {cityCodeList?.map((item, index) => (
            <ModalNavBtn
              key={index}
              text={item.cityname}
              type={selectedCityCode === item.citycode ? "selected" : "default"}
              onClickBtn={() => changeCity(item.citycode)}
            />
          ))}
        </aside>

        <main
          className="localstation"
          style={{
            width: "60%",
            height: "100%",
            overflowY: "auto",
          }}
        >
          {stationList?.map((station, index) => (
            <StationList
              key={index}
              text={station.nodename}
              addStation={addStation}
            />
          ))}
        </main>
      </div>
      <div className={styles.verticalwrap}>
        {selectedStation.map(
          (node, index) => (
            <Clip key={index} deleteStation={deleteStation}>
              {node}
            </Clip>
          ),
          [selectedStation]
        )}
      </div>
    </div>
  );
};

export default BottomModal;
