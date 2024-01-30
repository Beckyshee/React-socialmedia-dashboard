import "./Last.scss";
import avatar from "../assets/Avatar.png";
import pink from "../assets/unsplash_c1rOy44wuts.png";
import blue from "../assets/unsplash_XeYx043QD5U.png";
import like from "../assets/heart.png";
import comment from "../assets/message-circle.png";
import share from "../assets/share.png";
import smiley from "../assets/mood-smile.png";
import link from "../assets/link.png";

const Last = () => {
  return (
    <div className="containerz">
      <div className="handle">
        <img src={avatar} alt="angie" />
        <div className="handle-info">
          <h3>Angela Lee</h3>
          <p>56 mins ago</p>
        </div>
      </div>
      <div className="posting">
        <p>
          Here are some photography works that I made on the weekend with some
          of my friends, happy for that!
        </p>
      </div>
      <div className="photoss">
        <img src={pink} alt="pink" />
        <img src={blue} alt="blue" />
      </div>
      <hr />
      <div className="likes">
        <div className="like">
          <img src={like} alt="like" />
          <span>2.6K Likes</span>
        </div>
        <div className="like">
          <img src={comment} alt="comment" />
          <span>297 Comments</span>
        </div>
        <div className="like">
          <img src={share} alt="share" />
          <span>201 Share</span>
        </div>
      </div>
      <hr />

      <div className="message">
        <input type="text" placeholder="Write your message..." />{" "}
        <span>
          <img src={smiley} alt="smiley" />
        </span>
        <span className="span2">
          <img src={link} alt="link" />
        </span>
      </div>
    </div>
  );
};

export default Last;
