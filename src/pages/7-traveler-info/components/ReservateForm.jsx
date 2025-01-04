const ReservateForm = ({ information, setInformation }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "22px",
      }}
    >
      <span style={{ font: "var(--font-orig-b4)" }}>
        변경이 필요한 부분을 선택해 수정하실 수 있습니다
      </span>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "13px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "11px",
          }}
        >
          <span style={{ display: "block", font: "var(--font-orig-b3-m)" }}>
            이름
          </span>
          <input
            type="text"
            style={{ width: "150px" }}
            value={information.reserveName}
            onChange={(e) =>
              setInformation({ ...information, reserveName: e.target.value })
            }
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "11px",
          }}
        >
          <span style={{ display: "block" }}>생년월일</span>
          <input
            type="text"
            style={{ width: "150px" }}
            value={information.dob}
            onChange={(e) =>
              setInformation({ ...information, dob: e.target.value })
            }
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "11px",
            }}
          >
            <span style={{ display: "block" }}>휴대폰번호</span>
            <input
              type="text"
              style={{ width: "150px" }}
              value={information.phone}
              onChange={(e) =>
                setInformation({ ...information, phone: e.target.value })
              }
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "11px",
            }}
          >
            <span style={{ display: "block" }}>이메일주소</span>
            <input
              type="email"
              style={{ width: "225px" }}
              value={information.email}
              onChange={(e) =>
                setInformation({ ...information, email: e.target.value })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservateForm;
