
import Intro from '../components/Intro'
import InBetween from '../layout/InBetween'
import Photos from './Photos';
import './Bottom.scss'



const Bottom = () => {
  return (
    <div className="mainz">
      <div className="bottom">
        <InBetween />
        <Intro />
        <Photos />

        
      </div>
    </div>
  );
}

export default Bottom