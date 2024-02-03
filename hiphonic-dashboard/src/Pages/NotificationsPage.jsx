
import "./NotificationsPage.scss";
import { useState } from "react";
import close from "../assets/close.png";

import bess from '../assets/jane.png'
import marvin from '../assets/cody.png'
import court from '../assets/jenny.png'
import darell from '../assets/robert.png'
import essie from '../assets/esther.png'
import jeen from '../assets/kristina.png'
import wade from '../assets/wade.png'
import esther from '../assets/cameron.png'
import kathy from '../assets/Brooklyn.png'
const NotificationsPage = () => {
  const [showNotification, setShowNotification] = useState(true);
  const hideNotification = () => {
    setShowNotification(false);
  };
  const today = [
    {
      icon: bess,
      name: "Besee Copper",
      message: "started following you",
    },
    {
      icon: marvin,
      name: "Marvin",
      message: "started following you",
    },
    {
      icon: court,
      name: "Courtney",
      message: "started following you",
    },
    {
      icon: darell,
      name: "darell",
      message: "started following you",
    },
    {
      icon: essie,
      name: "esther",
      message: "started following you",
    },
    {
      icon: jeen,
      name: "jennie",
      message: "started following you",
    },
    {
      icon: wade,
      name: "wade",
      message: "started following you",
    },
  ];

  const yesterday = [
    {
      icon: esther,
      name: "Esther",
      message: "started following you",
    },
    {
      icon: kathy,
      name: "kathlyn",
      message: "started following you",
    },
  ];

  return (
    <>
      {showNotification && (
        <div className="notification">
          <div className="header">
            <h2>Notifications</h2>
            <img
              src={close}
              alt="cancel"
              className="cancel-button"
              onClick={hideNotification}
            />
          </div>
          <div className="name">
            <button style={{ color: "rgba(37,99,235,1)" }}>Notification</button>
            <button>Unread</button>
          </div>
          <h2>TODAY</h2>
          <div className="notificationItems">
            {today.map((item, index) => (
              <div className="today" key={index}>
                <div className="items-items">
                  <img src={item.icon} alt={item.name} />
                  <div className="itemName">
                    <p>{item.name}</p>
                    <p>{item.message}</p>
                  </div>
                  <span>08:15</span>
                </div>
              </div>
            ))}
          </div>
          <h2>YESTERDAY</h2>
          <div className="notificationItems">
            {yesterday.map((item, index) => (
              <div className="today" key={index}>
                <div className="items-items">
                  <img src={item.icon} alt={item.name} />
                  <div className="itemName">
                    <p>{item.name}</p>
                    <p>{item.message}</p>
                  </div>
                  <span>08:15</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default NotificationsPage;
