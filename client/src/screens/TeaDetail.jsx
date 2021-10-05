// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { getOneTea, addFlavorToTea } from '../services/teas';
// import {Link} from 'react-router-dom'

// export default function FoodDetail(props) {
//   const [teaItem, setTeaItem] = useState(null);
//   const { id } = useParams();


//   useEffect(() => {
//     const fetchTeaItem = async () => {
//       const teaData = await getOneTea(id);
//       setTeaItem(teaData);
//     };
//     fetchTeaItem();
//   }, [id]);


//   return (
    
//       <div>

//       <div className='name_logo'>
//         <img src='https://i.imgur.com/khYD43E.png'
//           alt='pouch'
//         id='pouch' />
//       <h3>Tea Pouch</h3>
//       </div>
        
//       <div className='page-title'>
//         <h3 className='add-pg-title'> --TEA DETAIL-- </h3>
//         </div>

      

//     {props.teas.map((tea) => (
//         <div className='full-tea' key={tea.id}>
        
//          <div className= 'detail-img'>
//             {tea.image_url}
//         </div>
        
//         <div className='tea-details'>
//           <p>{tea.name}</p>
//           <p>{tea.price}</p>
//           <p>{tea.description}</p>
//           <p>{tea.flavor}</p>
//         </div>
          
//         </div>
//       ))}

//    <div className='edit-delete-btns'>

//       <Link to='/teas/:id'>
//         <button>| EDIT |</button>
//       </Link>
          
//           <button onClick={() => props.handleTeaDelete(tea.id)}>
//             | DELETE |
//           </button>
//    </div>
            

//       </div>
      
//   );
// }