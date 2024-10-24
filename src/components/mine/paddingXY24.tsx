export default function PaddingXY24({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`px-[24px] py-[24px] ${className}`}>{children}</div>;
}
