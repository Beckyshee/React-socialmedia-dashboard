import './Top.scss'
import BackGround from "../assets/background.png"
import Avatar from "../assets/avatar.png"
import Bottom from './Bottom';
// import Intro from "../components/Intro";
// import InBetween from "../layout/InBetween";
// import Photos from "./Photos";

const Top = () => {
  return (
    <div className="Top">
      <div className="BackGround">
        <div className="blueimage">
          <img className="bg" src={BackGround} alt="noimage" />
          <div>
            <img className="avatar" src={Avatar} alt="noimage" />
            <h2>Angela Lee</h2>
            <p>@angee</p>
            <div className="info">
              <div className="profile">
                <div className="posty">
                  <h3>POSTS</h3>
                  <h3>683</h3>
                </div>

                <div className="posty">
                  <h3>FRIENDS</h3>
                  <h3>5.7K</h3>
                </div>
                <div className="posty">
                  <h3>PHOTOS</h3>
                  <h3>296</h3>
                </div>
                <div className="posty">
                  <h3>LIKES</h3>
                  <h3>10.7K</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="split">
        <div className="left-cards">
          
        </div>
        <div className="left-cards">
          <Bottom />
        </div>
      </div>
    </div>
  );
}

export default Top