import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

import "./teamSection.css";

const Team = ({
  name,
  Role,
  profileImg,
  LinkedInProfile,
  GitHubProfile,
  description,
}) => {
  return (
    <div>
      <div className="TeamImage">
        <img src={profileImg} alt="Profile Image" />
      </div>
      <div>
        <div className="info-container">
          <div className="TeamTitle">
            <h4>{name}</h4>
            <div className="TeamTitleLine" />
            <a href={LinkedInProfile} target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href={GitHubProfile} target="_blank" rel="noreferrer">
              <AiFillGithub />
            </a>
          </div>
        </div>
      </div>
      <div className="teamRole">{Role}</div>
      <p className="teamDescription">
        <span>{description}</span>
      </p>
    </div>
  );
};

export default Team;
