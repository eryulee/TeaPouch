import  Layout  from '../components/layouts/Layout'
import {Link} from 'react-router-dom'

export default function Flavors(props) {
  return (
    <Layout handleLogout={props.handleLogout}>
      <div>

      <div className='name_logo'>
        <img src='https://i.imgur.com/khYD43E.png'
          alt='pouch'
        id='pouch' />
      <h3>Tea Pouch</h3>
      </div>

      <div className='screen-links'>
        <Link className='tea-link' to='/teas'>OUR TEAS</Link>
        <Link className='flavors-link' to='/flavors'>FLAVOR GUIDE</Link>
      </div>

    <div>
      <h3>Flavors</h3>
      {props.flavors.map(flavor => (
        <p key={flavor.id}>{flavor.name}</p>
      ))}
    </div>

    </div>
    </Layout>
  )
}