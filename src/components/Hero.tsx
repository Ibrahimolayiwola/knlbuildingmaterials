import { MotionButton } from "./ui/button";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";
import {hero, heroButton, viewport} from "../animation/animation.tsx"

const Hero = () => {
  return (
    // <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center pt-16">
    //   {/* Background Image */}
    //   <div className="absolute inset-0">
    //     <img
    //       src="https://res.cloudinary.com/dejzdypyf/image/upload/v1773646296/heroImage_qqun0m.webp"
    //       alt="Steel pipes background"
    //       className="w-full h-full object-cover"
    //     />
    //     <div className="absolute inset-0 bg-foreground/70" />
    //   </div>

    //   {/* Content */}
    //   <div className="relative z-10 container-narrow mx-auto px-4 md:px-8 lg:px-16 text-center">
    //     <motion.h1 variants={hero} initial="initial" animate="animate_h" viewport={viewport} className="font-heading text-2xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-4 max-w-2xl mx-auto leading-auto animate-fade-in">
    //       Your Trusted Source For Quality Construction Materials
    //     </motion.h1>
    //     <motion.p variants={hero} initial="initial" animate="animate_p" viewport={viewport} className="text-primary-foreground/80 text-sm md:text-base max-w-xl mx-auto mb-8 mt-4 animate-fade-in" >
    //       Reliable supply of steel, cement, marine boards, and other construction materials for contractors, builders and developers.
    //     </motion.p>
    //     <div className="px-6  flex flex-col sm:flex-row gap-3 justify-center animate-fade-in" >
    //       <Link to="/products">
    //         <MotionButton variants={heroButton} initial="initial_l" animate="animate" viewport={viewport} className="max-sm:w-full  text-slate-100 bg-primary border-2 border-primary">
    //           Explore Products
    //         </MotionButton>
    //       </Link>
    //        <Link to="/contact" >
    //         <MotionButton variants={heroButton} initial="initial_r" animate="animate" viewport={viewport} className="max-sm:w-full  bg-transparent text-destructive border-2 border-destructive hover:bg-destructive hover:text-destructive-foreground">
    //           Contact Us
    //         </MotionButton>
    //       </Link>
          
         
    //     </div>
    //   </div>
    // </section>
     <section className="relative min-h-[500px] md:min-h-[600px] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url("https://res.cloudinary.com/dejzdypyf/image/upload/v1773646296/heroImage_qqun0m.webp")` }}
            />
            <div className="absolute inset-0 bg-foreground/70" />
            <div className="relative max-w-6xl mx-auto flex items-center min-h-[500px] z-10">
              <div className="relative  px-4 lg:px-8 max-w-4xl space-y-8">
                <div className="space-x-2 text-white">
                  <span className="h-2 w-10 bg-destructive inline-block"></span>
                  <i>EST. </i>
                  2008
                </div>
                <motion.h1 variants={hero} initial="initial" animate="animate_h" viewport={viewport} className="font-heading text-4xl   lg:text-5xl font-bold text-white mb-4">
                            Your Trusted Source For Quality Building Materials
                </motion.h1>
                <motion.p variants={hero} initial="initial" animate="animate_p" viewport={viewport} className="text-white/80 text-sm md:text-base max-w-xl ">
                  Reliable supply of steel, cement, marine boards, and other construction materials for contractors, builders and developers.
                </motion.p>
                <div className="flex flex-col sm:flex-row gap-3  animate-fade-in" >
                  <Link to="/products">
                    <MotionButton variants={heroButton} initial="initial_l" animate="animate" viewport={viewport} className="max-sm:w-full  text-slate-100 bg-primary border-2 border-primary rounded-xl p-6 ">
                      Explore Products
                    </MotionButton>
                  </Link>
                  <Link to="/contact" >
                    <MotionButton variants={heroButton} initial="initial_r" animate="animate" viewport={viewport} className="max-sm:w-full  bg-transparent text-destructive border-2 border-destructive hover:bg-destructive hover:text-destructive-foreground rounded-xl p-6">
                      Contact Us
                    </MotionButton>
                  </Link>
                </div>
              </div>
            </div>
    
    
          </section>
  );
};

export default Hero;