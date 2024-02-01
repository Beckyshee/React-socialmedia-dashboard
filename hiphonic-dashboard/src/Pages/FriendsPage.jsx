import './FriendsPage.scss'
import Navbar from '../layout/Navbar';
import SideNav from '../layout/SideNav';

import Friends from '../layout/Friends';
import ShortCuts from '../components/ShortCuts';
import Contacts from '../components/Contacts';
import Groups from '../components/Groups';

const FriendsPage = () => {
  return (
    <div className="contains">
      <div className="navy-bar">
        <Navbar />
      </div>

      <div className="sid-bar">
        <SideNav />
      </div>
      <div className="friendship">
        <Friends />
      </div>
      <div className="right-section">
        <ShortCuts />
        <Contacts />
        <Groups />
      </div>
    </div>
  );
}

export default FriendsPage