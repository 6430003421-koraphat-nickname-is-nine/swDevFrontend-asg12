import { HospitalJson, HospitalItem } from "@/interface";
import Card from "./Card";
import Link from "next/link";

export default async function HospitalCatalog({
  hospitalsJson,
}: {
  hospitalsJson: Promise<HospitalJson>;
}) {
  const hosJsonReady = await hospitalsJson;
  return (
    <div>
      {/* <div className="px-[24px] text-3xl m-[24px] bg-lime-600/80 text-white inline-block rounded-[16px]">
        Participating hospitals
      </div> */}

      <div className="flex flex-row flex-wrap justify-around content-around m-[24px]">
        {hosJsonReady.data.map((hosItem: HospitalItem) => (
          <Link href={`/hospital/${hosItem.id}`} className="w-1/4">
            <Card hospitalName={hosItem.name} imgSrc={hosItem.picture} />
          </Link>
        ))}
      </div>
    </div>
  );
}
