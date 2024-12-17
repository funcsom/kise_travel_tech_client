import Section from "../../../components/Section";
import Carousel from "../../../components/Carousel";
import slide1 from "../../../assets/slide1.png";
import slide2 from "../../../assets/slide2.png";

const RecommandedEvent = (props) => {
  return (
    <div>
      <Section title="추천 이벤트" subtitle="코레일에서 추천하는 이벤트">
        {<Carousel elems={[slide1, slide2]} />}
      </Section>
    </div>
  );
};

export default RecommandedEvent;
