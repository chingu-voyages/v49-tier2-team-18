import { TEAM_INFORMATION } from "../../constants/TeamInformation";
import SectionHeader from "../utils/SectionHeader";
import Team from "./Team";
import "./teamSection.css";

const TeamSection = () => {
  return (
    <section className="section-wrapper body" id="teamSection">
      <SectionHeader title="Team" dir="r" />

      <div className="Teams">
        {TEAM_INFORMATION.map((info) => {
          return <Team key={info.name} {...info} />;
        })}
      </div>
    </section>
  );
};

export default TeamSection;
