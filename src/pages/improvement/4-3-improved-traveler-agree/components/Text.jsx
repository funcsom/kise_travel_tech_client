import styles from "./Text.module.css";

const Text = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.Text}>
        &nbsp;· 개인정보의 제3자 제공
        <br />* 한국철도공사는 정보주체의 개인정보를 제1조(개인정보의 처리
        목적)에서 명시한 범위 내에서만처리하며, 정보주체의 동의, 법류의 특별한
        규정 등 ⌜개인정보 보호법⌟ 제17조 및 제18조에 해당하는 경우에만
        개인정보를 제3자에게 제공합니다.
        <br />* 한국철도공사는 다음과 같이 개인정보를 제3자에게 제공하고
        있습니다.
      </div>
      <div className={styles.Textwrapper}>
        <div className={styles.Text}>
          &nbsp;1. 철도회원정보, 예약자 및 여행자 정보
        </div>
        <div className={styles.Bold}>- 제공받는 자: 상품운영여행사</div>
        <div className={styles.Bold}>- 제공목적: 예약 당해 상품 제공</div>
        <div className={styles.Text}>- 제공근거: 정보주체의 동의</div>
        <div className={styles.Text}>
          - 제공항목: 이름, 성별, 휴대전화, 생년월일, 이메일
        </div>
        <div className={styles.Bold}>
          - 제공받는 자의 이용기간: 정보주체의 당해 상품 이용 종료 시점까지
        </div>
        <div className={styles.Text}>
          - 수집 동의 거부 및 불이익: 개인정보의 제3자 제공에 동의하지 않을
          권리가있으나 거부 시 당해 상품 이용이 제한됩니다.
        </div>
      </div>
    </div>
  );
};

export default Text;
