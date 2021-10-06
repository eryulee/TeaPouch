import { Link } from 'react-router-dom';
import Layout from '../components/layouts/Layout'

 function Teas(props) {
   return (
    
       
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

      {props.teas.map((tea) => (
        <div key={tea.id}>
          <Link to={`/teas/${tea.id}`}>
            <div className= 'tea-card'>
           <img src={tea.image_url} />
            <p>{tea.name}</p>
            </div>
          </Link>
       
        </div>
      ))}

      <Link to='/teas/new'>
        <button>Add Tea</button>
      </Link>

      <hr />
     </div>
  
  );
}

export default Teas