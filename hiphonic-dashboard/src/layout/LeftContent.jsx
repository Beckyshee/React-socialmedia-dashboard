import "./LeftContent.scss"
import ShortCuts from "../components/ShortCuts";
import Groups from "../components/Groups";
import Contacts from "../components/Contacts";
import Top from "../components/Top";
import Bottom from "../components/Bottom";
// import Mind from '../components/Mind';
// import Last from '../components/Last'
import Post from '../layout/Post'

function LeftContent() {
  return (
    <div className="leftContent">
      <div className="rightSide">
        <div className="top">
          <Top />
        </div>
        <div className="list-bottom">
          <div className="bottom">
            <Bottom />
          </div>
          <div className="post">
            <Post/>
          </div>
          
        </div>
      </div>
      <div className="leftSide">
        <div className="sidebar-shortCuts">
          <ShortCuts />
        </div>
        <div className="SideProfile">
          <Contacts />
        </div>
        <div className="sidenav-menu">
          <Groups />
        </div>
      </div>
    </div>
  );
}
export default LeftContent