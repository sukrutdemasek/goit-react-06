import "./Contact.css";
export default function Contact({ name, number, id, deleteFunction }) {
  return (
    <div className="contact">
      <p className="hidden">{id}</p>
      <p className="contactName">{name}</p>
      <p className="contactNumber">{number}</p>
      <button className="contactButton" onClick={() => deleteFunction(id)}>
        Delete
      </button>
    </div>
  );
}
