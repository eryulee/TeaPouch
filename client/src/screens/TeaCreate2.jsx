// import { useState } from 'react'
// import { useParams } from 'react-router-dom';
// import { getOneTea, addFlavorToTea } from '../services/teas';

// export default function TeaCreate(props) {
//   const [teaItem, setTeaItem] = useState(null);
//   const [selectedFlavor, setSelectedFlavor] = useState('');
//   const { id } = useParams();
//   const { flavors } = props;
//   const [formData, setFormData] = useState({
//     name: ''
//   })

//   useEffect(() => {
//     const fetchTeaItem = async () => {
//       const teaData = await getOneTea(id);
//       setTeaItem(teaData);
//     };
//     fetchTeaItem();
//   }, [id]);

//   const handleChange = (e) => {
//     const { value } = e.target;
//     setSelectedFlavor(value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const teaItem = await addFlavorToTea(selectedFlavor, id);
//     setTeaItem(teaItem);
//   };


//     const handleChange = (e) => {
//       const { name, value } = e.target;
      
//       setFormData((prevState) => ({
//         ...prevState,
//         [name]: value,
//       }));
//     };

//   return (
   
//       <div>

//       <div className='name_logo'>
//         <img src='https://i.imgur.com/khYD43E.png'
//           alt='pouch'
//         id='pouch' />
//       <h3>Tea Pouch</h3>
//       </div>
      
//       <div className='page-title'>
//         <h3 className='add-pg-title'> --ADD A TEA-- </h3>
//         </div>

//       <div className='add-img'>
//         <img src='https://i.imgur.com/5FuXSlI.jpg?2'
//           alt='add-screen-img'
//         id='add-screen-img' />
//       </div>
      
//     <form onSubmit={(e)=> {
//       e.preventDefault()
//       props.handleTeaCreate(formData);
//     }}>
    
//       <label>
//         Name:
//         <input
//           type='text'
//           name='name'
//           value={formData.name}
//           onChange={handleChange}
//           />
//           Price:
//           <input
//           type='integer'
//           name='price'
//           value={formData.price}
//           onChange={handleChange}
//           />
//           Description:
//           <input
//           type='text'
//           name='description'
//           value={formData.description}
//           onChange={handleChange}
//           />
//           Image url:
//           <input
//           type='text'
//           name='Image url'
//           value={formData.image_url}
//           onChange={handleChange}
//           />
// <div className='flavor-form'>
// <h3>{teaItem?.name}</h3>
//       {teaItem?.flavors.map((flavor) => (
//         <p key={flavor.id}>{flavor.name}</p>
//       ))}

//           {/* below is our for for the flavor drop down */}
//         <form onSubmit={handleSubmit}>
          
//           <select onChange={handleChange} defaultValue='default'>
          
//             <option disabled value='default'>
//               -- Select a Flavor --
//             </option>
            
  
//             {flavors.map((flavor) => (
              
//               <option value={flavor.id}>{flavor.name}</option>
//             ))}
//           </select>
//           <button>Add</button>
//         </form>
//         </div>

          
//       </label>
//       <br/>
//       <button>Submit</button>
//       </form>
//       </div>
     
//   );
// }


// function TeaCreate(props) {
//   let test;
//   if (props.currentUser !== null) {
//     test = 'You are signed in!'
//   } else {
//     test = 'null'
//   }
//   return (
//     <p>{test}</p>
//  )
// }

// export default TeaCreate