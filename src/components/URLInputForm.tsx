"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function URLInputForm() {
  const router = useRouter();
  const [route, setRoute] = useState<string>("");
  const [validURL, setValidURL] = useState<boolean>(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValidUrl(route)) {
      setValidURL(false);
      return;
    }
    router.push(`${encodeURIComponent(route)}`);
  };

  // regex pattern for validating url
  function isValidUrl(url: string) {
    const pattern = new RegExp(
      "^([a-zA-Z]+:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR IP (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$", // fragment locator
      "i"
    );
    return pattern.test(url);
  }

  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <input
          className={`bg-gray-800 border border-gray-100 rounded-lg py-2 px-4 w-full text-2xl ${
            validURL ? "" : "border-red-500"
          }`}
          type="text"
          name="url_input"
          placeholder="Enter URL..."
          spellCheck="false"
          value={route}
          onChange={(e) => {
            setRoute(e.target.value);
          }}
        />
        {!validURL && (
          <p className="text-red-500">
            Please enter a valid URL with a valid domain name.
          </p>
        )}
      </div>
      <button
        className="bg-gray-800 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-full w-full"
        type="submit"
      >
        Get SEO Report
      </button>
    </form>
  );
}
