import { Layout } from '../../components'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = (props) => {

  return (
    <Layout currentUser={currentUser}>
      <div className='home'>
        
      <div className='bckground'>
        <img src='https://i.imgur.com/cyCwBAJ.jpg'
          alt='holding-tea'
            id='holding-tea' />
          
          <div className='name_logo'>
        <img src='https://i.imgur.com/khYD43E.png'
          alt='pouch'
        id='pouch' />
            <h3 className='app-name'>Tea Pouch</h3>
            <h4 className='mission-statement'>
            At TeaPouch, we provide the best quality  loose leaf organic teas to create our distinctive collection.  Our passion is to elevate the health and happiness of our customers, one cup at a time.
            </h4>
      </div>
        
      </div>


      </div>
    </Layout>
  )

}
export default Home