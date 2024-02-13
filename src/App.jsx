import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import AddContact from './AddContact';
import ShowContacts from './ContactList';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [contacts, setContacts] = useState([]);

  const addNewContact = (contact) => {
    const newContact = { ...contact, id: uuidv4() };
    setContacts([...contacts, newContact]);
    
  };
  const handleDeleteContact = (id) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts)};
  

  return (
    <div>
      <AddContact addNewContact={addNewContact} />
      <hr />
      <ShowContacts contacts={contacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
};

export default App;
