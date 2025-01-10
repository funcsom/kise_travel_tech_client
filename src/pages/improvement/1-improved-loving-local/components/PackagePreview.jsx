import styles from "./PackagePreview.module.css";
import { useNavigate } from "react-router-dom";
import seemorearrow from "../../../../assets/icon/improved/see_more_arrow.svg";
import { useEffect, useState } from "react";

const PackagePreview = ({ selectedLocal }) => {
  const navigate = useNavigate();

  const [packages, setPackages] = useState([]);

  const onClickButton = () => {
    navigate(`/imp/localtrip/${selectedLocal}`);
  };

  const onClickPackage = () => {
    console.log("클릭한 패키지 상세페이지로 이동합니다.");
  };

  useEffect(() => {
    fetch("/data/improved/packages.json")
      .then((res) => res.json())
      .then((data) => {
        const [filtereditem] = data.filter(
          (item) => item.local === selectedLocal
        );
        setPackages(filtereditem.list);
      });
  }, [selectedLocal]);

  return (
    <div className={styles.PackagePreview}>
      <div className={styles.header}>
        <div>{`#${enToKo[selectedLocal]}권 패키지`}</div>
        <button className={styles.seemorebtn} onClick={onClickButton}>
          더보기 <img src={seemorearrow} alt="" />
        </button>
      </div>
      <div className={styles.listswrapper}>
        {packages.map((p, index) => (
          <div
            key={index}
            className={styles.listwrapper}
            onClick={onClickPackage}
          >
            <div className={styles.imagewrapper}></div>
            <div className={styles.textwrapper}>
              <div className={styles.listtitle}>{p.title}</div>
              <span className={styles.listsubtitle}>{p.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackagePreview;

const enToKo = {
  capital: "수도",
  gangwon: "강원",
  chungcheong: "충청",
  gyeongsang: "경상",
  jeolla: "전라",
  jeju: "제주",
};
