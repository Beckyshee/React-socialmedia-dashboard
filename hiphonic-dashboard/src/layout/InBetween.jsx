
import './InBetween.scss'
import Loading from '../assets/parameter.png'

const InBetween = () => {
  return (
      <div className='between'>
          <div className="complete-profile">
              <h2>Complete Your Profile</h2>
              <img src={ Loading } alt="load" /> 
              
          </div>
    </div>
  )
}

export default InBetween