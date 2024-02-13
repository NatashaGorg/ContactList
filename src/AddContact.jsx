import React, { useState } from "react";

const AddContact = ({ addNewContact }) => {
  const [newContact, setNewContact] = useState("");
  const [newContactNumber, setNewContactNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewContact({ name: newContact, number: newContactNumber });
    setNewContact("");
    setNewContactNumber("");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    name === "newContact" ? setNewContact(value) : setNewContactNumber(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="newContact">Ime i prezime</label>
        <input type="text" id="newContact" name="newContact" onChange={handleInputChange} value={newContact} required />
      </p>
      <p>
        <label htmlFor="newContactNumber">Telefonski broj:</label>
        <input type="text" id="newContactNumber" name="newContactNumber" onChange={handleInputChange} value={newContactNumber} required />
      </p>
      <button type="submit" className="btn btn-success" >Dodaj</button>
    </form>
  );
};

export default AddContact;
