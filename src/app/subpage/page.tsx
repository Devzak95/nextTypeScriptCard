"use client";

import Image from "next/image";
import React, { useState } from "react";

import { Content } from "@/types/type";

import { useSearchParams } from "next/navigation";
import useFetch from "@/hooks/useFetch";
import SubPageNavbar from "@/components/SubPageNavbar";
import Modal from "@/components/Modal";

const page = () => {
  const [data] = useFetch<Content[]>("http://localhost:3010/api");

  // Modal State
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [selectedEmail, setSelectedEmail] = useState<string>("");

  const searchParams = useSearchParams();
  const query = searchParams.get("id");

  const dataID = query as string;
  const id = parseInt(dataID);

  // Oprette funktion med tailwind værdier
  const backgroundColors: { [paramId: number]: string } = {
    0: "bg-whatwedo-bg-blue", // Side med id=0 får blå baggrund
    1: "bg-maintainable-bg-blue", // Side med id=1 får blå baggrund
    2: "bg-getintouch-bg-orange", // Side med id=2 får orange baggrund
  };

  const titleTextColors: { [paramId: number]: string } = {
    0: "text-whatwedo-title-dark-blue", // param ID 0
    1: "text-maintainable-title-blue", // param ID 1
    2: "text-getintouch-title-orange", // param ID 2
  };

  // Fallback farve, hvis id ikke matcher
  const bgColor = backgroundColors[id] || "bg-gray-200";
  const titleColor = titleTextColors[id] || "text-black";

  return (
    <div className={`${bgColor} min-h-screen`}>
      {/* Navigation */}
      <SubPageNavbar />
      <main>
        {data && (
          <section className="wrapper px-4 md:grid md:grid-cols-3 md:grid-rows-2 md:max-h-[516px] md:gap-2">
            <div>
              {/* Billedet skift: Mobil og Desktop bruger ikke det sammen billede START */}
              <div className="hidden md:block row-span-2">
                <Image
                  src={`/assets/desktop/${data[id].subpageDesktopImg}`}
                  alt=""
                  priority={true}
                  width={220}
                  height={516}
                />
              </div>
              <div className="block md:hidden">
                <Image
                  src={`/assets/mobile/${data[id].imgMobile}`}
                  alt=""
                  width={220}
                  height={516}
                  priority={true}
                  className="w-full"
                />
              </div>
            </div>
            {/* Billedet skift: Mobil og Desktop bruger ikke det sammen billede END */}

            <div className="md:col-span-2 md:row-span-2 md:grid">
              <div className="md:max-w-full">
                <h2 className="font-bold text-3xl my-1">
                  {data[id].title.split(" ").map((word, index) => (
                    <span key={index} className={index >= 3 ? titleColor : "text-black"}>
                      {word}{" "}
                    </span>
                  ))}
                </h2>
                <p>{data[id].textOne}</p>
                <p className="my-4">{data[id].textTwo}</p>
                <p>{data[id].textThree}</p>

                {/* Check on subpage har contact START */}
                <div className="flex items-center justify-center gap-2 mt-4">
                  {data[id]?.contact &&
                    data[id]?.contact.map((item, index: number) => (
                      <div key={index}>
                        {/* Modal Open START */}
                        <button
                          onClick={() => {
                            if (item.email) {
                              setSelectedEmail(item.email);
                              setIsOpenModal(true);
                            }
                          }}
                        >
                          <Image
                            src={`/assets/desktop/${item.img}`}
                            alt="Contact Image"
                            width={100}
                            height={100}
                          />
                          <p>{item.email}</p>
                        </button>
                        {/* Modal Open END */}
                      </div>
                    ))}
                </div>
                {/* Check on subpage har contact END */}
              </div>

              <div className="place-self-end">
                {data && (
                  <>
                    <Image
                      src={`/assets/logo/${data[id].subpageMobileLogo}`}
                      alt=""
                      width={80}
                      height={80}
                      priority={true}
                      className="md:hidden"
                    />
                    <h3 className="hidden md:block bg-black text-white text-2xl tracking-tighter p-1 font-bold">
                      {data[id].subpageDesktopHeading}
                    </h3>
                  </>
                )}
              </div>
            </div>
          </section>
        )}
        {/* Modal component START */}
        <div>
          <Modal
            openModal={isOpenModal}
            onClose={() => setIsOpenModal(false)}
            email={selectedEmail}
          />
        </div>
        {/* Modal component END */}
      </main>
    </div>
  );
};

export default page;
