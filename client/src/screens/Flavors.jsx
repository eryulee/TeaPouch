import  Layout  from '../components/layouts/Layout'
import { Link } from 'react-router-dom'
import './Flavors.css'

export default function Flavors(props) {
  return (
 <div className='flavor-screen'>

<div className='bbody'>
      <div className='login_logo1'>
        <img src='https://i.imgur.com/khYD43E.png'
          alt='pouch'
        id='login-pouch1' />
      </div>

      <div className='teap1'>
      <h3 className='tp1'>TeaPouch</h3>
      </div>

      <div className="screen-links">
        <Link className="tea-link" to="/teas">
          |OUR TEAS|
        </Link>
        <Link className="flavors-link" to="/flavors">
          |FLAVOR GUIDE|
          </Link>
         
        </div>
      </div>
     

    <div className='flavorsdiv'>
      
      {props.flavors.map(flavor => (
        <p className='flavor-text' key={flavor.id}>{flavor.name}</p>
      ))}
        <hr />
    </div>

    </div>
   
  )
}