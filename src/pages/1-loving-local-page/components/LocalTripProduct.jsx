import Section from "../../../components/Section";
import LocalTripButton from "./LocalTripButton";
import capital from "../../../assets/image/1-loving-local/capital.jpeg";
import gangwon from "../../../assets/image/1-loving-local/gangwon.jpeg";
import chungcheong from "../../../assets/image/1-loving-local/chungcheong.jpeg";
import gyeongsang from "../../../assets/image/1-loving-local/gyeongsang.jpeg";
import jeolla from "../../../assets/image/1-loving-local/jeolla.jpeg";
import jeju from "../../../assets/image/1-loving-local/jeju.jpeg";

const LocalTripProduct = () => {
  return (
    // GTM 측정
    <div id="orig-loving-local-section">
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
          <LocalTripButton text="수도권" img={capital} linkTo="capital" />
          <LocalTripButton text="강원권" img={gangwon} linkTo="gangwon" />
          <LocalTripButton
            text="충청권"
            img={chungcheong}
            linkTo="chungcheong"
          />
          <LocalTripButton text="경상권" img={gyeongsang} linkTo="gyeongsang" />
          <LocalTripButton text="전라권" img={jeolla} linkTo="jeolla" />
          <LocalTripButton text="제주권" img={jeju} linkTo="jeju" />
        </div>
      </Section>
    </div>
  );
};

export default LocalTripProduct;
