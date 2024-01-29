
import Intro from '../components/Intro'
import InBetween from '../layout/InBetween'
import Photos from './Photos';
import './Bottom.scss'
import Mind from "../components/Mind";
import Last from "../components/Last";


const Bottom = () => {
  return (
    <div className="main">
      <div className="bottom">
        <InBetween />
        <Intro />
        <Photos />

        <div className="card">
          <Mind />
          <Last />
        </div>
      </div>
    </div>
  );
}

export default Bottom