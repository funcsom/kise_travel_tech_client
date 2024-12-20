import Header from "../../components/Header";
import Body from "../../components/common/Body";
import Progressbar from "../../components/common/Progressbar";
import ToggleWrapper from "../../components/common/ToggleWrapper";
import Wrapper from "../../components/common/Wrapper";
import Product from "../../components/common/Product";
import TrainInfo from "./components/TrainInfo";
import Button from "../../components/Button";

import TrainSelectPlace from "./components/TrainSelectPlace";
import HeadCounting from "./components/HeadCounting";

const SelectDetail = (props) => {
  return (
    <div>
      <Header text="예약인원" />
      <Body>
        <Progressbar nthChild={2} />
        <div>
          <ToggleWrapper title="가는열차">
            {/* 수정 */}
            {trainToGo.map((train, index) => (
              <div key={index}>
                <Wrapper styles={{ borderBottom: "1px solid black" }}>
                  <Product title={train.name}>
                    <TrainInfo
                      selectedDate="2024년 12월 18일 (화)"
                      departPlace={train.departPlace}
                      departTime={train.departTime}
                      arrivalPlace={train.arrivalPlace}
                      arrivalTime={train.arrivalTime}
                    />
                    <div
                      style={{
                        padding: "14px 24px",
                      }}
                    >
                      <TrainSelectPlace />
                    </div>
                    <div
                      style={{
                        padding: "16px 40px",
                        borderTop: "1px solid var(--color-white)",
                      }}
                    >
                      <HeadCounting />
                    </div>
                  </Product>
                </Wrapper>
              </div>
            ))}
          </ToggleWrapper>
          <ToggleWrapper title="패키지">
            <Wrapper>
              <Product title="관광택시6시간+4시간[2인]">
                <div
                  style={{
                    padding: "16px 40px",
                    borderTop: "1px solid var(--color-white)",
                  }}
                >
                  <HeadCounting />
                </div>
              </Product>
            </Wrapper>
          </ToggleWrapper>
          <ToggleWrapper title="오는열차">
            {trainToCome.map((train, index) => (
              <div key={index}>
                <Wrapper styles={{ borderBottom: "1px solid black" }}>
                  <Product title={train.name}>
                    <TrainInfo
                      selectedDate="2024년 12월 18일 (화)"
                      departPlace={train.departPlace}
                      departTime={train.departTime}
                      arrivalPlace={train.arrivalPlace}
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

const trainToGo = [
  {
    name: "KTX NNN",
    departPlace: "청량리",
    departTime: "10:05",
    arrivalPlace: "동해",
    arrivalTime: "12:20",
  },
];

const trainToCome = [
  {
    name: "KTX NNN",
    departPlace: "청량리",
    departTime: "10:05",
    arrivalPlace: "동해",
    arrivalTime: "12:20",
  },
];

export default SelectDetail;
