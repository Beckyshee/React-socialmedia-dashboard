
import Mind from '../components/Mind';
import Lastly from './Lastly';
import People from './Timeline/People';
import "./NewTimeline.scss";

const NewTimeline = () => {
  return (
    <div>
      <People />
      <Mind />
      <Lastly/>
    </div>
  );
}

export default NewTimeline