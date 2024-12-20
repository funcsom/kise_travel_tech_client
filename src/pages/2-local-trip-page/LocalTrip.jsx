import { useEffect, useState } from "react";
import Header from "../../components/Header";
import SelectLocal from "./components/SelectLocal";
import TripBestList from "./components/TripBestList";
import TripList from "./components/TripList";

import styles from "./LocalTrip.module.css";

const localIs = "gangwon";

const LocalTrip = (props) => {
  const [local, setLocal] = useState(localIs);
  const [products, setProducts] = useState([]); // 초기값을 빈 배열로 설정
  const [selectedLocal, setSelectedLocal] = useState([]);
  const [localBestProd, setLocalBestProd] = useState({});
  const [localProds, setLocalProds] = useState([]);

  const changeLocal = (props) => {
    setLocal(props);
  };

  useEffect(() => {
    // 렌더링 시, local-trip.json 파일을 가져올 수 있도록 함
    fetch("data/local-trip.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("데이터 받아와짐?", data);
        setProducts(data);
      });
  }, []);

  useEffect(() => {
    // local 상태 변경시, products에서 다른 지역 뽑아와서 seletedLocal 변수에 삽입
    if (products.length > 0) {
      const filteredProducts = products.filter((prod) => prod.local === local);
      setSelectedLocal(filteredProducts);
      setLocalBestProd(filteredProducts[0].Best);
      setLocalProds(filteredProducts[0].List);
    }
  }, [local, products]);

  const handleclick = (e) => {
    console.log(e);
  };

  return (
    <div className={styles.LocalTrip}>
      <Header
        handleClickLeft={handleclick}
        text="지역별여행"
        handleClickRight={handleclick}
      />
      <SelectLocal currentLocal={localIs} onChange={changeLocal} />
      <div
        style={{
          padding: "12px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <TripBestList title={localBestProd.title} price={localBestProd.price} />
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {localProds.map((prod) => (
            <TripList key={prod.id} title={prod.title} price={prod.price} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocalTrip;
