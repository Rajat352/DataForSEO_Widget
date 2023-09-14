"use client";

import { useEffect, useState } from "react";

interface DisplayDataType {
  data: string;
}

const login = process.env.NEXT_PUBLIC_DATAFORSEO_LOGIN;
const pass = process.env.NEXT_PUBLIC_DATAFORSEO_PASS;
const api_url = process.env.NEXT_PUBLIC_DATAFORSEO_URL_SUMMARY;
const base64 = btoa(`${login}:${pass}`); // encode login and pass to base64

const headers = new Headers({
  "Content-Type": "application/json",
  Authorization: `Basic ${base64}`,
});

const DisplayData: React.FC<DisplayDataType> = ({ data }) => {
  const [res, setRes] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`${api_url}${data}`, {
      method: "GET",
      headers: headers,
    })
      .then((res) => res.json())
      .then((data) => {
        setRes(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p className="text-4xl text-center">Loading...</p>;
  if (!data) return <p className="text-4xl text-center">No profile data</p>;

  return <div>Hello</div>;
};

export default DisplayData;
