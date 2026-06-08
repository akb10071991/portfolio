import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import {
  fadeInUp,
  staggerContainer,
} from "../utils/animations";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-32 bg-white text-gray-900 dark:bg-gray-950 dark:text-white overflow-hidden transition-colors duration-500"
    >

      {/* Background Glow */}
      <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/5 dark:bg-cyan-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="text-cyan-400 font-medium mb-4">
            Skills & Expertise
          </p>

          <h2 className="text-5xl font-bold">
            Technologies I Work With
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-8">
            Over the years I have worked with modern frontend
            technologies, scalable architectures, backend services,
            and performance-focused applications.
          </p>

        </motion.div>

        {/* Skill Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 grid gap-8 lg:grid-cols-3"
        >

          {portfolioData.skills.map((skillGroup) => (
            <motion.div
              key={skillGroup.category}
              variants={fadeInUp}
              className="group rounded-3xl border border-gray-200 bg-gray-50/70 p-8 backdrop-blur-xl transition dark:border-white/10 dark:bg-white/5 hover:border-cyan-400/30 dark:hover:bg-white/10 hover:bg-white/20"
            >

              <h3 className="text-2xl font-semibold text-cyan-400">
                {skillGroup.category}
              </h3>

              <div className="mt-8 space-y-6">

                {skillGroup.items.map((skill) => (
                  <div key={skill.name}>

                    {/* Label */}
                    <div className="mb-2 flex items-center justify-between">

                      <span className="text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>

                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>

                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${skill.level}%`,
                        }}
                        transition={{
                          duration: 1,
                        }}
                        viewport={{ once: true }}
                        className="h-2 rounded-full bg-cyan-400"
                      />

                    </div>

                  </div>
                ))}

              </div>

            </motion.div>
          ))}

        </motion.div>

      </div>

    </section>
  );
};

export default Skills;