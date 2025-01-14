import { ImpUserContext } from "../../../App";

import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Header from "../../../components/Header";
import Tab from "./components/Tab";

import iconprev from "../../../assets/icon/icon_previous.svg";
import clipdownarrow from "../../../assets/icon/improved/clip_down_arrow.svg";
// import MyCarousel from "./components/MyCarousel";
import { Carousel, SmallCarousel } from "../../../improved/Carousel";
import BottomModal from "./components/Modal/BottomModal";
import Contents from "../../../components/common/Contents";
import Clip from "./components/Modal/Clip";

import styles from "./ImpLocalTrip.module.css";
import Section from "./components/Section";
import CarouselItems, { CarouselSmallItems } from "./components/CarouselItems";
import ListItems from "./components/ListItems";

const ImpLocalTrip = () => {
  const [selectedLocal, setSelectedLocal] = useState();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [packages, setPackages] = useState([]);

  const [selectedStation, setSelectedStation] = useState([]);

  const navigate = useNavigate();
  const params = useParams();
  const { impInfo, setImpInfo } = useContext(ImpUserContext);

  const changeLocal = (props) => {
    navigate(`/imp/localtrip/${props}`);
  };

  const deleteStation = (node) => {
    setSelectedStation(selectedStation.filter((station) => station !== node));
  };

  // props로 products id가 들어감
  const onClickProduct = (props) => {
    setImpInfo({ ...impInfo, region: params.local });
    navigate(`/imp/seedetail/${props}`);
    console.log(`go to ${params.local} product ... ${props}`);
  };

  useEffect(() => {
    fetch("/data/improved/products.json")
      .then((res) => res.json())
      .then((data) => {
        const [filtereditem] = data.filter(
          (item) => item.local === params.local
        );
        setPackages(filtereditem.list);
        console.log(filtereditem.list);
        console.log(data);
      });
  }, [selectedLocal]);

  /**
   * 지역별여행 맨 처음에 나오는 Carousel
   * position value로 carousel1이 나오는 경우 해당
   */
  const carouselitems = packages.filter((p) =>
    p.position.includes("carousel1")
  );

  // 이렇게 하니까 state로 관리가 안되어서 업데이트가 재때재때 안됨 이슈
  // 그래도 어짜피 강원권 하나만 보여주니까 가능
  const carouselItems = carouselitems.map((i) => (
    <CarouselItems
      key={i.id}
      title={i.title}
      subtitle={i.subtitle}
      img={i.img}
      onClickProduct={() => onClickProduct(i.id)}
    />
  ));

  /**
   * 지역별여행 "바다와 함께 떠나는 낭만 여행" Carousel
   * position value로 carousel2이 나오는 경우 해당
   */
  // 수정 필요
  const carouselitems2 = packages.filter((p) =>
    p.position.includes("carousel2")
  );

  const carouselItems2 = carouselitems2.map((i) => (
    <CarouselSmallItems
      key={i.id}
      title={i.title}
      subtitle={i.subtitle}
      img={i.img}
      price={i.price}
      onClickProduct={() => onClickProduct(i.id)}
    />
  ));

  /**
   * 지역별여행 "예술과 문화를 만나는 특별한 하루" Carousel
   * position value로 carousel3이 나오는 경우 해당
   */
  const carouselitems3 = packages.filter((p) =>
    p.position.includes("carousel3")
  );

  const carouselItems3 = carouselitems3.map((i) => (
    <CarouselSmallItems
      key={i.id}
      title={i.title}
      subtitle={i.subtitle}
      img={i.img}
      price={i.price}
      onClickProduct={() => onClickProduct(i.id)}
    />
  ));

  /**
   * 지역별여행 "지역사랑여행" list1
   * position value로 carousel3이 나오는 경우 해당
   */
  const listitem1 = packages.filter((p) => p.position.includes("list1"));

  const listItem1 = listitem1.map((i) => (
    <ListItems
      key={i.id}
      title={i.title}
      subtitle={i.subtitle}
      img={i.img}
      price={i.price}
      onClickProduct={() => onClickProduct(i.id)}
    />
  ));

  const handlePrev = () => {
    navigate(-1);
  };
  return (
    <Contents>
      <Header
        text="지역별여행"
        imageLeft={iconprev}
        handleClickLeft={handlePrev}
      />
      <main className={styles.wrapper}>
        <Tab changeLocal={changeLocal} selectedLocal={params.local} />
        <div className={styles.carouselwrapper}>
          <Carousel elems={carouselItems} />
        </div>

        <div className={styles.selectedstationwrapper}>
          {/* GTM 측정 */}
          <div
            className={styles.selectlocalbutton}
            id="sort-departure-btn"
            onClick={() => setIsOpenModal(true)}
          >
            <div>출발역 선택</div>
            <img src={clipdownarrow} alt="" />
          </div>
          <div className={styles.selectedlistlist}>
            {selectedStation[0] ? (
              selectedStation.map((node, index) => (
                <Clip key={index} deleteStation={deleteStation}>
                  {node}
                </Clip>
              ))
            ) : (
              <Clip type="default">전체</Clip>
            )}
          </div>
          {/* 궁금증 : 빈 배열은 falsy하지 않은가? */}
        </div>
        {/* 바다와 함께 떠나는 낭만 여행 */}
        {selectedStation[0] ? (
          ""
        ) : (
          <Section
            title="바다와 함께 떠나는 낭만 여행"
            subtitle="푸른 동해와 함께 시원한 바람을 맞으며 즐겨봐요"
            color="secondaryalternative"
          >
            <div className={styles.slideitems}>{carouselItems2}</div>
            {/* <SmallCarousel elems={carouselItems2} /> */}
          </Section>
        )}

        {/* 예술과 문화를 만나는 특별한 하루 */}
        {selectedStation[0] ? (
          ""
        ) : (
          <Section
            title="예술과 문화를 만나는 특별한 하루"
            subtitle="강원도의 문화와 예술을 경험하며 잊지 못할 감동을 만들어봐요"
            color="lightViolet"
          >
            <div className={styles.slideitems}>{carouselItems3}</div>
            {/* <SmallCarousel elems={carouselItems3} /> */}
          </Section>
        )}

        {/* 지역사랑여행 */}
        <Section
          title="지역사랑여행"
          subtitle="다시 잇는 대한민국! 할인에 즐거움을 더하다"
        >
          <div className={styles.bottomlistwrapper}>
            {listItem1}
            {listItem1}
          </div>
        </Section>
      </main>

      {isOpenModal && (
        <BottomModal
          selectedStation={selectedStation}
          setSelectedStation={setSelectedStation}
          setIsOpenModal={setIsOpenModal}
          deleteStation={deleteStation}
        />
      )}
    </Contents>
  );
};

export default ImpLocalTrip;
