import { useState, useEffect } from "react";

import Button from "../../../../improved/Button";
import styles from "./RatingComponent.module.css";
import BigStars from "./BigStars";
import SmallStars from "./SmallStars";

import iconhandle from "../../../../assets/icon/improved/icon_handle.svg";
import SmallStarsWrapper from "./SmallStarsWrapper";

import { createClient } from "@supabase/supabase-js";

/**
 *
 * supabase code ...
 */
const supabaseUrl = "https://dmnwlbcyraeorvinztsy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtbndsYmN5cmFlb3J2aW56dHN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY1ODEwMjcsImV4cCI6MjA1MjE1NzAyN30.RGD73XJC3nmJZKUdFB5MyPycEsoG8SrRu5lGCEjSmsc";

const supabase = createClient(supabaseUrl, supabaseKey);

// 선택하기 CTA 버튼을 눌렀을 때 전체적으로 전달할 수 있도록 해야함
async function recordHandeler({ r0, r1, r2, r3, r4 }) {
  const { data, error } = await supabase
    .from("UT_result")
    .insert([{ R1: r0, Q1: r1, Q2: r2, Q3: r3, Q4: r4 }]);
  // .select();
}

const RatingComponent = ({ openNoti }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const onClickCTAButton = () => {};

  // 제일 중요한 supabase에 저장될 데이터들
  const [bigRating, setBigRating] = useState(0);
  const [smallRating, setSmallRating] = useState({
    star1: 0,
    star2: 0,
    star3: 0,
    star4: 0,
  });

  return (
    <div className={styles.Modal}>
      <div className={styles.alert} onClick={(e) => e.stopPropagation()}>
        <div className={styles.headerwrapper}>
          <div className={styles.header}>
            <div>
              <img src={iconhandle} alt="" />
            </div>
            <span>예약 과정이 만족스러웠나요?</span>
          </div>
          <div className={styles.bigstar}>
            <BigStars
              setIsClicked={setIsClicked}
              rating={bigRating}
              setRating={setBigRating}
            />
          </div>
        </div>
        <SmallStarsWrapper
          isClicked={isClicked}
          setComplete={() => setComplete(true)}
        />
      </div>
      <div className={styles.buttonwrapper}>
        <Button
          type="primary"
          state={complete ? "default" : "disabled"}
          size="large"
          shape="box"
          rate="r1"
          onClickButton={openNoti}
        >
          평가하기
        </Button>
      </div>
    </div>
  );
};

export default RatingComponent;
