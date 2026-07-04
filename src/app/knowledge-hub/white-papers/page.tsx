import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BROCHURE } from "@/lib/downloads";
import { Download, FileText } from "lucide-react";

export default function WhitePapersPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-white pt-36 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-therallen-cyan/10 to-therallen-blue/5 blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-gradient-to-tr from-therallen-blue/5 to-therallen-cyan/5 blur-[80px]" />
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-therallen-blue/5 border border-therallen-blue/10 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-therallen-blue" />
              <span className="text-therallen-blue font-bold text-xs tracking-wider uppercase">
                Knowledge Hub
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-therallen-black mb-4 tracking-tight">
              White Papers &amp; <span className="bg-gradient-to-r from-therallen-blue to-therallen-cyan bg-clip-text text-transparent">Downloads</span>
            </h1>
            <div className="w-12 h-1 bg-gradient-to-r from-therallen-blue to-therallen-cyan rounded-full mx-auto mb-6" />
            <p className="text-slate-500 text-[15px] sm:text-base leading-relaxed max-w-lg mx-auto">
              Download our latest resources to learn more about Therallen Pharma&apos;s capabilities and offerings.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white shadow-xl shadow-slate-200/50 p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <div className="w-14 h-14 rounded-xl bg-therallen-blue/10 flex items-center justify-center flex-shrink-0">
              <FileText size={28} className="text-therallen-blue" />
            </div>

            <div className="flex-grow">
              <h2 className="text-lg font-bold text-therallen-black mb-2">
                {BROCHURE.title}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-1">
                {BROCHURE.description}
              </p>
              <p className="text-slate-400 text-xs">PDF</p>
            </div>

            <a
              href={BROCHURE.href}
              download={BROCHURE.filename}
              className="inline-flex items-center justify-center gap-2 bg-therallen-blue hover:bg-opacity-95 text-white font-semibold px-6 py-3 rounded-full shadow-lg shadow-therallen-blue/10 hover:shadow-therallen-blue/20 hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap w-full sm:w-auto"
            >
              <Download size={18} />
              Download Brochure
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
