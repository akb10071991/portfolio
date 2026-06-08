import { motion } from "framer-motion";

import { portfolioData } from "../data/portfolioData";

import {
  fadeInUp,
  staggerContainer,
} from "../utils/animations";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-white text-gray-900 dark:bg-gray-950 dark:text-white py-32 transition-colors duration-500"
    >

      {/* Glow */}
      <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/5 dark:bg-cyan-500/10 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="mb-4 font-medium text-cyan-400">
            Career Journey
          </p>

          <h2 className="text-5xl font-bold">
            Professional Experience
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-600 dark:text-gray-400">
            Over the years I have contributed to scalable
            enterprise applications, modern frontend systems,
            and high-performance user experiences.
          </p>

        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mt-24"
        >

          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-gray-300 dark:bg-white/10 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-16">

            {portfolioData.experienceData.map(
              (experience, index) => (
                <motion.div
                  key={experience.id}
                  variants={fadeInUp}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0
                      ? "md:flex-row-reverse"
                      : ""
                  }`}
                >

                  {/* Timeline Dot */}
                  <div className="absolute left-4 top-6 z-10 h-5 w-5 rounded-full border-4 border-cyan-400 bg-white dark:bg-gray-950 md:left-1/2 md:-translate-x-1/2" />

                  {/* Empty Space */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <div className="ml-14 md:ml-0 md:w-1/2 md:px-10">

                    <div className="rounded-3xl border border-gray-200 bg-gray-50/70 dark:border-white/10 dark:bg-white/5 p-8 backdrop-blur-xl transition hover:border-cyan-400/30 dark:hover:bg-white/10 hover:bg-white/20">

                      <div className="flex items-center justify-between">

                        <h3 className="text-2xl font-semibold">
                          {experience.company}
                        </h3>

                        <span className="rounded-full bg-cyan-400/20 px-4 py-1 text-sm text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-300">
                          {experience.duration}
                        </span>

                      </div>

                      <p className="mt-3 text-lg text-cyan-400">
                        {experience.role}
                      </p>

                      <p className="mt-6 leading-7 text-gray-600 dark:text-gray-400">
                        {experience.description}
                      </p>

                      {/* Achievements */}
                      <ul className="mt-6 space-y-3">

                        {experience.achievements.map(
                          (achievement) => (
                            <li
                              key={achievement}
                              className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                            >

                              <span className="h-2 w-2 rounded-full bg-cyan-400" />

                              {achievement}

                            </li>
                          )
                        )}

                      </ul>

                    </div>

                  </div>

                </motion.div>
              )
            )}

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Experience;