import { useEffect, useState } from "react";

import ListItemWrapper from "../ListItemWrapper";
import PackageListItem from "../PackageListItem";

const SelectPackage = ({
  setStep,
  selectPackage,
  onClickChangeBtn,
  preselectedInfo,
}) => {
  const [packageList, setPackageList] = useState([]);

  useEffect(() => {
    fetch("/data/z-package-info.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log("받아온 데이터 =>", data);
        setPackageList(data);
      });
  }, []);
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
          <div style={{ font: "var(--font-t1-sb)" }}>패키지를 선택해주세요</div>
          <div>1. 25(토), 2인 이용</div>
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
        {packageList.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              {
                onClickChangeBtn && onClickChangeBtn();
              }
              setStep((prev) => prev + 1);
              selectPackage([item.name, item.price]);
            }}
          >
            {preselectedInfo === item.name ? (
              <ListItemWrapper type="selected">
                <PackageListItem
                  name={item.name}
                  reccommandedhead={item.reccommandedhead}
                />
              </ListItemWrapper>
            ) : (
              <ListItemWrapper type="default">
                <PackageListItem
                  name={item.name}
                  reccommandedhead={item.reccommandedhead}
                />
              </ListItemWrapper>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectPackage;
