"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-violet-50"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-primary/20 rounded-full animate-pulse-glow" />
        <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-violet-300/30 rounded-full animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-primary/15 rounded-full animate-pulse-glow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Jasa Pembuatan Website Profesional
            </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6">
                Website Profesional{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">untuk Bisnis Anda</span>
              </h1>

            <p className="text-neutral-500 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
              Tingkatkan kredibilitas bisnis, jangkau lebih banyak pelanggan,
              dan tampil lebih profesional dengan website modern dari WebinAja.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#kontak"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                Konsultasi Gratis
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 bg-white text-secondary px-8 py-4 rounded-xl font-semibold text-base border border-neutral-200 hover:border-primary hover:text-primary transition-all"
              >
                Lihat Portfolio
              </a>
            </div>

            <div className="flex items-center gap-6 mt-10 pt-8 border-t border-neutral-100">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-sm text-neutral-500">
                <span className="font-semibold text-neutral-700">50+</span>{" "}
                bisnis telah berkembang
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative lg:block"
          >
              <div className="relative w-full aspect-[4/3]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-violet-200/10 rounded-3xl" />

              <div className="absolute top-4 left-4 right-4 bottom-4 bg-white rounded-2xl shadow-xl border border-neutral-100 animate-float overflow-hidden">
                <div className="h-3 bg-neutral-100 rounded-t-2xl flex items-center px-4 gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">W</span>
                    </div>
                    <div className="h-3 w-24 bg-neutral-200 rounded" />
                    <div className="ml-auto flex gap-2">
                      <div className="h-3 w-12 bg-neutral-100 rounded" />
                      <div className="h-3 w-12 bg-neutral-100 rounded" />
                      <div className="h-3 w-16 bg-primary/20 rounded" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    <div className="h-16 bg-gradient-to-br from-primary/10 to-violet-100/30 rounded-lg" />
                    <div className="h-16 bg-gradient-to-br from-primary/10 to-violet-100/30 rounded-lg" />
                    <div className="h-16 bg-gradient-to-br from-primary/10 to-violet-100/30 rounded-lg" />
                  </div>
                  <div className="h-4 w-3/4 bg-neutral-200 rounded mb-2" />
                  <div className="h-4 w-1/2 bg-neutral-100 rounded mb-4" />
                  <div className="h-20 bg-gradient-to-r from-neutral-100 to-neutral-50 rounded-lg" />
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 w-32 h-24 bg-white rounded-xl shadow-lg border border-neutral-100 animate-float-delayed flex items-center justify-center p-3">
                <div className="text-center">
                  <div className="text-primary font-bold text-lg">50+</div>
                  <div className="text-xs text-neutral-500">Website Selesai</div>
                </div>
              </div>

              <div className="absolute -top-4 -left-4 w-28 h-20 bg-white rounded-xl shadow-lg border border-neutral-100 animate-float flex items-center justify-center p-3" style={{ animationDelay: "0.5s" }}>
                <div className="text-center">
                  <div className="text-green-500 font-bold text-lg">100%</div>
                  <div className="text-xs text-neutral-500">Responsive</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
