import Header from "./components/Header";
import Section from "./components/Section";
import styles from "./App.module.css";

function App() {
  const handleclick = (e) => {
    console.log(e);
  };
  return (
    <div className={styles.App}>
      <Header
        handleClickLeft={handleclick}
        text="지역사랑여행"
        handleClickRight={handleclick}
      />
      <main>
        <Section title="추천 이벤트" subtitle="코레일에서 추천하는 이벤트" />
        <Section
          title="지역별 여행 상품"
          subtitle="지역별 대표 패키지 여행 상품"
        />
      </main>
    </div>
  );
}

export default App;
