import React from "react";
import ShortCuts from "../components/ShortCuts";
import SideProfile from "../components/SideProfile";
import SideMenu from "../components/SideMenu";
import './SideNav.scss'

function SideNav() {
  return (
    <div className="sidenav">
      <div className="SideProfile">
        <SideProfile />
      </div>
      <div className="sidenav-menu">
        <SideMenu />
      </div>
      <div className="sidebar-shortCuts">
        <ShortCuts />
      </div>
    </div>
  );
}

export default SideNav;
