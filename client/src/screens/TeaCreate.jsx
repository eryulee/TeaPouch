import React from "react";
import { useState } from "react";

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
    <form onSubmit={(e) => {
      e.preventDefault()
      props.handleTeaCreate(formData)
    }}>
      <h1>TeaPouch</h1>
      <h3>Create Tea </h3>
      <hr />
      <input
        onChange={handleChange}
        value={formData.name}
        name="name"
        type="text"
      />
      <input
        onChange={handleChange}
        value={formData.price}
        name="price"
        type="number"
      />

      <input
        onChange={handleChange}
        value={formData.description}
        name="description"
        type="text"
      />
      <input
        onChange={handleChange}
        value={formData.image_url}
        name="image_url"
        type="text"
      />
      <select name='flavor_id' onChange={handleChange} defaultValue='default'>
        <option disabled value='default'>
          -- Select a Flavor --
        </option>
        {props.flavors.map((flavor) => (
          <option value={flavor.id}>{flavor.name}</option>
        ))}
        </select>
      <button>Submit</button>
      <hr />
    </form>
  );
}
