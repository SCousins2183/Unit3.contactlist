import { useEffect, useState } from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSelectedContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const contact = await response.json();
        setContact(contact);
      } catch (error) {
        ServiceWorkerRegistration(error);
      }
    }
    fetchSelectedContact();
  }, [selectedContactId]);

  return (
    <div>
      {contact && !error && (
        <div>
          <p>
            <b>Name:</b> {contact.name}
          </p>
          <p>
            <b>Email:</b> {contact.email}
          </p>
          <p>
            <b>Phone:</b> {contact.phone}
          </p>
          <div>
            <b>Address:</b>
            <p>
              <b>Street:</b>
              {contact.address.city}
              {contact.address.zipcode}
            </p>
          </div>
          <p>
            <b>Company:</b> {contact.company.name}
          </p>
          </div>
      )}
      <button onClick={() => setSelectedContactId(null)
      }
    >
      Back</button>
    </div>
  );
}


//this function would need to select a contactId
//and return the selected contacts info from the API
//name, email, address{street, suit, city, zipcode}, phone, company{name}