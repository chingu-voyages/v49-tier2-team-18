/* eslint-disable react/prop-types */
import "./GenericColumn.css";

const GenericColumn = ({ title, links }) => {
  return (
    <div className="generic-column">
      <span className="column-title">{title}</span>
      {links.map((link) => (
        <a href={link.href} key={link.title} className="link">
          {link.Icon && <link.icon />}
          {link.title}
        </a>
      ))}
    </div>
  );
};

export default GenericColumn;
