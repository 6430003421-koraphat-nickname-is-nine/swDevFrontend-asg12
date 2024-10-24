import Image from "next/image";
import TopMenuItem from "./TopMenuItem";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { Link } from "@mui/material";

export default async function TopMenu() {
  const session = await getServerSession(authOptions);

  const username = session?.user.name;
  return (
    <div className=" w-full h-[80px] flex justify-between bg-lime-100 items-center px-[48px]">
      <div className="flex-row flex space-x-[24px]">
        {session ? (
          <TopMenuItem
            title={"Sign Out of " + username}
            pageRef="/api/auth/signout"
          ></TopMenuItem>
        ) : (
          <TopMenuItem title="Sign In" pageRef="/api/auth/signin"></TopMenuItem>
        )}
        <TopMenuItem title="My Booking" pageRef="/mybooking"></TopMenuItem>
      </div>

      <div className="flex-row flex items-center space-x-[24px] object-contain">
        <TopMenuItem title="Booking" pageRef="/booking"></TopMenuItem>
        <Link href="/">
          <Image
            src={"/img/logo_lime.png"}
            alt="logo"
            className="h-[80px] w-[80px]"
            width={100}
            height={100}
          />
        </Link>
      </div>
    </div>
  );
}
