import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { portfolioData } from "../data/portfolioData";
import {
    fadeInUp,
    staggerContainer,
} from "../utils/animations";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ProfilePic from "../assets/profileImg.jpeg";

const stats = [
    {
        id: 1,
        name: "Years Experience",
        value: portfolioData.experience,
    },
    {
        id: 2,
        name: "Projects Completed",
        value: portfolioData.projects,
    },
    {
        id: 3,
        name: "Technologies",
        value: portfolioData.technologies,
    },
    {
        id: 4,
        name: "Companies Worked",
        value: portfolioData.companies,
    },
];

const Hero = () => {
    return (
        <section id="home" className="relative overflow-hidden bg-white text-gray-900 dark:bg-gray-950 dark:text-white transition-colors duration-500">

            {/* Background Blur */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/3 h-[500px] w-[500px] rounded-full bg-cyan-500/10 dark:bg-cyan-500/20 blur-3xl" />
            </div>
            <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-500/5 dark:bg-purple-500/10 blur-3xl" />
            

            <div className="mx-auto max-w-7xl px-6 pt-32 pb-24 lg:px-8">

                {/* Top Content */}
                {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"> */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                >
                    {/* Left */}
                    <motion.div variants={fadeInUp}>

                        <p className="mb-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/20 px-4 py-1 text-sm text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-300">
                            Full Stack Developer | Open to Opportunities
                        </p>

                        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl leading-tight">
                            Hi, I'm{" "}
                            <span className="text-cyan-400">
                                {portfolioData.name}
                            </span>
                        </h1>

                        <p className="mt-6 text-2xl font-medium text-gray-700 dark:text-gray-300">
                            {portfolioData.role}
                        </p>

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
                            {portfolioData.summary}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">

                            {portfolioData.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full border border-cyan-400/20 bg-cyan-400/20 px-4 py-2 text-sm text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-300 backdrop-blur-md"
                                >
                                    {tech}
                                </span>
                            ))}

                        </div>

                        {/* Buttons */}
                        <div className="mt-10 flex gap-4">

                            <Link
                                to="projects"
                                smooth={true}
                                duration={500}
                                className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300 cursor-pointer"
                            >
                                View Projects
                            </Link>

                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                className="inline-flex items-center justify-center rounded-xl border border-gray-400/40 px-6 py-3 font-semibold text-gray-900 hover:bg-gray-100 transition dark:border-white/20 dark:text-white dark:hover:bg-white/10 cursor-pointer"
                            >
                                Contact Me
                            </Link>

                        </div>

                    </motion.div>

                    {/* Right */}
                    <motion.div
                        variants={fadeInUp}
                        className="flex justify-center"
                    >

                        <div className="relative">

                            {/* Glow */}
                            <div className="absolute inset-0 rounded-3xl bg-cyan-400/10 dark:bg-cyan-400/20 blur-2xl" />

                            {/* Card */}
                            {/* <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl"> */}
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                }}
                                className="relative rounded-3xl border border-gray-200 bg-gray-50/70 backdrop-blur-xl p-6 shadow-2xl dark:border-white/10 dark:bg-white/5 transition-colors"
                            >
                                <LazyLoadImage
                                    src={ProfilePic}
                                    alt="profile"
                                    effect="blur"
                                    className="w-[350px] rounded-2xl object-cover"
                                />

                                <div className="mt-6 space-y-3">

                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">
                                            Expertise
                                        </span>

                                        <span className="text-cyan-400">
                                            React Ecosystem
                                        </span>
                                    </div>

                                    <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700">
                                        <div className="h-2 w-[90%] rounded-full bg-cyan-400" />
                                    </div>

                                </div>
                            </motion.div>
                            {/* </div> */}

                        </div>

                    </motion.div>
                </motion.div>
                {/* </div> */}

                {/* Stats */}
                <div className="mt-24 grid grid-cols-2 gap-6 lg:grid-cols-4">

                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className="rounded-2xl border border-gray-200 bg-gray-50/70 p-8 backdrop-blur-md dark:border-white/10 dark:bg-white/5 transition-colors"
                        >
                            <dt className="text-sm text-gray-600 dark:text-gray-400">
                                {stat.name}
                            </dt>

                            <dd className="mt-3 text-4xl font-bold text-cyan-400">
                                {stat.value}
                            </dd>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Hero;