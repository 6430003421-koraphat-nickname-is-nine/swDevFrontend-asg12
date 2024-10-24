import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingItem } from "@/interface";

// Define the initial state using an array
type BookingState = {
  bookItems: BookingItem[];
};

const initialState: BookingState = { bookItems: [] };

export const bookSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addBooking: (state, action: PayloadAction<BookingItem>) => {
      if (state.bookItems.length === 0) {
        state.bookItems.push(action.payload);
        return;
      }
      const existingIndex = state.bookItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex !== -1) {
        // Replace existing booking if found
        state.bookItems[existingIndex] = action.payload;
      } else {
        // Otherwise, add new booking
        state.bookItems.push(action.payload);
      }
    },
    removeBooking: (state, action: PayloadAction<string>) => {
      // Filter out the booking with the specified id
      state.bookItems = state.bookItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addBooking, removeBooking } = bookSlice.actions;
export default bookSlice.reducer;
