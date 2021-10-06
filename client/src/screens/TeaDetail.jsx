import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneTea, addFlavorToTea } from "../services/teas";
import { Link } from "react-router-dom";

export default function FoodDetail(props) {
  const [teaItem, setTeaItem] = useState(null);

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
    <div>
      <div className="name_logo">
        <img src="https://i.imgur.com/khYD43E.png" alt="pouch" id="pouch" />
        <h3>Tea Pouch</h3>
      </div>

      <div className="page-title">
        <h3 className="add-pg-title"> --TEA DETAIL-- </h3>
      </div>

      {/* {props.teas.map((tea) => ( */}
        <>
          <div className="full-tea" key={teaItem.id}>
           <div className="detail-img"> 
            <img src={teaItem.image_url}
              alt='detailpic'
          id='detailpic' /></div>
          

            <div className="teaItem-details">
              <p>{teaItem.name}</p>
              <p>${teaItem.price}</p>
              <p>{teaItem.description}</p>
              <p>notes: {teaItem.flavor.name}</p>
            </div>
          </div>

          <div className="edit-delete-btns">
            <Link to="/teas/:id">
              <button>| EDIT |</button>
            </Link>

          <button onClick={() => { props.handleTeaDelete(teaItem.id) }}>
              | DELETE |
            </button>
          </div>
        </>
      {/* ))} */}
    </div>
  );
}
