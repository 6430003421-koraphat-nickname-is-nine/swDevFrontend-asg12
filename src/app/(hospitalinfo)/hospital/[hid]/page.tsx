import Image from "next/image";
// import getHospitals from "@/lib/getHospitals";
import getHospital from "@/libs/getHospital";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export default async function hospitalDetailPage({
  params,
}: {
  params: { hid: string };
}) {
  const hostDetail = await getHospital(params.hid);
  const hostDetailData = await hostDetail.data;
  // const mockHospitalRepo = new Map();
  // mockHospitalRepo.set("001", {
  //   name: "Chulalongkorn Hospital",
  //   image: "/img/chula.jpg",
  // });
  // mockHospitalRepo.set("002", {
  //   name: "Rajavithi Hospital",
  //   image: "/img/rajavithi.jpg",
  // });
  // mockHospitalRepo.set("003", {
  //   name: "Thammasat University Hospital",
  //   image: "/img/thammasat.jpg",
  // });

  /*
  export interface HospitalItem {
  _id: string;
  name: string;
  address: string;
  district: string;
  province: string;
  postalcode: string;
  tel: string;
  picture: string;
  __v: number;
  id: string;
}
 */
  return (
    <main>
      <Suspense
        fallback={
          <p>
            Loading...
            <LinearProgress />
          </p>
        }
      >
        <div className="flex flex-row">
          <Image
            src={hostDetailData.picture}
            alt={hostDetailData.name}
            width={0}
            height={0}
            sizes="100vw"
            className="rounded-[48px] w-[30%] bg-black"
          />
          <div className="px-[24px] py-[16px]">
            <h1 className="text-[32px] font-bold underline-offset-8 underline ">
              {hostDetailData.name}
            </h1>
            <div className="py-[24px]">
              <h1 className="text-[24px]">
                Hospital Name: {hostDetailData.name}
              </h1>
              <h1 className="text-[24px]">Address: {hostDetailData.address}</h1>
              <h1 className="text-[24px]">
                District: {hostDetailData.district}
              </h1>
              <h1 className="text-[24px]">
                Telephone Number: {hostDetailData.tel}
              </h1>
            </div>
          </div>
        </div>
      </Suspense>
    </main>
  );
}
