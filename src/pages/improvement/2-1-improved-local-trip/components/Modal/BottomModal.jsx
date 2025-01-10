import ModalNavBtn from "./ModalNavBtn";
import iconprev from "../../../../../assets/icon/icon_previous.svg";
import { useEffect, useState } from "react";
import StationList from "./StationList";
import Clip from "./Clip";
import Button from "../../../../../improved/Button";

import styles from "./BottomModal.module.css";
import xbutton from "../../../../../assets/icon/improved/x_button.svg";
import resetbutton from "../../../../../assets/icon/improved/reset_button.svg";

const serviceKey = import.meta.env.VITE_ENCODING;

const BottomModal = ({
  selectedStation,
  setSelectedStation,
  setIsOpenModal,
}) => {
  const [cityCodeList, setCityCodeList] = useState();
  const [selectedCityCode, setSelectedCityCode] = useState(11);
  const [stationList, setStationList] = useState([]);

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
    <div className={styles.Modal}>
      <div className={styles.alert}>
        <header className={styles.header}>
          {/* 리셋 버튼 */}
          <button onClick={() => setSelectedStation([])}>
            <img src={resetbutton} alt="" />
          </button>
          <span>지역</span>

          {/* x 버튼 */}
          <button onClick={() => setIsOpenModal(false)}>
            <img src={xbutton} alt="" />
          </button>
        </header>
        <div className={styles.selectionswrapper}>
          <aside className={styles.local}>
            {cityCodeList?.map((item, index) => (
              <ModalNavBtn
                key={index}
                text={item.cityname}
                type={
                  selectedCityCode === item.citycode ? "selected" : "default"
                }
                onClickBtn={() => changeCity(item.citycode)}
              />
            ))}
          </aside>

          <main className={styles.node}>
            {stationList?.map((station, index) => (
              <StationList
                key={index}
                text={station.nodename}
                addStation={addStation}
                type={selectedStation.includes(station.nodename) && "selected"}
              />
            ))}
          </main>
        </div>

        {/* 선택한 출발역 리스트 나열 (좌우스크롤) */}
        <div className={styles.selectedlist}>
          <div className={styles.selectedlistheader}>선택한 출발역</div>
          <div className={styles.selectedlistlist}>
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

        {/* 선택완료 버튼 */}
        <div style={{ display: "flex" }}>
          <Button type="primary" state="default" size="large" shape="box">
            선택완료
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BottomModal;
