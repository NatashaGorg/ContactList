import React from "react";

const ShowContacts = ({ contacts }) => {
  return (
    <div>
      {!contacts.length && <p>Nema kontakta</p>}
      {contacts.length > 0 && (
        <div>
          <p>Ime i prezime</p>
          <ul>
            {contacts.map((contact, index) => (
              <li key={index}>
                <ul><p>
                  Ime i prezime: {contact.name}
                </p></ul>
                <ul>
                  <li>Telefonski broj: {contact.number}</li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ShowContacts;
