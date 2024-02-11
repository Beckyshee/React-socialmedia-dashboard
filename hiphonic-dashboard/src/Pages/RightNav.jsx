import './RightNav.scss'
import ShortCuts from '../components/ShortCuts';
import Contacts from '../components/Contacts';
import Groups from '../components/Groups';

const RightNav = () => {
  return (
    <div>
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

export default RightNav