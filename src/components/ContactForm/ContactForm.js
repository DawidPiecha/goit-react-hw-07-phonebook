import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import css from './ContactForm.module.css';
import { getContacts } from '../../redux/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSumbit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const id = nanoid();

    const isNameExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameExists) {
      Notiflix.Notify.warning(`${name} already exists in contacts.`);
      return;
    }
    dispatch(addContact({ id, name, number }));
    form.reset();
  };

  return (
    <div className={css.form}>
      <form className={css.form__form} onSubmit={handleSumbit}>
        <label className={css.form__label} htmlFor="name">
          Name
        </label>
        <input
          className={css.form__input}
          id="name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Enter name"
          autoComplete="name"
          required
        />{' '}
        <label className={css.form__label} htmlFor="number">
          Number
        </label>
        <input
          className={css.form__input}
          id="number"
          type="tel"
          name="number"
          pattern="[0-9\s\-]+"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Enter phone number"
          autoComplete="tel"
          required
        />
        <button className={css.form__button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};
