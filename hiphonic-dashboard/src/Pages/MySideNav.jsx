import ShortCuts from '../components/ShortCuts';
import SideMenu from '../components/SideMenu';
import SideProfile from '../components/SideProfile';
import './MySideNav.scss'

const MySideNav = () => {
  return (
    <div>
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
    </div>
  );
}

export default MySideNav