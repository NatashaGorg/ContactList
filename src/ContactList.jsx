import React from "react";

const ShowContacts = ({ contacts, onDeleteContact }) => {
  console.log("Contact IDs:", contacts.map(contact => contact.id));
  const handleDeleteContact = (id, e) => {
    onDeleteContact(id, e);
  };
  return (
    <div >
      {!contacts.length && <p>Nema kontakta</p>}
      {contacts.length > 0 && (
        <div>
          <p >Ime i prezime</p>
          <ul>
            {contacts.map((contact) => (
              <li key={contact.id}>
                <ul>
                  <p>Ime i prezime: {contact.name}</p>
                </ul>
                <ul>
                  <li>Telefonski broj: {contact.number}</li>
                </ul>
                <button
                  className="btn btn-outline-danger "
                  onClick={(e) => {
                    handleDeleteContact(contact.id, e);
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ShowContacts;
