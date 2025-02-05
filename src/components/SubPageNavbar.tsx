"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation"; // Henter query-parametre

import useFetch from "@/hooks/useFetch";
import { NavbarType } from "@/types/type";

const SubPageNavbar = () => {
  const [data] = useFetch<NavbarType[]>("http://localhost:3010/navbar");
  const searchParams = useSearchParams();
  const activeId = searchParams.get("id") || "0"; // Default til 0 hvis `id` mangler

  return (
    <header className="wrapper py-4">
      <nav className="flex justify-between md:justify-start items-start gap-2 px-2">
        <Link href="/">
          {data?.[0] && (
            <Image
              src={`/assets/navigation/${data[0].logoBack}`}
              alt="Back"
              width={40}
              height={40}
              priority
              className="rounded-xl"
            />
          )}
        </Link>

        <menu>
          <ul className="flex gap-2">
            {data?.map((item, index) => (
              <li key={index} className="relative flex flex-col items-center">
                <Link href={`/subpage?id=${index}`} className="flex flex-col items-center">
                  <Image
                    src={`/assets/navigation/${item.navImgLink}`}
                    alt=""
                    width={40}
                    height={40}
                    priority
                    className="rounded-xl"
                  />

                  {/* hvis paramsId er = index */}
                  {activeId === index.toString() && (
                    <Image
                      src={`/assets/navigation/${item.navActive}`}
                      alt="Active underline"
                      width={35}
                      height={10}
                      priority
                      className="absolute left-1/2 transform -translate-x-1/2 -top-2 md:top-11 "
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </menu>
      </nav>
    </header>
  );
};

export default SubPageNavbar;
