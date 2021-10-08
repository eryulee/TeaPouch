import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneTea, addFlavorToTea } from "../services/teas";
import { Link } from "react-router-dom";
import './TeaDetail.css'

export default function FoodDetail(props) {
  const [teaItem, setTeaItem] = useState(null);
console.log(props.currentUser)
  const { id } = useParams();

  useEffect(() => {
    const fetchTeaItem = async () => {
      const teaData = await getOneTea(id);
      console.log('line 14 teaData', teaData);
      setTeaItem(teaData);
    };
    fetchTeaItem();
  }, [id]);

  if (!teaItem) return <h1>loading..</h1>

  return (
    <div className='main-detail'>
      <div className='login_logo1'>
        <img src='https://i.imgur.com/khYD43E.png'
          alt='pouch'
        id='login-pouch1' />
      </div>

      <div className='teap1'>
      <h3 className='tp1'>TeaPouch</h3>
      </div>

      <div className="screen-links">
        <h3 className="tea-link1">
          | TEA DETAIL |
        </h3>
        <hr />
        </div>

      {/* {props.teas.map((tea) => ( */}
      <div className='main-detail-content'>
        <div className="full-tea" key={teaItem.id}>
          <div className="detail-img">
            <img src={teaItem.image_url}
              alt='detailpic'
              id='detailpic' />
        </div>
          
        <div className='exclude-image'>
          <div className="teaItem-details">
              <p className='teaitemname'>{teaItem.name}</p>
              <p>------------</p>
              <p>${teaItem.price}</p>
              <p>-------</p>
              <p>{teaItem.description}</p>
              <p>------------</p>
            <p>notes: {teaItem.flavor.name}</p>
          </div>
            {/* <br /> */}
            
        {props.currentUser.username === "admin" &&
          <div className="edit-delete-btns">
         
            <Link to={`/teas/${teaItem.id}/edit`}>
              <button className='editbtn'> | EDIT | </button>
            </Link>

            <button className='deletebtn' onClick={() => { props.handleTeaDelete(teaItem.id) }} >
             | DELETE |
            </button>
           
          </div>
        }
        </div>
        </div>
        {/* </div> */}
        </div>
      {/* ))} */}
    </div>
        
        
  );
}
