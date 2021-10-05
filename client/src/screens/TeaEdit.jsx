// import { useState, useEffect } from 'react';
// import {useParams} from 'react-router-dom';

// export default function TeaEdit(props) {
//   const [formData, setFormData] = useState({
//     name: '',
//   });
//   const { id } = useParams();

//   useEffect(() => {
//     const prefillFormData = () => {
//       const singleTea = props.teas.find(tea=> target.id === Number(id) )
//       setFormData({
//         name: singleTea.name,
//         price: singleTea.price,
//         description: singleTea.description,
//         image_url: singleTea.image_url,
//         flavor_id: singleTea.flavor_id,

//       });
//     }
//     if (props.teas.length) {
//       prefillFormData();
//     }
//   }, [props.teas, id]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//       [price]: value,
//       [description]: value,
//       [image_url]: value,
//       [flavor_id]: value,
//     }));
//   };

//   return (
//     <Layout handleLogout={props.handleLogout}>
//       <div>

//       <div className='name_logo'>
//         <img src='https://i.imgur.com/khYD43E.png'
//           alt='pouch'
//         id='pouch' />
//       <h3>Tea Pouch</h3>
//       </div>

//       <div className='page-title'>
//         <h3 className='add-pg-title'> --EDIT TEA-- </h3>
//       </div>
      
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         props.handleFoodUpdate(id, formData);
//       }}
//     >
//       <h3>Edit Food</h3>
//       <label>
//         Name:
//         <input
//           type='text'
//           name='name'
//           value={formData.name}
//           onChange={handleChange}
//         />
//         Price:
//         <input
//           type='text'
//           name='price'
//           value={formData.price}
//           onChange={handleChange}
//         />
//         Description:
//         <input
//           type='text'
//           name='description'
//           value={formData.description}
//           onChange={handleChange}
//         />
//         Image url:
//         <input
//           type='text'
//           name='name'
//           value={formData.image_url}
//           onChange={handleChange}
//         />
//         Name:
//         <input
//           type='text'
//           name='flavor_id'
//           value={formData.flavor_id}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <button>Submit</button>
//       </form>

//       </div>
//       </Layout>
//   );
// }