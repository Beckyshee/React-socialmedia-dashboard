import { useState } from "react";
import logo from "../assets/logo.png";
import sidebar from "../assets/sidebar.png";
import Searchform from "../components/Searchform";
import Avatar from "../assets/avatar.png";
import Chevrondown from "../assets/Chevrondown.png";
import Notifications from "../assets/notifications.png";
import Messages from "../assets/messages.png";
import "./Navbar.scss";
import NotificationsPage from "../Pages/NotificationsPage";
// import { NavLink } from "react-router-dom";

function Navbar ()
{
  const [notification, setNotification] = useState(false);

  const toggleNotification = () => {
    setNotification(!notification);
  };
  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img src={sidebar} alt="noimage" />
          <div className="nav-logo-text">
            <img src={logo} alt="noimage" />
            <h2>Hiphonic</h2>
          </div>
        </div>

        <div className="nav-body">
          <Searchform />
          <div className="nav-right-body">
            <img src={Messages} alt="noimage" />
            {/* <NavLink to="/notification"> */}
            <img
              src={Notifications}
              alt="noimage"
              onClick={toggleNotification}
            />

            <div className="profile">
              <img src={Avatar} alt="noimage" />
              <img src={Chevrondown} alt="noimage" />
            </div>
          </div>
        </div>
        {notification && (
          <div className="notifications-main">
            <NotificationsPage />
          </div>
        )}
      </div>
      {/* <NotificationsPage/> */}
    </>
  );
}
export default Navbar;
