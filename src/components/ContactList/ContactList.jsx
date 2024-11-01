import { useSelector, useDispatch } from "react-redux";
import { deleteContact, selectContacts } from "../../redux/contactSlice";
import "./ContactList.css";
import Contact from "../Contact/Contact";
import { selectNameFilter } from "../../redux/filterSlice";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const searchQuery = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className="contactsList">
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className="listElement">
          <Contact
            name={name}
            number={number}
            id={id}
            deleteFunction={() => handleDelete(id)}
          />
        </li>
      ))}
    </ul>
  );
}
