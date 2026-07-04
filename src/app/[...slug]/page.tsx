import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function CatchAllPage({ params }: PageProps) {
  const { slug } = await params;
  
  const formatWord = (word: string) => {
    if (!word) return "";
    // Handle abbreviations like "rd" -> "Research & Development"
    if (word.toLowerCase() === "rd") return "Research & Development";
    return word
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const category = slug[0] ? formatWord(slug[0]) : "";
  const pageTitle = slug[1] ? formatWord(slug[1]) : category;

  return (
    <>
      <Navbar />
      <main className="flex-grow flex flex-col justify-center items-center bg-white pt-36 pb-24 px-6 relative overflow-hidden">
        {/* Soft background glows to match Therallen premium design */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-therallen-cyan/10 to-therallen-blue/5 blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-gradient-to-tr from-therallen-blue/5 to-therallen-cyan/5 blur-[80px]" />
        </div>

        <div className="max-w-xl w-full text-center relative z-10 flex flex-col items-center">
          {category && slug[1] && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-therallen-blue/5 border border-therallen-blue/10 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-therallen-blue" />
              <span className="text-therallen-blue font-bold text-xs tracking-wider uppercase">
                {category}
              </span>
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl font-bold text-therallen-black mb-4 tracking-tight">
            {pageTitle}
          </h1>

          <div className="w-12 h-1 bg-gradient-to-r from-therallen-blue to-therallen-cyan rounded-full mb-6" />

          <p className="text-slate-500 text-[15px] sm:text-base leading-relaxed mb-8 max-w-md">
            This section is currently under development as part of our expanded digital sitemap. Therallen Pharma is committed to delivering therapeutics by design. Full details on this page will be available soon.
          </p>

          <a
            href="/"
            className="inline-flex items-center justify-center bg-therallen-blue hover:bg-opacity-95 text-white font-semibold px-6 py-3 rounded-full shadow-lg shadow-therallen-blue/10 hover:shadow-therallen-blue/20 hover:-translate-y-0.5 transition-all duration-300"
          >
            Return to Homepage
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
