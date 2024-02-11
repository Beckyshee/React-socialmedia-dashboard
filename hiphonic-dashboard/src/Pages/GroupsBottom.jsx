import "./GroupsBottom.scss";
import de from '../assets/Group1.png'
import design from '../assets/design.png'
import paper from '../assets/paper.png'

const GroupsBottom = () => {
  return (
    <div className="lower-group">
      <div className="lower-nav">
        <div>
          <img src={de} alt=""  />
        </div>
        <div className="lower-text">
          <h4>Design Enthusist</h4>
          <p>Angela lee .56 min ago</p>
        </div>
      </div>
      <div className="paragraph">
        <p>
          Conduct desighn process practices across projects such as gathering
          insights ,validating problem & <br />
          solution,delivering multiple fidelity levels of design ,ensure the
          final design is implement properly.
        </p>
      </div>
      <div className="Images8">
        <div>
          <img src={design} alt=""  />
        </div>
        <div>
          <img src={paper} alt=""  />
        </div>
      </div>
    </div>
  );
};

export default GroupsBottom;
