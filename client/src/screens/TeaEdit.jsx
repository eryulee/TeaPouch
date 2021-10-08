import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './TeaEdit.css'

export default function TeaEdit(props) {
  const [formData, setFormData] = useState({
    // name: '',
    name: "",
    price: "",
    description: "",
    image_url: "",
    flavor_id: "",
  });
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const prefillFormData = () => {
      const singleTea = props.teas.find((tea) => tea.id === Number(id));
      console.log(props.teas);
      setFormData({
        name: singleTea.name,
        price: singleTea.price,
        description: singleTea.description,
        image_url: singleTea.image_url,
        flavor_id: singleTea.flavor_id,
      });
    };
    prefillFormData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className='main-detail2'>
    
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.handleTeaUpdate(id, formData);
        }}
      >
        <div className="login_logo1">
          <img
            src="https://i.imgur.com/khYD43E.png"
            alt="pouch"
            id="login-pouch1"
          />
        </div>

        <div className="teap1">
          <h3 className="tp1">TeaPouch</h3>
        </div>

        <div className="screen-links">
            <h3 className="tea-link3">-- EDIT TEA --</h3>
            <hr />
        </div>

        <div className='main-detail-content3'>
      <div className='full-tea3'>
        <div className="detail-img3">
          <img src={formData.image_url}
            alt="edit-img"
            id="edit-img"
          />
        </div>

        <div className='exclude-image3'>
      <div className='teaItem3-details'>
        <input
          className="addinput3"
          onChange={handleChange}
          value={formData.name}
          name="name"
          type="text"
        />

        <br />

       
        <input
          className="addinput3"
          onChange={handleChange}
          value={formData.price}
          name="price"
          type="number"
        />

        <br />

        <input
          className="addinput3"
          onChange={handleChange}
          value={formData.description}
          name="description"
          type="text"
        />

        <br />

        <input
          className="addinput3"
          onChange={handleChange}
          value={formData.image_url}
          name="image_url"
          type="text"
        />

        <br />
        <select
          value={formData.flavor_id}
          className="addinput3"
          name="flavor_id"
          onChange={handleChange}
          defaultValue="default"
          >
          <option disabled value="default">
            -- Select a Flavor --
          </option>
          {props.flavors.map((flavor) => (
            <option value={flavor.id}>{flavor.name}</option>
            ))}
        </select>
       
                </div>
                
          <div className='edit-delete-btns'>
        <button className="signin4">Submit</button>
        </div>
       
        </div>
        </div>
        </div>  
        
        </form>
       
    </div>
  );
}
