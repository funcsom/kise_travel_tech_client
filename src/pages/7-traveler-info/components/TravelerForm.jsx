const TravelerForm = (props) => {
  return (
    <div
      style={{
        padding: "21px 41px",
        backgroundColor: "var(--color-gray-100)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "22px",
        flex: "1",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>성별</span>
        <div
          style={{
            width: "130px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <label htmlFor="gender-man">
            <input type="radio" id="gender-man" name="gender" /> 남자
          </label>
          <label htmlFor="gender-woman">
            <input type="radio" id="gender_woman" name="gender" /> 여자
          </label>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ display: "block" }}>이름</span>
        <div>
          <input type="text" style={{ width: "130px" }} />
        </div>
      </div>
    </div>
  );
};

export default TravelerForm;
