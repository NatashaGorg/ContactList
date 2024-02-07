import React from "react";

const ShowContacts = ({ contacts }) => {
  
  return (
    <div>
      {!contacts.length && <p>Nema kontakti</p>}
      {contacts.length > 0 && (
        <div>
          <p>Ime i prezime</p>
          <ul>
            {contacts.map((contact, index) => (
              <li key={index}>{contact.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ShowContacts;
