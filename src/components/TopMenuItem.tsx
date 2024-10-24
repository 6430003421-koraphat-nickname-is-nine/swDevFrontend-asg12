import Link from "next/link";

export default function TopMenuItem({
  title,
  pageRef,
}: {
  title: string;
  pageRef: string;
}) {
  return (
    <div
      className=" h-[64px] px-[24px] flex items-center justify-center rounded-[32px]  text-3xl font-medium font-serif
      border-2 border-solid border-lime-950 bg-lime-400/50 hover:bg-lime-800 text-lime-900 hover:text-lime-50 hover:border-transparent"
    >
      <Link href={pageRef} className="">
        {title}
      </Link>
    </div>
  );
}
