import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://67d558bbd2c7857431f01d53.mockapi.io/";

export const fetchContacts = createAsyncThunk(
  "ContactsApp/fetchContacts",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios("ContactsApp");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "ContactsApp/addContact",
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post("ContactsApp", contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "ContactsApp/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`ContactsApp/${contactId}`, contactId);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
