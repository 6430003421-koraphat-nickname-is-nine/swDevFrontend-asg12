"use client";

import { useAppSelector, AppDispatch } from "@/redux/store";
import { removeBooking } from "@/redux/features/bookSlice";
import { useDispatch } from "react-redux";

export default function BookingList() {
  // const carItems = useAppSelector((state) => state.cartSlice.carItems);
  const bookItems = useAppSelector((state) => state.bookSlice.bookItems);

  const dispatch = useDispatch<AppDispatch>();

  if (bookItems.length === 0) {
    return (
      <div className="w-full h-screen flex flex-col  justify-center items-center text-[96px] text-lime-700/25">
        {"No Vaccine Booking"}
      </div>
    );
  }
  return (
    <div className="flex flex-col space-y-[24px] px-[32px] py-[32px]">
      {bookItems.map((item) => (
        <div className="flex flex-row justify-between bg-white px-[16px] py-[16px] w-full border-[2px]  border-lime-950 rounded-[24px]">
          <div
            className="flex flex-col space-y-[8px] text-lime-900"
            key={item.id}
          >
            <div className="text-[24px] font-bold flex flex-row items-center space-x-[8px]">
              <div>{item.name}</div>
              <div>{item.surname}</div>
            </div>
            <div className="text-[16px] ">{item.id}</div>
            <div className="text-[16px]">{item.hospital}</div>
            <div className="text-[24px]">{item.bookDate}</div>
          </div>

          <div className=" flex items-end">
            <button
              className="text-[24px] px-[4px] py-[4px] rounded-[16px]
            border-2 border-solid border-lime-950 bg-lime-400/50 hover:bg-lime-800 text-lime-900 hover:text-lime-50 hover:border-transparent"
              onClick={() => dispatch(removeBooking(item.id))}
            >
              Cancel Booking
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
