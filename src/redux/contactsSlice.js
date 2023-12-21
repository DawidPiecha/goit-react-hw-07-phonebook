import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsInitialState = {
  error: null,
  isLoading: false,
  items: [],
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contact',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder

      //fetchContacts
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)

      //addContact
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)

      //deleteContact
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );

        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
