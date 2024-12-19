import Header from "../../components/Header";
import Body from "../../components/common/Body";
import ToggleWrapper from "../../components/common/ToggleWrapper";
import Wrapper from "../../components/common/Wrapper";
import Stepper from "../../components/common/Stepper";
import Product from "../../components/common/Product";
import Button from "../../components/Button";
import TrainInfo from "./components/TrainInfo";

import styles from "./SelectProduct.module.css";
import Progressbar from "../../components/common/Progressbar";
const SelectProduct = (props) => {
  return (
    <div>
      <Header text="상품선택" />
      <Body>
        <Progressbar nthChild={1} />
        <div>
          <ToggleWrapper title="인원선택">
            <Wrapper>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flex: 1,
                  marginBottom: "22px",
                }}
              >
                <div>인원</div>
                <Stepper num={0} />
              </div>
            </Wrapper>
          </ToggleWrapper>
          <ToggleWrapper title="가는열차">
            {trainToGo.map((train, index) => (
              <div key={index}>
                <Wrapper styles={{ borderBottom: "1px solid black" }}>
                  <input type="radio" />
                  <Product title={train.name}>
                    <TrainInfo
                      selectedDate="2024년 12월 18일 (화)"
                      departTime={train.departTime}
                      arrivalTime={train.arrivalTime}
                    />
                  </Product>
                </Wrapper>
              </div>
            ))}
          </ToggleWrapper>
          <ToggleWrapper title="패키지">
            <Wrapper>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1px",
                  flexGrow: "1",
                }}
              >
                {packageProduct.map((product, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input type="checkbox" />
                    <Product title={product.name} />
                  </div>
                ))}
              </div>
            </Wrapper>
          </ToggleWrapper>
          <ToggleWrapper title="오는열차">
            {trainToCome.map((train, index) => (
              <div key={index}>
                <Wrapper styles={{ borderBottom: "1px solid black" }}>
                  <input type="radio" />
                  <Product title={train.name}>
                    <TrainInfo
                      selectedDate="2024년 12월 18일 (화)"
                      departTime={train.departTime}
                      arrivalTime={train.arrivalTime}
                    />
                  </Product>
                </Wrapper>
              </div>
            ))}
          </ToggleWrapper>
        </div>
        <Button text="다음" type="cta" />
      </Body>
    </div>
  );
};

const packageProduct = [
  { name: "관광택시4시간[2인]" },
  { name: "관광택시4시간[3인]" },
  { name: "관광택시4시간[4인]" },
  { name: "관광택시6시간[2인]" },
  { name: "관광택시6시간[3인]" },
  { name: "관광택시6시간[4인]" },
  { name: "관광택시6시간+4시간[2인]" },
  { name: "관광택시6시간+4시간[3인]" },
  { name: "관광택시6시간+4시간[4인]" },
];

const trainToGo = [
  { name: "KTX NNN", departTime: "10:05", arrivalTime: "12:20" },
  { name: "KTX NNN", departTime: "10:05", arrivalTime: "12:20" },
];

const trainToCome = [
  { name: "KTX NNN", departTime: "10:05", arrivalTime: "12:20" },
  { name: "KTX NNN", departTime: "10:05", arrivalTime: "12:20" },
];

export default SelectProduct;
