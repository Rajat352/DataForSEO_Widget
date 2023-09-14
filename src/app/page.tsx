import URLInputForm from "@/components/URLInputForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-700 flex flex-col">
      <div className="text-4xl text-slate-50 font-bold text-center py-10 sm:py-20 bg-gray-800">
        An embeddable widget that provides SEO analytics via DataForSEO API.
      </div>
      <div className="container mx-auto text-slate-50 text-center py-10">
        <URLInputForm />
      </div>
    </div>
  );
}
