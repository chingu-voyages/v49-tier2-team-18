import "./SectionHeader.css";

const SectionHeader = ({ title, dir = "r" }) => {
  return (
    <div
      className="sectionHeader"
      style={{
        flexDirection: dir === "r" ? "row" : "row-reverse",
      }}
    >
      <div className="line" />
      <h3>
        <span className="title">
          {title}
          <span>.</span>
        </span>
      </h3>
    </div>
  );
};

export default SectionHeader;
