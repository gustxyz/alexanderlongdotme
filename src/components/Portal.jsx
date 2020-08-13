import React from "react";
import ReactDOM from "react-dom";

const Portal = ({ children, exitPortalId }) => {
  console.log(document.getElementById(exitPortalId));
  console.log("in portal");

  if (!document.getElementById(exitPortalId)) {
    return <div>PORTAL ERROR</div>;
  }
  return ReactDOM.createPortal(
    <>{children}</>,
    document.getElementById(exitPortalId)
  );
};

export default Portal;
