import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-[#311e25] py-20 px-6 md:px-20 text-white"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-10 items-start">
        {/* Left Side: Text Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold leading-snug">
            I’m a Web Developer based in Lahore, who loves <br />
            clean, responsive & unique websites. I also enjoy building things that work fast 🚀
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Web developer focused on building responsive, user-friendly websites using HTML, CSS, JavaScript, and React. Learning full-stack with Node.js and MongoDB. Passionate about problem solving and crafting quality code.
          </p>

          <p className="text-gray-300 leading-relaxed">
            I believe in continuous learning and creative thinking. I love turning ideas into digital experiences that make a difference.
          </p>

          <a
            href="/ahmerCV.pdf"
            download
            className="inline-block border border-[#c2926b] text-[#c2926b] hover:bg-[#c2926b] hover:text-black px-6 py-3 text-lg rounded transition-all duration-300"
          >
            <div className="flex items-center gap-2">
              <Download size={18} /> Download CV
            </div>
          </a>
        </motion.div>

        {/* Right Side: Skill Bars */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 space-y-6 flex flex-col gap-10"
        >
          {[
            { label: "Wireframing", value: 90 },
            { label: "UI/UX", value: 70 },
            { label: "Interaction design", value: 45 },
          ].map((skill) => (
            <div key={skill.label} className="w-full">
              <div className="flex justify-between mb-1">
                <span>{skill.label}</span>
                <span>{skill.value}%</span>
              </div>
              <div className="w-full bg-gray-700 h-2 rounded">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.value}%` }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="bg-[#c2926b] h-2 rounded"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
