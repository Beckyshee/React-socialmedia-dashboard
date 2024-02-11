
import pink from '../assets/pink.png'
import blue from '../assets/blue.png'
import './Photos.scss'

const Photos = () => {
  return (
    <div className="photoz">
      <div className='about'>
        <h2>Photos</h2>
        <p>See All</p>
      </div>
      <div className="images">
        <img src={pink} alt="pink pic" />
        <img src={blue} alt="blue pic" />
      </div>
    </div>
  );
}

export default Photos