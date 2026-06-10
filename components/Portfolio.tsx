"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Company Profile Coffee Shop",
    deskripsi:
      "Company profile modern untuk coffee shop dengan menu digital, galeri produk, dan informasi cabang.",
    image: "coffeshop.png",
    demo: "https://www.tiktok.com/@webinaja19/video/7644876885339491591?is_from_webapp=1&sender_device=pc",
  },
  {
    title: "Sistem Kasir Restoran",
    deskripsi:
      "Aplikasi kasir online dengan manajemen menu, laporan penjualan, dan integrasi pembayaran digital.",
    image: "kasir-restoran.png",
    demo: "https://www.tiktok.com/@webinaja19/photo/7644579590878285064?is_from_webapp=1&sender_device=pc",
  },
  {
    title: "Sistem Informasi Sekolah (SPADA)",
    deskripsi:
      "Portal sekolah lengkap dengan manajemen nilai, jadwal pelajaran, dan informasi akademik berbasis web.",
    image: "spada.png",
    demo: "#",
  },
  {
    title: "Website Rental Mobil",
    deskripsi:
      "Platform pemesanan rental mobil dengan kalender ketersediaan, katalog kendaraan, dan sistem booking online.",
    image: "rencar.png",
    demo: "https://www.tiktok.com/@webinaja19/video/7647380848949382408?is_from_webapp=1&sender_device=pc",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

export default function Portfolio() {
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mt-3 mb-4">
            Project Terbaru Kami
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto text-lg">
            Beberapa project website yang telah kami kerjakan untuk berbagai
            jenis bisnis dan organisasi.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              onClick={() => setSelected(project)}
              className="group relative bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
            >
              <div className="aspect-video bg-neutral-200 flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="text-neutral-400 text-center p-4">
                    <div className="w-12 h-12 mx-auto mb-3 bg-neutral-300 rounded-xl flex items-center justify-center">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <p className="text-sm font-medium">Preview</p>
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-bold text-secondary text-lg mb-2">
                  {project.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed mb-4">
                  {project.deskripsi}
                </p>
                <div className="flex items-center justify-between">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary hover:text-primary-dark transition-colors inline-flex items-center gap-1"
                  >
                    Tonton Demo
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl overflow-hidden max-w-lg w-full shadow-2xl"
              >
                <div className="aspect-video bg-neutral-200">
                  {selected.image && (
                    <img
                      src={selected.image}
                      alt={selected.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-secondary text-xl mb-3">
                    {selected.title}
                  </h3>
                  <p className="text-neutral-500 leading-relaxed">
                    {selected.deskripsi}
                  </p>
                  <button
                    onClick={() => setSelected(null)}
                    className="mt-6 w-full bg-primary text-white px-5 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-all"
                  >
                    Tutup
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#kontak"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-dark transition-all shadow-lg shadow-primary/25"
          >
            Mulai Project Anda
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
        </motion.div>
      </div>
    </section>
  );
}
