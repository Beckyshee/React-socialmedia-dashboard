
import timeline from "../assets/timeline.png"
import friends from "../assets/friends.png";
import groups from "../assets/groups.png";
import video from "../assets/video.png";
import photos from "../assets/photo.png";
import events from "../assets/events.png";
import { NavLink } from "react-router-dom";
import "./SideMenu.scss";

function SideMenu() {
    const menuItems = [
      {
        name: "Timeline",
        icon: timeline,
        // path: "/timeline",
      },
      {
        name: "friends",
        icon: friends,
        path: "/friends",
      },
      {
        name: "groups",
        icon: groups,
        path: "/groups",
      },
      {
        // name: "videos",
        icon: video,
        path: "/video",
      },
      {
        name: "photos",
        icon: photos,
        path: "/photos",
      },
      {
        name: "events",
        icon: events,
        path: "/events",
      },
    ];
  return (
    <div className="sidemenu">
      <div className="heading">
        <p>Menu</p>
      </div>
      {menuItems &&
        menuItems.map((item, index) => (
          <div className="menu-item">
            <NavLink
              key={ index }
            to={item.path}
            >
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </NavLink>
          </div>
        ))}
    </div>
  );
}

export default SideMenu