import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Content } from "@/types/type";

interface ContentDataProps {
  data: Content[];
}

const Card = ({ data }: ContentDataProps) => {
  return (
    <div>
      <div className="md:flex gap-4 md:justify-between md:items-center">
        {data.map((item, index) => (
          <Link key={index} href={{ pathname: "/subpage", query: { id: index } }}>
            {/* Desktop billede  og skjult på mobil */}
            <div className="hidden md:block">
              <Image
                src={`/assets/desktop/${item.imgDesktop}`}
                alt=""
                width={220}
                height={516}
                priority={true}
              />
            </div>

            {/* Mobil billede og skjult på desktop */}
            <div className="block md:hidden">
              <Image
                src={`/assets/mobile/${item.imgMobile}`}
                alt=""
                width={220}
                height={516}
                priority={true}
                className="w-full"
              />
            </div>
          </Link>
        ))}
      </div>
      <div className="text-end mt-2">
        <p className="bg-black text-white px-2 inline-block ">And yet...more to come</p>
      </div>
    </div>
  );
};

export default Card;
