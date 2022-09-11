const getContacts = state => state.contacts.contacts;
const getFilter = state => state.contacts.filter;
const getIsLoading = state => state.contacts.isLoading;

const contactsSelectors = { getContacts, getFilter, getIsLoading };
export default contactsSelectors;
