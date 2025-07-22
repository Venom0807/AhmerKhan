import React from "react";
import { motion } from "framer-motion";
import {
  MonitorSmartphone,
  Code,
  ShoppingCart,
} from "lucide-react";

const services = [
  {
    icon: <MonitorSmartphone size={48} />,
    title: "Web & Mobile Design",
    desc: "Designing responsive, modern UIs for both web and mobile apps.",
  },
  {
    icon: <Code size={48} />,
    title: "Web Development",
    desc: "Building fast, scalable websites using modern stacks like React.",
  },
  {
    icon: <ShoppingCart size={48} />,
    title: "E-commerce",
    desc: "Creating custom e-commerce solutions with payment & cart systems.",
  },
];

const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-[#3b2930] text-white py-20 px-6 md:px-20"
    >
      <div className="max-w-[1440px] mx-auto">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold mb-12 text-center"
        >
          My Services
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="border border-[#c2926b] hover:bg-[#c2926b]/10 transition-all duration-300 p-8 text-center rounded"
            >
              <div className="text-[#c2926b] mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#c2926b] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
