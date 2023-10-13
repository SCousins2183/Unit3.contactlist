// export default function ContactRow({ setSelectedContactId, contact }) {

export default function ContactRow(props) {
  return (
    <tr
      onClick={() => {
        setSelectedContactId(props.contact.id);
      }}
    >
      <td>{props.contact.name}</td>
      <td>{props.contact.email}</td>
      <td>{props.contact.phone}</td>
    </tr>
  );
}