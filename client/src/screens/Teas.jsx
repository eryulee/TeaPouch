import { Link } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import { Card } from "react-bootstrap";
import "./Teas.css";

function Teas(props) {
  return (
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

      {/* {props.teas.map((tea) => (
        <div key={tea.id}>
          <Link to={`/teas/${tea.id}`}>
            <div className= 'tea-card'>
              <img src={tea.image_url}
                alt='listingimg'
              id='listingimg'/>
            <p>{tea.name}</p>
            </div>
          </Link>
       
        </div>
      ))} */}
    <div className='listing-tea-div'>
      {props.teas.map((tea) => (
        <div  className='tea-div' key={tea.id}>
          <Link to={`/teas/${tea.id}`}>
            <Card className="card-container" style={{ height: "11rem" }}>
              <Card.Img
                className="card-img"
                variant="top"
                src={tea.image_url}
                style={{ height: "9rem"}}
              />
              <Card.Body style={{ height: "7rem" }}>
                <Card.Title className="card-name">{tea.name}</Card.Title>
               
              </Card.Body>
            </Card>
          </Link>
        </div>
      ))}
      </div>
      
      
      <Link to="/teas/new">
        <button className='signin2'>Add Tea</button>
      </Link>

      <hr />
        
    </div>
  );
}

export default Teas;
