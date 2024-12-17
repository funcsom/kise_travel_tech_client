import Section from "../../../../components/Section";
import LocalTripButton from "./LocalTripButton";

const LocalTripProduct = (props) => {
  return (
    <div>
      <Section title="지역별 여행 상품" subtitle="지역별 대표 패키지 여행 상품">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
            margin: "8px",
          }}
        >
          <LocalTripButton text="수도권" />
          <LocalTripButton text="수도권" />
          <LocalTripButton text="수도권" />
          <LocalTripButton text="수도권" />
          <LocalTripButton text="수도권" />
          <LocalTripButton text="수도권" />
        </div>
      </Section>
    </div>
  );
};

export default LocalTripProduct;
