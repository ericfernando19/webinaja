"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Meningkatkan Kepercayaan Pelanggan",
    desc: "Website profesional membuat bisnis Anda terlihat lebih kredibel dan terpercaya di mata calon pelanggan.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Tersedia 24 Jam",
    desc: "Website Anda akan aktif selama 24 jam non-stop, siap melayani pelanggan kapan saja tanpa libur.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Menjangkau Lebih Banyak Pasar",
    desc: "Dengan website, bisnis Anda bisa diakses oleh siapa saja, di mana saja, kapan saja secara global.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Meningkatkan Profesionalitas Bisnis",
    desc: "Tampil dengan website modern menunjukkan bahwa bisnis Anda serius dan profesional di bidangnya.",
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
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhySection() {
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
            Kenapa Website?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mt-3 mb-4">
            Mengapa Harus Punya Website?
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto text-lg">
            Di era digital ini, website bukan lagi sekadar pilihan, melainkan
            kebutuhan untuk mengembangkan bisnis Anda.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={cardVariants}
              className="bg-white rounded-2xl p-6 border border-neutral-100 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary-light rounded-xl flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {reason.icon}
              </div>
              <h3 className="font-bold text-secondary text-lg mb-3">
                {reason.title}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
