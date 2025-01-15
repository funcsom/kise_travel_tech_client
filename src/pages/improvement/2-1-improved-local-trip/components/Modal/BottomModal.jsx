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

const stationlist = [
  "서울",
  "청량리",
  "상봉",
  "양평",
  "만종",
  "횡성",
  "평창",
  "진부",
  "정동진",
  "묵호",
  "동해",
  "덕소",
  "용문",
  "지평",
  "석불",
  "일신",
  "매곡",
  "양동",
  "삼산",
  "서원주",
  "원주",
  "제천",
  "영월",
  "예미",
  "민둥산",
  "사북",
  "고한",
  "태백",
  "동백산",
  "도계",
  "신기",
];

const neededLocal = ["서울특별시", "경기도", "강원도", "충청북도"];

const BottomModal = ({
  selectedStation,
  setSelectedStation,
  setIsOpenModal,
  deleteStation,
}) => {
  const [cityCodeList, setCityCodeList] = useState();
  const [selectedCityCode, setSelectedCityCode] = useState(11);
  const [stationList, setStationList] = useState([]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    console.log(stationList);
  }, [stationList]);

  // 상의 이후 확정할 코드
  // 도시 코드 목록 가져오기
  useEffect(() => {
    fetch(
      `https://apis.data.go.kr/1613000/TrainInfoService/getCtyCodeList?serviceKey=${serviceKey}&_type=json`
    )
      .then((response) => response.json())
      .then((data) => {
        const cityList = data.response.body.items.item;

        // 아래의 setCityCodeList(cityList); 주석을 해제시키고 filteredList에 관해서 지우면 모든 로컬을 확인할 수 있음
        const filteredList = cityList.filter((node) =>
          neededLocal.includes(node.cityname)
        );

        // setCityCodeList(cityList);
        setCityCodeList(filteredList);
      })
      .catch((error) => {
        console.error("Error fetching city code list:", error);
      });
  }, []);

  // 선택한 도시의 역 목록 가져오기
  useEffect(() => {
    fetch(
      `https://apis.data.go.kr/1613000/TrainInfoService/getCtyAcctoTrainSttnList?serviceKey=${serviceKey}&numOfRows=60&pageNo=1&_type=json&cityCode=${selectedCityCode}`
    )
      .then((response) => response.json())
      .then((data) => {
        const nodelist = data.response.body.items.item;

        // 아래의 setStationList(nodelist); 주석을 해제시키고 filteredList에 관해서 지우면 모든 출발역을 확인할 수 있음
        const filteredList = nodelist.filter((node) =>
          stationlist.includes(node.nodename)
        );

        // setStationList(nodelist);
        setStationList(filteredList);
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

  return (
    <div className={styles.Modal}>
      <div className={styles.alert}>
        <header className={styles.header}>
          {/* 리셋 버튼 */}
          <button>
            <img src="" alt="" />
          </button>
          <span>출발역 선택</span>

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
                text={`${station.nodename}역`}
                addStation={addStation}
                type={
                  selectedStation.includes(`${station.nodename}역`) &&
                  "selected"
                }
              />
            ))}
          </main>
        </div>

        {/* 선택한 출발역 리스트 나열 (좌우스크롤) */}
        <div className={styles.selectedlist}>
          <div className={styles.selectedlistheader}>
            <div>선택한 출발역</div>
            <div>
              {/* 리셋 버튼 */}
              <button onClick={() => setSelectedStation([])}>
                <img src={resetbutton} alt="" />
              </button>
            </div>
          </div>

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
          <Button
            type="primary"
            state="default"
            size="large"
            shape="box"
            onClickButton={() => setIsOpenModal(false)}
          >
            선택완료
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BottomModal;
