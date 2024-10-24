"use client";

import { Select, MenuItem, TextField } from "@mui/material";
import PaddingXY24 from "@/components/mine/paddingXY24";
import DateReserve from "@/components/DateReserve";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { BookingItem } from "@/interface";
import { addBooking } from "@/redux/features/bookSlice";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
// import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";

export default function Booking() {
  const [names, setNames] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");
  const [cid, setCID] = useState<string>("");
  const [hosp, setHosp] = useState<string>("CKH");
  const [date, setDate] = useState<Dayjs | null>(null);

  const dispatch = useDispatch<AppDispatch>();
  const addBookings = () => {
    if (cid && names && lastname && hosp && date) {
      const item: BookingItem = {
        name: names,
        surname: lastname,
        id: cid,
        hospital: hosp,
        bookDate: dayjs(date).toString(),
      };
      dispatch(addBooking(item));
    }
  };

  return (
    <main>
      <div className="w-[100%] flex flex-col items-center">
        <PaddingXY24>
          <h1 className="w-[800px] font-bold text-3xl">Vaccine Booking</h1>
        </PaddingXY24>
        <PaddingXY24 className="w-[800px] m-[24px] bg-lime-300/50 rounded-[24px]">
          <h1 className="text-black text-2xl">Enter Your First Name</h1>
          <TextField
            id="Name"
            label="First Name"
            variant="standard"
            name="Name"
            value={names}
            onChange={(e) => setNames(e.target.value)}
            className="w-[100%]"
          />
        </PaddingXY24>
        <PaddingXY24 className="w-[800px] m-[24px] bg-lime-300/50 rounded-[24px]">
          <h1 className="text-black text-2xl">Enter Your Surname</h1>
          <TextField
            id="Lastname"
            label="Lastname"
            variant="standard"
            name="Lastname"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            className="w-[100%]"
          />
        </PaddingXY24>
        <PaddingXY24 className="w-[800px] m-[24px] bg-lime-300/50 rounded-[24px]">
          <h1 className="text-black text-2xl">Enter Your Citizen ID</h1>
          <TextField
            id="Citizen ID"
            label="Citizen ID"
            variant="standard"
            name="Citizen ID"
            value={cid}
            onChange={(e) => setCID(e.target.value)}
            className="w-[100%]"
          />
        </PaddingXY24>
        <PaddingXY24 className="w-[800px] m-[24px] bg-lime-300/50 rounded-[24px] flex items-center flex-col">
          <h1 className="text-black text-2xl w-[100%]">Select a Hospital</h1>
          <div className="py-[16px] w-[100%] flex items-center flex-col">
            <Select
              variant="standard"
              name="location"
              id="hospital"
              value={hosp}
              onChange={(e) => setHosp(e.target.value)}
              className="w-[80%]"
            >
              <MenuItem value="CKH">Chulalongkorn Hospital</MenuItem>
              <MenuItem value="RVH">Rajavithi Hospital</MenuItem>
              <MenuItem value="TUH">Thammasat University Hospital</MenuItem>
            </Select>
          </div>
        </PaddingXY24>
        <PaddingXY24 className="w-[640px] m-[24px] bg-lime-300/50 rounded-[24px] flex flex-row items-center justify-between">
          <h1 className="text-black text-2xl">Select Vacination Day</h1>
          <DateReserve onSetDay={(value: Dayjs) => setDate(value)} />
        </PaddingXY24>
        <PaddingXY24>
          <button
            name="Book Vaccine"
            className="block rounded-[8px] border-2 border-lime-900 bg-lime-300 px-4 py-4 text-black hover:bg-lime-600 hover:font-bold hover:text-white hover:border-0"
            onClick={addBookings}
          >
            Book Vaccine
          </button>
        </PaddingXY24>
      </div>
    </main>
  );
}
