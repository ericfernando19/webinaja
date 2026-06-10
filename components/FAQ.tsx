"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Berapa lama pengerjaan website?",
    a: "Lama pengerjaan website bervariasi tergantung kompleksitas dan paket yang dipilih. Untuk paket Starter, pengerjaan dapat selesai dalam 3-5 hari kerja. Paket Business membutuhkan 5-10 hari kerja, sedangkan Paket Premium sekitar 10-20 hari kerja.",
  },
  {
    q: "Apakah website bisa diakses di HP?",
    a: "Tentu! Semua website yang kami buat sudah responsive dan mobile-friendly, sehingga tampil sempurna di berbagai perangkat mulai dari smartphone, tablet, hingga desktop.",
  },
  {
    q: "Apakah termasuk domain dan hosting?",
    a: "Untuk paket Business dan Premium, domain dan hosting sudah termasuk. Untuk paket Starter, domain dan hosting dapat kami bantu uruskan dengan biaya tambahan yang sangat terjangkau.",
  },
  {
    q: "Apakah bisa request desain khusus?",
    a: "Bisa! Kami menerima request desain khusus sesuai dengan branding dan preferensi Anda. Tim desain kami akan berdiskusi dengan Anda untuk menghasilkan tampilan website yang sesuai keinginan.",
  },
  {
    q: "Apakah ada garansi?",
    a: "Ya, kami memberikan garansi revisi ringan untuk setiap paket. Selain itu, kami juga memberikan garansi support teknis selama 1 bulan setelah website selesai dan online.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mt-3 mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto text-lg">
            Masih ragu? Temukan jawaban untuk pertanyaan yang paling sering
            diajukan.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto divide-y divide-neutral-100"
        >
          {faqs.map((faq, index) => (
            <div key={index} className="py-5">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left gap-4"
              >
                <span
                  className={`font-semibold text-base ${
                    openIndex === index ? "text-primary" : "text-secondary"
                  }`}
                >
                  {faq.q}
                </span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-primary" : "text-neutral-400"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-neutral-500 leading-relaxed pt-3 pb-1 text-sm">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
