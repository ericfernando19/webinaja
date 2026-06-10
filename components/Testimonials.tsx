"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ahmad Rizki",
    role: "Pemilik Warung Makmur",
    avatar: "AR",
    color: "from-blue-400 to-blue-600",
    rating: 5,
    text: "WebinAja membantu UMKM saya punya website profesional dengan harga terjangkau. Proses cepat dan hasilnya memuaskan! Sekarang bisnis saya lebih dikenal.",
  },
  {
    name: "Sari Dewi",
    role: "Founder KaryaStudio",
    avatar: "SD",
    color: "from-purple-400 to-purple-600",
    rating: 5,
    text: "Portfolio website yang dibuat WebinAja benar-benar standout! Desainnya modern dan responsive. Banyak klien baru yang datang lewat website saya.",
  },
  {
    name: "Budi Santoso",
    role: "Kepala Sekolah Prima School",
    avatar: "BS",
    color: "from-emerald-400 to-emerald-600",
    rating: 5,
    text: "Website sekolah kami jadi lebih informatif dan mudah diakses orang tua siswa. Fitur akademiknya sangat membantu. Terima kasih WebinAja!",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            Testimoni
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mt-3 mb-4">
            Apa Kata Klien Kami
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto text-lg">
            Kepuasan klien adalah prioritas utama kami. Simak pengalaman mereka
            bekerja sama dengan WebinAja.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={cardVariants}
              className="bg-white rounded-2xl p-6 lg:p-8 border border-neutral-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-sm`}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-secondary">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-neutral-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-warm"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-neutral-600 leading-relaxed text-sm">
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
