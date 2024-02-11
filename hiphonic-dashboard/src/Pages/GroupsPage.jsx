
import Navbar from "../layout/Navbar";
import SideNav from "../layout/SideNav";
import GroupTop from "./GroupTop";
import GroupsBottom from "./GroupsBottom";
import "./GroupsPage.scss";
import RightNav from "./RightNav";



const GroupsPage = () => {
  return (
    <div className="groupy">
      <Navbar/>
      <SideNav />
      <RightNav />
      <div className="groupy-middle">
        <GroupTop />
        <GroupsBottom />
      </div>
    </div>
  );
}

export default GroupsPage