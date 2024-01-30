
import timeline from "../assets/timeline.png"
import friends from "../assets/friends.png";
import groups from "../assets/groups.png";
import video from "../assets/video.png";
import photos from "../assets/photo.png";
import events from "../assets/events.png";
import "./SideMenu.scss";

function SideMenu() {
    const menuItems = [
      {
        name: "Timeline",
        icon: timeline,
      },
      {
        name: "friends",
        icon: friends,
      },
      {
        name: "groups",
        icon: groups,
      },
      {
        // name: "videos",
        icon: video,
      },
      {
        name: "photos",
        icon: photos,
      },
      {
        name: "events",
        icon: events,
      },
    ];
  return (
    <div className="sidemenu">
      <div className='heading'>
        <p>Menu</p>
      </div>
      {menuItems &&
        menuItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <img src={item.icon} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
    </div>
  );
}

export default SideMenu