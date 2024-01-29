import React from "react";
import SideNav from "./SideNav"
import LeftContent from "./LeftContent"
import "./MainBody.scss"



const MainBody = () => {
  return (
    <div className="body_container">
      <SideNav />
      <LeftContent />
     
    </div>
  );
};

export default MainBody;
