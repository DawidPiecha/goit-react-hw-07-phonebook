import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

const App = () => {
  return (
    <div className="app-container">
      <h1 className="heading">Phonebook</h1>
      <ContactForm />
      <h2>Contacts:</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export { App };
