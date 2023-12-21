import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { getError, getIsLoading } from '../redux/selectors';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Loader } from './Loader/Loader';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="app-container">
      <h1 className="heading">Phonebook</h1>
      <ContactForm />
      <h2>Contacts: {isLoading && !error && <Loader />}</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export { App };
