import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addContact, deleteContact } from './contactsOperations';

const initialState = {
  contacts: [],
  filter: '',
  isLoading: false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    changeFilter(state, { payload }) {
      return { ...state, filter: payload };
    },
  },

  extraReducers: {
    [getContacts.pending](state) {
      state.isLoading = true;
    },
    [getContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.contacts = payload;
    },
    [getContacts.rejected](state) {
      state.isLoading = false;
    },

    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.contacts.push(payload);
    },
    [addContact.rejected](state) {
      state.isLoading = false;
    },

    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
    },
    [deleteContact.rejected](state) {
      state.isLoading = false;
    },
  },
});

export default contactsSlice.reducer;
export const { changeFilter } = contactsSlice.actions;
