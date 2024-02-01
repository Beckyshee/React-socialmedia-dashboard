import "./Friends.scss";
import angee from '../assets/Avatar1.png'
import robbie from '../assets/robert.png'
import jane from '../assets/jenny.png'
import cameron from '../assets/cameron.png'
import brooklyn from '../assets/Brooklyn.png'
import leslie from '../assets/leslie.png'
import jen from '../assets/jenny.png'
import robert from '../assets/robert.png'
import cody from '../assets/cody.png'
import kristina from '../assets/kristina.png'
import angie from '../assets/Avatar.png'
import MsgButton from '../components/MsgButton'

const Friends = () => {
  const myFriends = [
    {
      icon: angee,
      name: "Angela Lee",
      username: "@anglee",
    },
    {
      icon: robbie,
      name: "Wade Warren",
      username: "@wadee",
    },
    {
      icon: jane,
      name: "Jane Cooper",
      username: "@jane",
    },
    {
      icon: cameron,
      name: "Esther Howard",
      username: "@esther",
    },
    {
      icon: brooklyn,
      name: "Brooklyn Simmons",
      username: "@Brooklyn",
    },
    {
      icon: leslie,
      name: "Leslie Alendarer",
      username: "@Leslie",
    },
    {
      icon: jen,
      name: "Jenny Wilson",
      username: "@Jenny",
    },
    {
      icon: robert,
      name: "Robert Fox",
      username: "@Robert",
    },
    {
      icon: cody,
      name: "Cody Fisher",
      username: "@Cody",
    },
    {
      icon: kristina,
      name: "Kristin Watson",
      username: "@Kristina",
    },
  ];
  return (
    <div className="friendsContainer">
      <div className="friends-menu">
        {myFriends &&
          myFriends.map((item, index) => (
            <div className="friendsCard" key={index}>
              <div className="friend">
                <div className="friends-card-top">
                  <div className="img-name">
                    <img src={item.icon} alt={item.name} />
                    <div className="friends-name">
                      <p>{item.name}</p>
                      <p>{item.username}</p>
                    </div>
                  </div>
                  <img src={angie} alt={item.name} />
                </div>
                <div className="btn">
                  <MsgButton msg="Message" />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Friends;
