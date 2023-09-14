import DisplayData from "@/components/DisplayData";

type URLType = {
  params: { url: string };
};

const login = process.env.DATAFORSEO_LOGIN;
const pass = process.env.DATAFORSEO_PASS;
const api_url = process.env.DATAFORSEO_URL;
const base64 = btoa(`${login}:${pass}`); // encode login and pass to base64

function cleanURL(url: string) {
  return url.replace(/^(https?:\/\/|www\.)*/, ""); // regex pattern for removing http(s) or www.
}

const headers = new Headers({
  "Content-Type": "application/json",
  Authorization: `Basic ${base64}`,
});

const createArray = (url: string) => {
  const post_array = [];

  post_array.push({
    target: url,
    max_crawl_pages: 5,
    load_resources: true,
    enable_javascript: true,
    accept_language: "en",
    enable_browser_rendering: true,
  });

  return post_array;
};

async function getData(url: string) {
  try {
    const res = await fetch(`${api_url}`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(createArray(url)),
    });
    return res.json();
  } catch (error) {
    console.error(error);
  }
}

export default async function Url({ params }: URLType) {
  const decodeUrl = decodeURIComponent(params.url);
  const url = cleanURL(decodeUrl);
  const data = await getData(url);
  return <DisplayData data={data} />;
}
