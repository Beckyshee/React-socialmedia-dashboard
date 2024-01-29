import location from '../assets/map-pin.png'
import dots from '../assets/dots.png'
import './Intro.scss'
import briefcase from '../assets/briefcase.png'
import calender from '../assets/calendar.png'
import link from '../assets/link.png'

const Intro = () => {
  return (
    <div className="intro">
      <h2>Intro</h2>
      <img src={dots} alt="dots" />
      <div className="about">
        <p>
          I am an experienced joiner with <br /> well developed skills.
        </p>
        <hr />
        <div className="address">
          <div className="address-details">
            <img src={location} alt="gps" /> <span>2972 Westheimer Rd.</span>
          </div>
          <div className="address-details">
            <img src={briefcase} alt="brief" /> <span>2972 Westheimer Rd.</span>
          </div>
          <div className="address-details">
            <img src={calender} alt="calender" /> <span>2972 Westheimer Rd.</span>
          </div>
          <div className="address-details">
            <img src={link} alt="link" /> <span>2972 Westheimer Rd.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro