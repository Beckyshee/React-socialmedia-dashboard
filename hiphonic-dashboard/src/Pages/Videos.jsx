
import search from "../assets/default.png";
import video1 from "../assets/radio.png";
import playbtn from "../assets/play.png";
import image1 from "../assets/wade.png";
import image2 from "../assets/robert.png";
import image3 from "../assets/Avatar.png";
import post from "../assets/cooking.png";
import User1 from "../assets/jane.png";
import User2 from "../assets/leslie.png";
// import User4 from "../assets/kristina.png";
// import User3 from "../assets/simmons.png";
// import bigvideo from "../assets/cooking.png";
// import bigvideo1 from "../assets/cooking.png";
// import bigvideo2 from "../assets/cooking.png";
import family from "../assets/family.png";
import music from "../assets/radio.png";
import "./Videos.scss";
import Navbar from "../layout/Navbar";
import SideNav from "../layout/SideNav";
import RightNav from "./RightNav";
const Videos = () => {
  return (
    <div className="everything">
      <Navbar />
      <div className="groupy-content">
        <SideNav />
        <div className="Video-container">
          <div className="see-more-videos">
            <div className="video1">
              <div className="video-header">
                <h2>Video</h2>
                <img src={search} alt="" />
              </div>
              <div className="text-in-categories">
                <h3>Categories To Explore</h3>
                <p>see all</p>
              </div>
              <div className="explore-categories">
                <div className="video-container">
                  <div className="video12">
                    <div className="image">
                      <img src={music} alt="" />
                    </div>
                    <div className="music-text">
                      <p>Music</p>
                      <div>
                        <img src={image1} alt="" />
                        <img src={image2} alt="" />
                        <img src={image3} alt="" />
                      </div>
                    </div>
                    <button> See All</button>
                  </div>
                </div>
                <div className="video-container">
                  <div className="video12">
                    <div className="image">
                      <img src={family} alt="" />
                    </div>
                    <div className="music-text">
                      <p>Music</p>
                      <div>
                        <img src={image1} alt="" />
                        <img src={image2} alt="" />
                        <img src={image3} alt="" />
                      </div>
                    </div>
                    <button> See All</button>
                  </div>
                </div>
                <div className="video-container">
                  <div className="video12">
                    <div className="image">
                      <img src={video1} alt="" />
                    </div>
                    <div className="music-text">
                      <p>family</p>
                      <div>
                        <img src={image1} alt="" />
                        <img src={image2} alt="" />
                        <img src={image3} alt="" />
                      </div>
                    </div>
                    <button> See All</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="minutes-ago-video">
            <div className="video-user-details">
              <div className="innter-txt">
                <img src={User1} alt="" />
                <div className="video-user-text">
                  <p>Angela lee</p>
                  <p>58 mins ago</p>
                </div>
              </div>
              <p>. . .</p>
            </div>
            <div className="video-ago-text">
              <p>
                The HAPPINESS you get when you serve your food to family members
                and their smile and your satisfaction is beyond. Do some
                experiment, feel the energy, share the happiness, fulfill your
                urge and finally relieve your stress.
              </p>
            </div>
            <div className="video-container">
              <img src={post} alt="" />
              <img src={playbtn} alt="" />
            </div>
            <div className="video-user-details">
              <div className="innter-txt">
                <img src={User2} alt="" />
                <div className="video-user-text">
                  <p>Peninah Lopex</p>
                  <p>58 mins ago</p>
                </div>
              </div>
              <p>. . .</p>
            </div>

            {/* <div className="video-ago-text">
          <p>
            The HAPPINESS you get when you serve your food to family members and
            their smile and your satisfaction is beyond. Do some experiment,
            feel the energy, share the happiness, fulfill your urge and finally
            relieve your stress.
          </p>
        </div>
        <div className="video-container">
          <img src={post} alt="" />
          <img src={playbtn} alt="" />
        </div>
        <div className="video-user-details">
          <div className="innter-txt">
            <img src={User3} alt="" />
            <div className="video-user-text">
              <p>Angela lee</p>
              <p>58 mins ago</p>
            </div>
          </div>
          <p>. . .</p>
        </div>
        <div className="video-ago-text">
          <p>
            The HAPPINESS you get when you serve your food to family members and
            their smile and your satisfaction is beyond. Do some experiment,
            feel the energy, share the happiness, fulfill your urge and finally
            relieve your stress.
          </p>
        </div>
        <div className="video-container">
          <img src={post} alt="" />
          <img src={playbtn} alt="" />
        </div>
        <div className="video-user-details">
          <div className="innter-txt">
            <img src={User4} alt="" />
            <div className="video-user-text">
              <p>Mark Adams</p>
              <p>58 mins ago</p>
            </div>
          </div>
          <p>. . .</p>
        </div>
        <div className="video-ago-text">
          <p>
            The HAPPINESS you get when you serve your food to family members and
            their smile and your satisfaction is beyond. Do some experiment,
            feel the energy, share the happiness, fulfill your urge and finally
            relieve your stress.
          </p>
        </div>
        <div className="video-container">
          <img src={post} alt="" />
          <img src={playbtn} alt="" />
        </div>
        <div className="video-user-details">
          <div className="innter-txt">
            <img src={User1} alt="" />
            <div className="video-user-text">
              <p>Jeniffer Lopez</p>
              <p>58 mins ago</p>
            </div>
          </div>
          <p>. . .</p>
        </div>
        <div className="video-ago-text">
          <p>
            The HAPPINESS you get when you serve your food to family members and
            their smile and your satisfaction is beyond. Do some experiment,
            feel the energy, share the happiness, fulfill your urge and finally
            relieve your stress.
          </p>
        </div>
        <div className="video-container">
          <img src={post} alt="" />
          <img src={playbtn} alt="" />
        </div>
        <div className="video-user-details">
          <div className="innter-txt">
            <img src={User1} alt="" />
            <div className="video-user-text">
              <p>Scot Atkins</p>
              <p>58 mins ago</p>
            </div>
          </div>
          <p>. . .</p>
        </div>
        <div className="video-ago-text">
          <p>
            The HAPPINESS you get when you serve your food to family members and
            their smile and your satisfaction is beyond. Do some experiment,
            feel the energy, share the happiness, fulfill your urge and finally
            relieve your stress.
          </p>
        </div>
        <div className="video-container">
          <img src={post} alt="" />
          <img src={playbtn} alt="" />
        </div> */}
          </div>
        </div>
      </div>
      <RightNav />
    </div>
  );
};

export default Videos;
