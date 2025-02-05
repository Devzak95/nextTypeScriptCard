import useFetch from "@/hooks/useFetch";
import { NavbarType } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const [data] = useFetch<NavbarType[]>("http://localhost:3010/navbar");

  // console.log(data && data[0].logo);

  return (
    <nav>
      <menu className="flex justify-between items-end mt-4">
        <div className="md:flex gap-2 mb-1 hidden">
          {data &&
            data.map((item, index: number) => (
              <li key={index}>
                <Link href={{ pathname: "/subpage", query: { id: index } }}>
                  <Image
                    src={`/assets/navigation/${item.navImgLink}`}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-xl"
                  />
                </Link>
              </li>
            ))}
        </div>

        <Link href="/">
          {data && (
            <Image
              src={`/assets/navigation/${data[0].logo}`}
              alt=""
              width={90}
              height={90}
              priority={true}
              style={{ height: "auto", width: "auto" }}
            />
          )}
        </Link>
      </menu>
    </nav>
  );
};

export default Navbar;
