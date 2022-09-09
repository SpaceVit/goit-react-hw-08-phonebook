import { useSelector, useDispatch } from 'react-redux';
import {
  setFilter,
  getFilter,
  useGetContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} from '../../redux';

import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import { Box } from '../../components/Box';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const { data: contacts } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const [addContact] = useAddContactMutation();

  const addToContact = ({ name, number: phone }) => {
    const lowerCasedName = name.toLowerCase();

    let added = contacts.find(
      contact => contact.name.toLowerCase() === lowerCasedName
    );

    const contact = {
      name,
      phone,
    };

    if (added) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    addContact(contact);
  };

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  const filteredContacts = () => {
    const lowerCasedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCasedFilter)
    );
  };

  return (
    <Box as="main" py={3} width="100%">
      <div>
        <ContactForm onSubmit={addToContact} />

        {contacts && contacts.length !== 0 ? (
          <>
            <h2>Contacts</h2>
            <Filter value={filter} onChange={changeFilter} />
            <ContactList
              contacts={filteredContacts()}
              onDeleteContact={deleteContact}
            />
          </>
        ) : (
          'There is no contacts'
        )}
      </div>
    </Box>
  );
}
