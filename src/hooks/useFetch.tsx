"use client";

import { useEffect, useState } from "react";

const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T | undefined>(undefined);

  useEffect(() => {
    fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "text/plain",
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [url]);

  return [data];
};
export default useFetch;
