"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Company Profile Coffee Shop",
    deskripsi:
      "Company profile modern untuk coffee shop dengan menu digital, galeri produk, dan informasi cabang.",
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "Sistem Kasir Restoran",
    deskripsi:
      "Aplikasi kasir online dengan manajemen menu, laporan penjualan, dan integrasi pembayaran digital.",
    color: "from-purple-400 to-purple-600",
  },
  {
    title: "Sistem Informasi Sekolah (SPADA)",
    deskripsi:
      "Portal sekolah lengkap dengan manajemen nilai, jadwal pelajaran, dan informasi akademik berbasis web.",
    color: "from-emerald-400 to-emerald-600",
  },
  {
    title: "Website Rental Mobil",
    deskripsi:
      "Platform pemesanan rental mobil dengan kalender ketersediaan, katalog kendaraan, dan sistem booking online.",
    color: "from-amber-400 to-amber-600",
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
              className="group relative bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`aspect-video bg-gradient-to-br ${project.color} flex items-center justify-center`}
              >
                <div className="text-white/90 text-center p-4">
                  <div className="w-12 h-12 mx-auto mb-3 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
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
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-medium opacity-80">Preview</p>
                </div>
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
                    href="#"
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
              <div className="absolute inset-0 bg-secondary/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="#"
                  className="bg-white text-secondary px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary hover:text-white transition-all shadow-lg"
                >
                  Lihat Detail
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

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
