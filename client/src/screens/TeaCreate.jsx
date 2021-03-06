import React from "react";
import { useState } from "react";
import "./TeaCreate.css";

export default function TeaCreate(props) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image_url: "",
    flavor_id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="main-detail1">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.handleTeaCreate(formData);
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
          <h3 className="tea-link">-- ADD A TEA --</h3>
          <hr />
        </div>

        <div className="main-detail-content1">
          <div className="full-tea1">
            <div className="detail-img1">
              <img
                src="https://i.imgur.com/Cy9OiD4.png"
                alt="add-img"
                id="add-img"
              />
            </div>

            <div className='exclude-image'>
              <div className='teaItem1-details'>
            <label>
              <input
                className="addinput"
                onChange={handleChange}
                value={formData.name}
                name="name"
                type="text"
                placeholder="Name..."
              />
            </label>
            <br />
            <label>
              <input
                className="addinput"
                onChange={handleChange}
                value={formData.price}
                name="price"
                type="number"
                placeholder="Price..."
              />
            </label>
            <br />
            <label>
              <input
                className="addinput"
                onChange={handleChange}
                value={formData.description}
                name="description"
                type="text"
                placeholder="description..."
              />
            </label>
            <br />
            <label>
              <input
                className="addinput"
                onChange={handleChange}
                value={formData.image_url}
                name="image_url"
                type="text"
                placeholder="Image url..."
              />
            </label>
            <br />
            <select
              className="addinput"
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

          <div className='edit-delete-btns1'>    
            <button className="signin3">Submit</button>
           </div>
          </div>
        </div>
        </div>
      </form>
    </div>
  );
}
