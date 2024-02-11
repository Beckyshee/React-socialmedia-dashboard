import search from '../assets/default.png'
import dots from '../assets/dots-vertical.png'
import ud from '../assets/ud.png'
import ui from '../assets/ui.png'
import phone from '../assets/phone.png'
import laptop from '../assets/laptop.png'
import jane from '../assets/jane.png'
import cameron from '../assets/cameron.png'
import wade from '../assets/wade.png'
import angela from '../assets/Avatar.png'
import './GroupTop.scss'

const GroupTop = () => {
  return (
    <div className="group-container">
      
      <div className="group-nav">
        <div>
          <h3>Groups</h3>
        </div>
        <div className="nav-right">
          <img src={search} alt="search" />
          <button>+ Create New Group</button>
        </div>
      </div>
      <div className="suggested-for-you">
        
          <h4>Suggested for you</h4>
          <p>Groups you might be intrested in </p>
       
        <div className="see-all">
          <a href="http://">see all</a>
        </div>
      </div>
      
      <div className="photoz">
        <div className="right-group-photo">
          <div className="photos">
            <div className="photos-nav">
              <div className="photos-left">
                <img src={ud} alt=""/>

                <div className="upper-text">
                  <h4>Ui/Ux Designer</h4>
                  <p>Banding.7 posts a day </p>
                </div>
              </div>
            </div>
            <div>
              <img src={dots} />
            </div>
          </div>
          <div className="photoz">
            <img src={phone} alt=""/>
          </div>
          <div className="groups-footer">
            <button>join Group</button>
            <div className="small-images">
              <img src={cameron} alt=""/>
              <img src={jane} alt="nopic"/>
            </div>
          </div>
        </div>

        <div className="left-group-photo">
          <div className="photos">
            <div className="photos-nav">
              <div className="photos-left">
                <img src={ui} alt=""/>

                <div className="upper-text">
                  <h4>User Interface</h4>
                  <p>Jakarta.7 posts a day </p>
                </div>
              </div>
            </div>
            <div className="dots">
              <img src={dots} />
            </div>
          </div>
          <div className="photoz">
            <img src={laptop} alt=""/>
          </div>
          <div className="groups-footer">
            <button>join Group</button>
            <div className="small-images">
              <img src={wade} alt=""/>
              <img src={angela} alt="nopic"  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupTop