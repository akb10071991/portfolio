import { useEffect, useState, lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";

const Hero = lazy(() =>
  import("./components/Hero")
);

const Skills = lazy(() =>
  import("./components/Skills")
);

const Projects = lazy(() =>
  import("./components/Projects")
);

const Experience = lazy(() =>
  import("./components/Experience")
);

const Contact = lazy(() =>
  import("./components/Contact")
);

function App() {
  const [theme, setTheme] = useState("dark");
  const [loading, setLoading] = useState(true);

  // Load saved theme
  useEffect(() => {
    const savedTheme =
      localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 1800);

  return () => clearTimeout(timer);
}, []);

  // Save theme
  useEffect(() => {
    localStorage.setItem("theme", theme);

    document.documentElement.className = theme;
  }, [theme]);

  if (loading) {
  return <Loader />;
}

  return (
    <div className="min-h-screen bg-white text-black transition duration-500 dark:bg-gray-990 dark:text-white">
      <ScrollProgress />
      <Navbar
        theme={theme}
        setTheme={setTheme}
      />

      <Suspense fallback={<Loader/>}>
        <Hero/>
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </Suspense>


    </div>
  );
}

export default App;