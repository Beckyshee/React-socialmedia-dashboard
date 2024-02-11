import "./PhotosPage.scss";
import pink from '../assets/pink.png'
import blue from '../assets/blue.png'
import flowers from '../assets/flowers.png'
import curly from '../assets/curly.png'
import glasses from '../assets/glasses.png'
import cherry from '../assets/cherry.png'
import icecream from '../assets/icecream.png'
import pinkdot from '../assets/pinkdot.png'
import pineapple from '../assets/pineapple.png'
import oranges from '../assets/oranges.png'
import speaker from '../assets/speaker.png'
import number from '../assets/88.png'
import spoon from '../assets/spoon.png'
import merry from '../assets/merry.png'
import purple from '../assets/purple.png'
import newspaper from '../assets/newspaper.png'
import RightNav from "./RightNav";
import SideNav from "../layout/SideNav";
import Navbar from "../layout/Navbar";

const PhotosPage = () => {
  return (
    <div className="everything">
      <Navbar />
      <div className="groupy-content">
        <SideNav />
        <div className="your-photos-container">
          <div className="photo-pages-links">
            <a href="">Photos About You</a>
            <a href="">Your Photos</a>
            <a href="">Albums</a>
          </div>
          <div className="about-photos">
            <h3>Total Photos</h3>
            <p>42 Total Photos About You</p>
          </div>
          <div className="total-photos">
            <img src={pink} alt="" />
            <img src={blue} alt="" />
            <img src={flowers} alt="" />
            <img src={curly} alt="" />
            <img src={glasses} alt="" />
            <img src={cherry} alt="" />
            <img src={icecream} alt="" />
            <img src={pinkdot} alt="" />
            <img src={pineapple} alt="" />
            <img src={oranges} alt="" />
            <img src={speaker} alt="" />
            <img src={number} alt="" />
            <img src={spoon} alt="" />
            <img src={merry} alt="" />
            <img src={purple} alt="" />
            <img src={newspaper} alt="" />
          </div>
        </div>
      </div>
      <RightNav />
    </div>
  );
};

export default PhotosPage;
