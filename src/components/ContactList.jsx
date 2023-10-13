import { useEffect, useState } from "react"; 
import ContactRow from './ContactRow'


export default function ContactList({ setSelectedContactId }) { 
  const [contacts, setContacts] = useState([])
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users")
        const result = await response.json();
        setContacts(result)
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts()
  }, []);
  console.log("Contacts: ", contacts);

  return ( 
        <table>
          <thead>
            <tr>
              <th colSpan="3">Contact List</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
            {error ? (
              <tr>{error}</tr>
            ) : (
            contacts.map((contact) => {
              return <ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId} 
                />
              })
            )}
          </tbody>
        </table>
    ); 
}

// const props = {
  //   key: contact.id,
  //   contact: contact,
  //   hasCat: true
  // }
  // ContactRow(props);

// <ContactRow name={'scott'} />

// function ContactRow(props) {
//   const key = props.key;
//   const contact = props.contact;
//   const hasCat = props.hasCat;
// }

// ContactRow('scott');