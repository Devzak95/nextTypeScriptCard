"use client";

import React from "react";
import useFetch from "@/hooks/useFetch";
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import { Content } from "@/types/type";

const HomePage = () => {
  const [data] = useFetch<Content[]>("http://localhost:3010/api");

  if (!data) return <div>Loading...</div>; // Loading state

  return (
    <div className="wrapper mx-auto px-4">
      <Navbar />
      <Card data={data} />
    </div>
  );
};

export default HomePage;
