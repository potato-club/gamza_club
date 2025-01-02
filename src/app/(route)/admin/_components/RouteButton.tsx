"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface RouteProp {
  href: string;
  title: string;
}
const RouteButton = ({ ...props }: RouteProp) => {
  const pathname = usePathname();
  const fontVariants = {
    dark: "flex justify-center items-center w-[100px] text-2xl font-bold text-black",
    light:
      "flex justify-center items-center w-[100px] text-2xl font-light text-[rgba(0,0,0,0.3)]",
  };

  return (
    <Link href={props.href} className="flex gap-6 justify-center">
      <span
        className={
          pathname === props.href ? fontVariants.dark : fontVariants.light
        }
      >
        {props.title}
      </span>
    </Link>
  );
};

export default RouteButton;
