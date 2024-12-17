import Section from "../../../../components/Section";
import Carousel from "../../../../components/Carousel";
import train1 from "../../../../assets/train1.png";
import train2 from "../../../../assets/train2.png";
import train3 from "../../../../assets/train3.png";
import train4 from "../../../../assets/train4.png";
import train5 from "../../../../assets/train5.png";
import train6 from "../../../../assets/train6.png";

const train = [train1, train2, train3, train4, train5, train6];

const PeroidicTourTrain = (props) => {
  return (
    <div>
      <Section
        title="정기관광열차"
        subtitle="동해·협곡·남도·아리랑·서해금빛열차"
      >
        <Carousel elems={train} />
        <button
          style={{
            padding: "1rem 1rem",
            backgroundColor: "#fbfbfb",
            color: "#0066B3",
            margin: "auto",
            border: "1px solid #E4E4E4",
            borderRadius: "8px",
          }}
        >
          대표 여행 패키지 보기
        </button>
      </Section>
    </div>
  );
};

export default PeroidicTourTrain;
