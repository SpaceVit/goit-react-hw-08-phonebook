import { List, Contact, Button, ContactData } from './ContactList.styled';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <List>
      {contacts.map(({ name, id, number }) => (
        <Contact key={id}>
          <ContactData>
            {name}: <span>{number}</span>
          </ContactData>

          <Button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </Button>
        </Contact>
      ))}
    </List>
  );
}
