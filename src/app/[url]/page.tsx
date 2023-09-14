type URLType = {
  params: { url: string };
};

function cleanURL(url: string) {
  return url.replace(/^(https?:\/\/|www\.)*/, ""); // regex pattern for removing http(s) or www.
}

export default function Url({ params }: URLType) {
  const decodeUrl = decodeURIComponent(params.url);
  const url = cleanURL(decodeUrl);
  return <div>Results for {url}</div>;
}
