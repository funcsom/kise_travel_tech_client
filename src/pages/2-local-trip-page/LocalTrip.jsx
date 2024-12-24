import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import SelectLocal from "./components/SelectLocal";
import TripBestList from "./components/TripBestList";
import TripList from "./components/TripList";

import styles from "./LocalTrip.module.css";

const LocalTrip = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [selectedLocal, setSelectedLocal] = useState(params.local); // 선택한 지역 이름 저장
  const [products, setProducts] = useState([]); // 받아온 전체 데이터 저장
  const [localBestProd, setLocalBestProd] = useState({}); // 선택한 지역 관광명소 중 Best 여행지 저장
  const [localProds, setLocalProds] = useState([]); // 선택한 지역 관광명소 저장

  const changeLocal = (props) => {
    setSelectedLocal(props);
  };

  const onClickProduct = () => {
    navigate("/selectproduct");
  };

  useEffect(() => {
    // 렌더링 시, local-trip.json 파일을 가져올 수 있도록 함
    fetch("/data/local-trip.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("받아온 데이터 =>", data);
        setProducts(data);
      });
  }, []);

  useEffect(() => {
    // local 상태 변경시, products에서 다른 지역 뽑아와서 seletedLocal 변수에 삽입
    if (products.length > 0) {
      const filteredProducts = products.filter(
        (prod) => prod.local === selectedLocal
      );
      setLocalBestProd(filteredProducts[0].Best);
      setLocalProds(filteredProducts[0].List);
    }
  }, [selectedLocal, products]);

  return (
    <div className={styles.LocalTrip}>
      <Header text="지역별여행" />
      <SelectLocal currentLocal={params.local} onChange={changeLocal} />
      <div
        style={{
          padding: "12px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <TripBestList
          onClickProduct={onClickProduct}
          title={localBestProd.title}
          price={localBestProd.price}
        />
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {localProds.map((prod) => (
            <TripList
              onClickProduct={onClickProduct}
              key={prod.id}
              title={prod.title}
              price={prod.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocalTrip;
