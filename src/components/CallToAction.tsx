import { FiArrowRight } from "react-icons/fi";
import { MotionButton } from "./ui/button";
import { motion } from "framer-motion"
import {heading, subText, button } from "../animation/animation"


const CallToAction = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow bg-primary p-8 rounded-2xl mx-auto text-center">
        <motion.h2 variants={heading} initial whileInView="inView" className="font-heading text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">
         Let's build something that last
        </motion.h2>
        <motion.p variants={subText} initial="initial" whileInView="inView" className="text-primary-foreground text-sm md:text-base max-w-lg mx-auto mb-8">
         Choose KNL Building Materials for a reliable construction materials with proven quality and responsive support.
        </motion.p>
        <MotionButton variants={button} initial="initial" whileInView="inView" className="bg-transparent text-destructive border-2 border-destructive hover:bg-destructive hover:text-destructive-foreground">
          Start Your Project Today
          <FiArrowRight className="w-4 h-4 ml-2" />
        </MotionButton>
      </div>
    </section>
  );
};

export default CallToAction;