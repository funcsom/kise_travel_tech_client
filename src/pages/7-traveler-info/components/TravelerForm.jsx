const TravelerForm = ({ information, setInformation }) => {
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
          <div style={{ display: "flex", gap: "5px", alignContent: "center" }}>
            <input
              type="radio"
              id="m"
              name="gender"
              checked={information.gender === "m"}
              onChange={() => setInformation({ ...information, gender: "m" })}
            />
            <div style={{ position: "relative", top: "2px" }}>남자</div>
          </div>
          <div style={{ display: "flex", gap: "3px", alignContent: "center" }}>
            <input
              type="radio"
              id="w"
              name="gender"
              checked={information.gender === "w"}
              onChange={() => setInformation({ ...information, gender: "w" })}
            />
            <div style={{ position: "relative", top: "2px" }}>여자</div>
          </div>
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
