"use client";

import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function DateReserve({ onSetDay }: { onSetDay: Function }) {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          className="bg-white"
          onChange={(value) => onSetDay(value)}
        />
      </LocalizationProvider>
    </div>
  );
}
