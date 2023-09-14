export default function Url({ params }: { url: string }) {
  return <div>Results for {decodeURIComponent(params.url)}</div>;
}
