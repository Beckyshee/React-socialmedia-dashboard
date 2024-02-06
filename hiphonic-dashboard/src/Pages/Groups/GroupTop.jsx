

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
      
      <div className="PHOTOS">
        <div className="right-group-photo">
          <div className="photos">
            <div className="photos-nav">
              <div className="photos-left">
                <img src={Avatar4} alt="" srcset="" />

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
          <div className="IMAGE">
            <img src={Mask} alt="" srcset="" />
          </div>
          <div className="groups-footer">
            <button>join Group</button>
            <div className="small-images">
              <img src={Avatar5} alt="" srcset="" />
              <img src={Avatar6} alt="nopic" srcset="" />
            </div>
          </div>
        </div>

        <div className="left-group-photo">
          <div className="photos">
            <div className="photos-nav">
              <div className="photos-left">
                <img src={Avatar4} alt="" srcset="" />

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
          <div className="IMAGE">
            <img src={Mask1} alt="" srcset="" />
          </div>
          <div className="groups-footer">
            <button>join Group</button>
            <div className="small-images">
              <img src={Avatar5} alt="" srcset="" />
              <img src={Avatar6} alt="nopic" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupTop