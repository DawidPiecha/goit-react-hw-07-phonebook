import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilterStatus } from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filterStatus = useSelector(getFilterStatus);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterStatus)
  );

  return (
    <ul className={filteredContacts.length ? css.contactList : css.emptyList}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={css.contactList__item}>
          <div className={css.contactInfo}>
            <strong>{contact.name}:</strong>
            <span className={css.contactNumber}>{contact.number}</span>
          </div>
          <button
            type="button"
            className={css.deleteButton}
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
