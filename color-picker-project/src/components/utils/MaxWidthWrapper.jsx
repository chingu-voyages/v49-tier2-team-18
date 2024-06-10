/* eslint-disable react/prop-types */
import "./MaxWidthWrapper.css";

export const MaxWidthWrapper = ({ children, className = "" }) => {
  return <div className={`max-width-wrapper ${className}`}>{children}</div>;
};
