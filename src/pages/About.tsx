import Header from "../components/Header";
import Footer from "../components/Footer";
import { MotionButton } from "../components/ui/button";
import { GoDiamond } from "react-icons/go";
import { PiHandshake } from "react-icons/pi";
import { FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import { card, heading, hero, subText, cardImage, button, viewport, heroButton } from "../animation/animation";
import steelBar from "../assets/steelbar3.jpg"
import { FiTarget } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import MD from "../assets/MD.jpg"
import OpManager from "../assets/op-manager.jpg"
import secretory from "../assets/secretory.jpg"


const coreValues = [
  {
    icon: GoDiamond,
    title: "Uncompromising Quality",
    description: "We ensure every product meets the highest industry standards for durability and performance."
  },
  {
    icon: PiHandshake,
    title: "Reliable Partnership",
    description: "Building long-term relationships based on trust, transparency, and consistent delivery."
  },
  {
    icon: FiUsers,
    title: "Customer Centricity",
    description: "Our commitment to understanding and exceeding client expectations drives every decision."
  }
];



const testimonials = [
  {
    quote: "KNL consistently provides us with high-grade materials and exceptional service. Their reliability is unmatched in the industry.",
    name: "Adebayo Adeyinka",
    title: "Procurement Manager, CCECC."
  },
  {
    quote: "The team at KNL is incredibly knowledgeable and always goes the extra mile to ensure our complex orders are fulfilled on time and within budget.",
    name: "Joseph Emmanuel",
    title: "Lead Manager, Telliso."
  }
];


const partners = [
  {
    logo: "https://res.cloudinary.com/dejzdypyf/image/upload/v1779338483/gbemed_uq25es.png",
    name: "Gbemed ventures",
    role: "enineering",
  },
  {
    logo: "https://res.cloudinary.com/dejzdypyf/image/upload/v1779383800/telisol_dywtrc.png",
    name: "Tellisol",
    role: "engineering",
  },
  {
    logo: "https://res.cloudinary.com/dejzdypyf/image/upload/v1773707362/BDEL-1_wfuefk.png",
    name: "Fortuna",
    role: "engineering",
  },
  {
    logo: "https://res.cloudinary.com/dejzdypyf/image/upload/v1779339854/morgan_x4wz98.png",
    name: "Morgan properties",
    role: "realestate",
  },
  {
    logo: "https://res.cloudinary.com/dejzdypyf/image/upload/v1779382893/lockehomes_jrcnjs.png",
    name: "Locke homes",
    role: "realestate",
  },
  {
    logo: "https://res.cloudinary.com/dejzdypyf/image/upload/v1779382848/limmo_ptzgba.png",
    name: "Limmo global",
    role: "",
  },
  {
    logo: "https://res.cloudinary.com/dejzdypyf/image/upload/v1779382938/bolasaf_lcwscg.png",
    name: "Bolasaf ventures",
    role: "engineering",
  },
  {
    logo: "https://res.cloudinary.com/dejzdypyf/image/upload/v1779383656/IBrealsteel_mtbaqd.png",
    name: "IB Real steel",
    role: "steel supply",
  },
  {
    logo: "https://res.cloudinary.com/dejzdypyf/image/upload/v1779384077/ccecc_dl5faf.png",
    name: "CCECC",
    role: "engineering",
  },
  {
    logo: "https://res.cloudinary.com/dejzdypyf/image/upload/v1773707362/BDEL-1_wfuefk.png",
    name: "Black diamond",
    role: "contruction",
  },
]

const About = () => {
  return (
    <div className="min-h-screen mx-auto">
      <Header />

      {/* Hero Section */}
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
            <motion.h1 variants={hero} initial="initial" animate="animate_h" viewport={viewport} className="font-heading text-3xl  md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Building Nigeria's Future with Quality Building Materials
            </motion.h1>
            <motion.p variants={hero} initial="initial" animate="animate_p" viewport={viewport} className="text-white/80 text-sm md:text-base max-w-xl ">
              We specialize in the supply of reliable building materials, helping contractors and individuals access quality steel, cement, marine boards, and other construction essentials.
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
      <section className="max-w-7xl mx-auto mt-[7.5rem] px-4">
        <div className="lg:flex gap-20 items-center space-y-4">
          <div>
            <p className="uppercase text-accent font-bold text-xs mb-2">Our heritage</p>
            <h3 className="text-3xl md:text-4xl text-foreground font-bold capitalize mb-2">A legacy built on strength</h3>
            <hr className="border-t-4 border-t-accent w-16" />
            <p className="text-sm md:text-base text-slate-600 mt-4 text-justify">Established in 2008 by Alh. Adebimbe Kazeem Abayomi, KNL building materials has been a trusted name in the construction industry, providing top quality building materials to meet the growing demands of Nigeria and beyond.</p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <div className=" pl-6 pr-4 py-6 space-y-4 bg-slate-50 border-l-2 border-l-accent shadow-md rounded-r-2xl">
                <FiTarget className="text-primary text-2xl" />
                <h5 className="text-primary text-xl font-semibold">Our Mission</h5>
                <p className="">To be the leading supply of quality building materials, driving growth and development in the construction industry</p>
              </div>
              <div className=" pl-6 pr-4 py-6 space-y-4 bg-slate-50 border-l-2 border-l-primary shadow-md rounded-r-2xl">
                <FiEye className="text-primary text-2xl" />
                <h5 className="text-primary text-xl font-semibold">Our Vision</h5>
                <p className="">To be the trusted partner for accessible quality building materials and stronger projects.</p>
              </div>

            </div>
            <div className="mt-6 w-full bg-white/95 border-l-4 border-l-primary p-4">
              <p className="text-accent font-semibold italic">"At KNL Building materials, we don't just sell supplies. We sell the security that your home, office, or bridge is built on a foundation of integrity and world-class engineering."</p>
            </div>
          </div>
          <div className="aspect-square w-full overflow-hidden rounded-2xl border-8 border-4-white/90 ">
            <img src={steelBar} alt="steel bar in a warehouse" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
      {/* Introducing the CEO */}
      <section className="mt-[7.5rem] max-w-7xl mx-auto px-4">
        <h3 className="text-3xl text-center md:text-4xl text-foreground font-bold capitalize mb-2">Meet the Managing Director</h3>
        <div className="border-t-4 border-t-accent w-16 mx-auto" />
        <div className="bg-primary rounded-3xl mt-8 p-6 lg:flex gap-10 items-center">
          <div className="w-full md:w-[500px] rounded-2xl overflow-hidden mx-auto p-8 lg:w-[450px] aspect-[3/4]">
            <img src={MD} alt="the MD" className="w-full h-full object-cover rounded-2xl " />
          </div>
          <div className="space-y-6 flex-1 p-8">
            <span className="px-4 py-2 text-white border-2 border-accent rounded-2xl text-xs">Leadership Message</span>
            <h3 className="text-3xl md:text-3xl font-bold text-primary-foreground">"Quality is not act, it is the habit of the bold"</h3>
            <p className="text-sm text-primary-foreground italic text-justify">With over 25 years of supplying quality building materials, I’ve seen the consequences of cutting corners. At KNL building materials, we established a culture where quality is non-negotiable. We are building the tomorrow we want to live in, today.</p><br /><br />
            <p className="text-sm text-primary-foreground text-justify">Alh. Adebimpe Kazeem is a young entrepreneur. Under his visionary leadership, KNL Building materials has successfully supplied materials for over 15 landmark infrastructure projects across Lagos, Abuja, and Port Harcourt. His commitment to local sourcing and technical training has set new standards for the industry.</p>
            <hr className="bg-white mb-2" />
            <p className="text-primary-foreground text-xl font-semibold  text-right  items-center"> A. Kazeem</p>
          </div>
        </div>
      </section>
      {/* The expert team section  */}
      <section className="mt-[7.5rem] max-w-7xl mx-auto px-4">
        <div className="">
          <p className="uppercase text-accent font-bold text-xs mb-2 text-center">Our Expert Team</p>
          <h3 className="capitalize font-bold text-3xl md:text-4xl text-foreground font-heading mb-2 text-center">The minds behind our materials</h3>
          <hr className="border-t-4 border-t-accent w-16 mx-auto mb-6" />
          <p className=" text-slate-600 text-center mt-4 mb-6 max-w-3xl mx-auto">A diverse team of marketers, logistics experts, and customer advocates working tirelessly to ensure you get the right materials at the right time for your building and construction projects</p>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6">
            <div className="w-full bg-white rounded-2xl overflow-hidden shadow-2xl max-sm:max-w-[350px] sm:w-[350px] ">
              <div>
                <img src={OpManager} alt="operations manager" className="w-full h-full aspect-square" />
              </div>
              <div className="p-6 text-center flex flex-col justify-center gap-4">
                <p className="p-2 border-2 border-accent text-accent font-semibold uppercase rounded-lg">Operations manager</p>
                <p className="uppercase text-lg font-bold text-primary">Olapade Ibrahim Oladapo</p>
              </div>
            </div>
            <div className="w-full bg-white rounded-2xl overflow-hidden shadow-2xl max-sm:max-w-[350px] sm:w-[350px] ">
              <div>
                <img src={secretory} alt="operations manager" className="w-full h-full aspect-square" />
              </div>
              <div className="p-6 text-center flex flex-col justify-center gap-4">
                <p className="p-2 border-2 border-accent text-accent font-semibold uppercase rounded-lg">Assitant secretory</p>
                <p className="uppercase text-lg font-bold text-primary">Micheal Modupe Victoria</p>
              </div>
            </div>
            <div className="w-full bg-white rounded-2xl overflow-hidden shadow-2xl max-sm:max-w-[350px] sm:w-[350px] ">
              <div>
                <img src={OpManager} alt="operations manager" className="w-full h-full aspect-square" />
              </div>
              <div className="p-6 text-center flex flex-col justify-center gap-4">
                <p className="p-2 border-2 border-accent text-accent font-semibold uppercase rounded-lg">Operations manager</p>
                <p className="uppercase text-lg font-bold text-primary">Surname Name</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Partners section  */}
      <section className="max-w-7xl mx-auto mt-[7.5rem]">
        <p className="uppercase text-accent font-bold text-xs mb-2 text-center">Trusted by leading construction brands</p>
        <h3 className="capitalize font-bold font-heading text-3xl md:text-4xl text-foreground mb-2 text-center">Our Strategic Partners</h3>
        <hr className="border-t-4 border-t-accent w-16 mx-auto mb-6" />
        <p className=" text-slate-600 text-center mt-4 mb-6 max-w-3xl mx-auto">KNL Building materials collaborates with the world’s most trusted manufacturers, suppliers, and engineering firms to deliver uncompromising quality in every project. Our network ensures precision, stability, and innovative resource management.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8 justify-center items-center ">
          {
            partners.map(({ logo, name, role }, i) => (
              <div key={i} className="w-full max-sm:max-w-[300px] sm:w-[300px] p-4 text-center uppercase  text-primary border-4 border-primary font-semibold bg-white rounded-3xl shadow-sm shadow-accent">
                <div className="aspect-[4/3] mx-auto w-[150px]  ">
                  <img src={logo} alt={`${name} logo`} className="w-full h-full object-container" />
                </div>
                <hr className="mx-4 my-2 border-t-2 border-t-accent"/>
                <p>{name}</p>
                <p className="text-accent">{role}</p>
              </div>
            ))
          }
        </div>
      </section>
      {/* Core Values Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 variants={heading} initial="initial" whileInView="inView" viewport={viewport} className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center ">
            Our Core Values
          </motion.h2>
          <hr className="border-t-4 border-t-accent w-16 mx-auto mb-6 mt-2" />
          <div className="grid md:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                variants={card}
                initial="initial"
                whileInView="inView"
                viewport={viewport}
                key={index}
                className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-foreground/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

     
      

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
         <p className="uppercase text-accent font-bold text-xs mb-3 text-center">Testimonials</p>
        <h3 className="capitalize font-bold text-3xl md:text-4xl text-foreground mb-2 text-center">What Our Clients' Say</h3>
        <hr className="border-t-4 border-t-accent w-16 mx-auto mb-6" />
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div variants={cardImage} initial="initial" whileInView="inView" key={index} viewport={viewport} className="bg-card border border-border rounded-lg p-6">
                <p className="text-muted-foreground text-sm italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="text-right">
                  <p className="font-semibold text-primary text-sm">{testimonial.name}</p>
                  <p className="text-xs text-destructive">{testimonial.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="container bg-primary p-8 rounded-2xl mx-auto max-w-3xl text-center">
          <motion.h2 variants={heading} initial="initial" whileInView="inView" viewport={viewport} className="capitalize font-bold text-3xl md:text-4xl text-primary-foreground mb-4 text-center">
            Get the Right Materials for Your Project—<span className="text-accent">On Time</span> and <span className="text-accent">On Spec</span>.
          </motion.h2>
          <motion.p variants={subText} initial="initial" whileInView="inView" viewport={viewport} className="text-primary-foreground text-sm mb-8 max-w-xl mx-auto">
            Contact us today to discuss your project requirements and discover how KNL can support your success.
          </motion.p>
          <Link to="/contact">
            <MotionButton variants={button} initial="initial" whileInView="inView" viewport={viewport} className="bg-transparent border-2 border-accent hover:bg-accent/90 text-accent hover:text-white px-8">
              Request a Quote
            </MotionButton>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;