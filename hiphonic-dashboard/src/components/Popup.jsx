import React from "react";
import "./TodayNotifications.scss";
import wade from "../../assets/wade.png";
import jane from "../../assets/jane.png";
import esther from "../../assets/esther.png";
import brooklyn from "../../assets/brooklyn.png";
import Angela from "../../assets/angela.png";
import Leslie from "../../assets/leslie.png";
import Jenny from "../../assets/jenny.png";
import Robert from "../../assets/robert.png";
import Cody from "../../assets/cody.png";
import Kristina from "../../assets/kristina.png";

function TodayNotifications() {
  const friends = [
    {
      image: Angela,
      username: "You",
      message: "started Following you",
    },
    {
      image: wade,
      username: "wadee",
      message: "Joined UI officia Group",
    },
    {
      image: jane,
      username: "jane",
      message: "Joined UI officia Group",
    },
    {
      image: esther,
      username: "esther",
      message: "Joined UI officia Group",
    },
    {
      image: brooklyn,
      username: "Brooklyn",
      message: "Joined UI officia Group",
    },
  ];
  return (
    <div className="notifications">
      <div className="notification-menu">
        {friends &&
          friends.map((item, index) => (
            <div className="notification" key={index}>
              <div className="not-card-top">
                <img src={item.image} alt={item.name} />
                <p>{item.username}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default TodayNotifications;
