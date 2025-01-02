// 해당 페이지에서 context local과 product가 정해져야 함
// -> 다음 페이지에서는 date가 정해지고
// -> 다다음 페이지에서는 date를 반영한 product 내의 goTrain, comeTrain, package가 렌더링되고 결정되어야 함

import { UserContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import SelectLocal from "./components/SelectLocal";
import Body from "../../components/common/Body";
import TripBestList from "./components/TripBestList";
import TripList from "./components/TripList";

import iconprev from "../../assets/icon/icon_previous.svg";
import styles from "./LocalTrip.module.css";

const LocalTrip = () => {
  const { info, setInfo } = useContext(UserContext);
  const params = useParams();
  const navigate = useNavigate();

  const [selectedLocal, setSelectedLocal] = useState(params.local); // selectedLocal state에 초기값 설정
  const [localBestProd, setLocalBestProd] = useState([]); // 받아온 지역별 Best 상품을 저장하는 state
  const [localProds, setLocalProds] = useState([]); // 받아온 지역별 상품을 저장하는 state

  // 지역 선택 시, url param이 변경되며 selectedLocal state 변경으로 useEffect 실행되도록 함
  const changeLocal = (props) => {
    navigate(`/localtrip/${props}`);
    setSelectedLocal(props);
  };

  // 상품 클릭 시 다음 페이지로 넘어가는 기능
  const onClickProduct = (prod) => {
    navigate("/selectdate");
    setInfo({
      ...info,
      region: `${selectedLocal}`,
      product: { name: prod[0], price: prod[1] },
    });
    // console.log(info);
  };

  // header 뒤로가기 버튼 클릭 시 이전 페이지로 넘어가는 기능
  const handlePrev = () => {
    navigate(-1);
  };

  // selectedLocal state 변경 시, localBestProd, localProd 업데이트하는 기능
  useEffect(() => {
    fetch(`/data/${selectedLocal}-product.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("받아온 데이터 =>", data);
        setLocalBestProd(data.Best);
        setLocalProds(data.List);
      });
  }, [selectedLocal]);

  return (
    <div className={styles.LocalTrip}>
      <Header
        text="지역별여행"
        imageLeft={iconprev}
        handleClickLeft={handlePrev}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "8px 12px",
          backgroundColor: "white",
        }}
      >
        <SelectLocal currentLocal={params.local} onChange={changeLocal} />
      </div>
      <Body>
        <p style={{ font: "var(--font-b3-b)" }}>
          {`${enToKo[selectedLocal]}권 Best 여행지`}
        </p>
        <TripBestList onClickProduct={onClickProduct} prods={localBestProd} />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "13.5px",
            marginTop: "9px",
          }}
        >
          {localProds.map((prod) => (
            <TripList
              onClickProduct={onClickProduct}
              key={prod.id}
              title={prod.title}
              price={prod.price}
              img={prod.img}
            />
          ))}
        </div>
      </Body>
    </div>
  );
};

export default LocalTrip;

const enToKo = {
  capital: "수도",
  gangwon: "강원",
  chungcheong: "충청",
  gyeongsang: "경상",
  jeolla: "전라",
  jeju: "제주",
};
