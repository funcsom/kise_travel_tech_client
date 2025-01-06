const AgreeText = (props) => {
  return (
    <div
      style={{
        font: "var(--font-orig-b1)",
        color: "var(--color-gray-400)",
        padding: "16px 14px",
      }}
    >
      ○ 개인정보의 제3자 제공
      <br />* 한국철도공사는 정보주체의 개인정보를 제1 조(개인정보의
      처리목적)에서 명시한 범위 내 에서만 처리하며, 정보주체의 동의, 법류의
      특별한 규정 등 「개인정보 보호법』 제17조 및 제 18조에 해당하는 경우에만
      개인정보를 제3자 에게 제공합니다.
      <br />* 한국철도공사는 다음과 같이개인정보를 제 3자에게 제공하고 있습니다.
      <br />
      <br />
      1. 철도회원정보, 예약자 및 여행자 정보
      <br />
      <strong style={{ fontWeight: "700" }}>
        - 제공받는 자 : 상품운영여행사
      </strong>
      <br />
      <strong style={{ fontWeight: "700" }}>
        - 제공목적 : 예약 당해 상품 제공
      </strong>
      <br />- 제공근거 : 정보주체의 동의
      <br />- 제공항목 : 이름, 성별, 휴대전화, 생년월일, 이메일
      <br />
      <strong style={{ fontWeight: "700" }}>
        - 제공받는 자의 이용기간 : 정보주체의 당해 상품 이용 종료 시점까지
      </strong>
      <br />- 수집 동의 거부 및 불이익 : 개인정보의 제 3자 제공에 동의하지 않을
      권리가 있으나 거부 시 당해 상품 이용이 제한됩니다.
    </div>
  );
};

export default AgreeText;
