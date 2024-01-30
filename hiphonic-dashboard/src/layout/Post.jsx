import './Post.scss'

import Mind from "../components/Mind";
import Last from "../components/Last";

const Post = () => {
  return (
    <div className='container'>
      <div className='main'>
        <div className="mind">
          <Mind />
        </div>
        <div className="last">
          <Last />
        </div>
      </div>
    </div>
  );
}

export default Post
