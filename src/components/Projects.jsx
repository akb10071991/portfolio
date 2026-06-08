import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import {
  fadeInUp,
  staggerContainer,
} from "../utils/animations";

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white text-gray-900 dark:bg-gray-950 dark:text-white py-32 transition-colors duration-500"
    >

      {/* Background Glow */}
      <div className="absolute left-0 top-1/3 h-[400px] w-[400px] rounded-full bg-purple-500/5 dark:bg-purple-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="mb-4 font-medium text-cyan-400">
            Featured Work
          </p>

          <h2 className="text-5xl font-bold">
            Recent Projects
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-600 dark:text-gray-400">
            A selection of projects focused on scalable frontend
            architecture, modern UI/UX, performance optimization,
            and enterprise-grade applications.
          </p>

        </motion.div>

        {/* Project Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 grid gap-10 lg:grid-cols-3"
        >

          {portfolioData.projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              className="group overflow-hidden rounded-3xl border border-gray-200 bg-gray-50/70 dark:border-white/10 dark:bg-white/5 backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-400/30"
            >

              {/* Image */}
              <div className="relative overflow-hidden">

                <LazyLoadImage
                  src={project.image}
                  alt={project.title}
                  effect="blur"
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80" />

              </div>

              {/* Content */}
              <div className="p-8">

                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-6 flex flex-wrap gap-3">

                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/20 px-3 py-1 text-sm text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-300"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                {/* Buttons */}
                <div className="mt-8 flex gap-4">

                  <a
                    href={project.github}
                    className="flex items-center gap-2 rounded-xl border border-gray-400/40 px-5 py-3 text-gray-700 transition hover:bg-gray-100 dark:border-white/10 dark:text-white dark:hover:bg-white/10"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    className="flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-black transition hover:bg-cyan-300"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>
          ))}

        </motion.div>

      </div>

    </section>
  );
};

export default Projects;