"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "399",
    desc: "Cocok untuk personal branding atau profil sederhana",
    popular: false,
    features: [
      "1 Halaman",
      "Responsive Design",
      "Form Kontak",
      "Gratis Revisi Ringan",
    ],
  },
  {
    name: "Business",
    price: "799",
    desc: "Solusi tepat untuk UMKM dan bisnis lokal",
    popular: true,
    features: [
      "Hingga 5 Halaman",
      "Responsive Design",
      "SEO Dasar",
      "Form Kontak",
      "Integrasi WhatsApp",
    ],
  },
  {
    name: "Premium",
    price: "1.499",
    desc: "Untuk perusahaan dengan kebutuhan lengkap",
    popular: false,
    features: [
      "Unlimited Halaman",
      "SEO Optimasi",
      "Dashboard Admin",
      "Integrasi API",
      "Prioritas Support",
    ],
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

export default function Pricing() {
  return (
    <section id="harga" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            Paket Harga
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mt-3 mb-4">
            Harga Transparan, Tanpa Biaya Tersembunyi
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto text-lg">
            Pilih paket yang sesuai dengan kebutuhan dan budget bisnis Anda.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              className={`relative rounded-2xl p-6 lg:p-8 border transition-all duration-300 ${
                plan.popular
                  ? "bg-primary text-white border-primary shadow-xl shadow-primary/20 scale-105 lg:scale-110"
                  : "bg-white border-neutral-100 hover:border-primary/20 hover:shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-primary text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
                  PALING POPULER
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-xl font-bold mb-2 ${
                    plan.popular ? "text-white" : "text-secondary"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm ${
                    plan.popular ? "text-indigo-200" : "text-neutral-500"
                  }`}
                >
                  {plan.desc}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-sm ${
                      plan.popular ? "text-indigo-200" : "text-neutral-400"
                    }`}
                  >
                    Rp
                  </span>
                  <span
                    className={`text-4xl lg:text-5xl font-bold ${
                      plan.popular ? "text-white" : "text-secondary"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.popular ? "text-indigo-200" : "text-neutral-400"
                    }`}
                  >
                    /paket
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.popular ? "text-indigo-200" : "text-primary"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span
                      className={`text-sm ${
                        plan.popular
                          ? "text-indigo-100"
                          : "text-neutral-600"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#kontak"
                className={`block text-center py-3.5 rounded-xl font-semibold text-sm transition-all ${
                  plan.popular
                    ? "bg-white text-primary hover:bg-indigo-50 shadow-sm"
                    : "bg-primary text-white hover:bg-primary-dark shadow-sm hover:shadow-md"
                }`}
              >
                Pilih Paket {plan.name}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
