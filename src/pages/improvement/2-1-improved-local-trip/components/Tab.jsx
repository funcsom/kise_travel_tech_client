import TabItem from "./TabItem";

const Tab = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "0 16px",
        font: "var(--font-b2-no-m)",
        color: "var(--gray-50)",
      }}
    >
      <TabItem text="수도권" />
      <TabItem text="강원권" />
      <TabItem text="충청권" />
      <TabItem text="경상권" />
      <TabItem text="전라권" />
      <TabItem text="제주권" />
    </div>
  );
};

export default Tab;
