import { useState, useEffect } from "react";

import Button from "../../../../improved/Button";
import styles from "./RatingComponent.module.css";

import iconhandle from "../../../../assets/icon/improved/icon_handle.svg";
import SmallStarsWrapper from "./SmallStarsWrapper";

import { createClient } from "@supabase/supabase-js";
import RatingStarsBig from "../../../../improved/ratingstars/RatingStarsBig";

const supabaseUrl = "https://dmnwlbcyraeorvinztsy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtbndsYmN5cmFlb3J2aW56dHN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY1ODEwMjcsImV4cCI6MjA1MjE1NzAyN30.RGD73XJC3nmJZKUdFB5MyPycEsoG8SrRu5lGCEjSmsc";

const RatingComponent = ({ closeModal }) => {
  const [isClickedBigStar, setIsClickedBigStar] = useState(false);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // supabase 키

  const supabase = createClient(supabaseUrl, supabaseKey);

  // CTA 버튼 클릭 시, Supabase의 database로 데이터 이동시키는 함수
  async function recordHandeler({ r0, r1, r2, r3, r4 }) {
    const { data, error } = await supabase
      .from("ut_test_middle")
      // UT 진행 시 활성화시키기
      // .fron("kise_user_test_result")
      .insert([{ R1: r0, Q1: r1, Q2: r2, Q3: r3, Q4: r4 }]);
  }

  // 제일 중요한 supabase에 저장될 데이터들
  const [bigRating, setBigRating] = useState(0);
  const [smallRating, setSmallRating] = useState({
    star1: 0,
    star2: 0,
    star3: 0,
    star4: 0,
  });

  // CTA 버튼 클릭 핸들러
  const onClickCTAButton = () => {
    recordHandeler({
      r0: bigRating,
      r1: smallRating.star1,
      r2: smallRating.star2,
      r3: smallRating.star3,
      r4: smallRating.star4,
    });
  };

  return (
    <div className={styles.Modal}>
      <div className={styles.alert}>
        <div className={styles.headerwrapper}>
          <div className={styles.header}>
            <div>
              <img src={iconhandle} alt="" />
            </div>
            <span>예약 과정이 만족스러웠나요?</span>
          </div>
          <div className={styles.bigstar}>
            {/* <BigStars
              setIsClickedBigStar={setIsClickedBigStar}
              rating={bigRating}
              setRating={setBigRating}
            /> */}
            <RatingStarsBig
              setIsClickedBigStar={setIsClickedBigStar}
              rating={bigRating}
              setRating={setBigRating}
            />
          </div>
        </div>

        <SmallStarsWrapper
          isClickedBigStar={isClickedBigStar}
          setComplete={() => setComplete(true)}
          smallRating={smallRating}
          setSmallRating={setSmallRating}
        />
      </div>
      <div className={styles.buttonwrapper}>
        <Button
          type="primary"
          state={complete ? "default" : "disabled"}
          size="large"
          shape="box"
          rate="r1"
          onClickButton={() => {
            onClickCTAButton();
            closeModal();
          }}
        >
          평가하기
        </Button>
      </div>
    </div>
  );
};

export default RatingComponent;
