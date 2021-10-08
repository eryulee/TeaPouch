import  Layout  from '../components/layouts/Layout'
import { Link } from 'react-router-dom'
import './Home.css'

function Home (props) {

  return (
    
      <div className='home'>
        

      <div className='bckground'>
          
         
          <div className='collection'>
        <img src='https://i.imgur.com/khYD43E.png'
          alt='pouch'
        id='pouch' />
            <h3 className='home-name'>TeaPouch</h3>
            <h4 className='mission-statement'>
            {/* At TeaPouch, we provide the best quality  loose leaf organic teas to create our distinctive collection.  Our passion is to elevate the health and happiness of our customers, one cup at a time. */}
            At TeaPouch, we provide a plaform for tea enthusiasts to share their favorite tea blends. Join our community and share your favorite blends! 
          </h4>
          
          <Link to='/teas' id='listing-link' >
                  <button className='tea-browse-link'>Browse Our Collection</button>
            </Link>
            </div>
        {/* <img src='https://i.imgur.com/cyCwBAJ.jpg'
          alt='holding-tea'
            id='holding-tea' /> */}
        
      </div>

      <div className='extrastuff'>
        <img src='https://i.imgur.com/gI3mZhj.png'
          alt='organic'
          id='organic'
        />
        <h4 className='orgnic'>ORGANIC</h4>
        
        <img src='https://i.imgur.com/FMdmhYj.png'
          alt='mood'
          id='mood' />
        <h4 className='mb'>MOOD BOOSTER</h4>
      </div>

        
        
      <hr className='line' />


      </div>
    
  )

}
export default Home