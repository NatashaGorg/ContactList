import React, { useState } from 'react';
import AddContact from './AddContact';
import ShowContacts from './ContactList';

const App = () => {
  const [contacts, setContacts] = useState([]);

  const addNewContact = (contact) => {
    setContacts([...contacts, contact]);
    
  };

  return (
    <div>
      <AddContact addNewContact={addNewContact} />
      <hr />
      <ShowContacts contacts={contacts} />
    </div>
  );
};

export default App;
