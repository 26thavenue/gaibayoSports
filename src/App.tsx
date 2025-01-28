import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Events from "./pages/Events"
import Event from "./pages/Event"
import useLenis from "./lenis";
import ScrollToTop from "./scroll";

const App = () => {
  useLenis();

  const MotionWrapper = ({ children }: { children: React.ReactNode }) => (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.3 }}
    >
      {children}
    </motion.div>
  );

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MotionWrapper><Home /></MotionWrapper>} />
        <Route path="/about" element={<MotionWrapper><About /></MotionWrapper>} />
        <Route path="/services" element={<MotionWrapper><Services /></MotionWrapper>} />
        <Route path="/contact" element={<MotionWrapper><Contact /></MotionWrapper>} />
        <Route path="/events" element={<MotionWrapper><Events /></MotionWrapper>} />
        <Route path="/events/pre_scouting_program" element={<MotionWrapper><Event /></MotionWrapper>} />
        <Route path="*" element={<MotionWrapper><NotFound /></MotionWrapper>} />
      </Routes>
    </Router>
  );
};

export default App;
