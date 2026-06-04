import { RiArrowDropRightLine } from "react-icons/ri";
import { motion } from "framer-motion"
import { heading, subText, viewport } from "../animation/animation"
import { useStateContext } from "../context/StateContext";
import RequestPrice from "./RequestPrice";
const products = [
  {
    name: "Iron Rods",
    description: "Premium TMT reinforcement bars designed for high-tensile strength and superior bond with concrete in structural foundations.",
    tags: ["Anti-corossive", "8mm-32mm"],
    image: { src: "https://res.cloudinary.com/dejzdypyf/image/upload/v1779642844/steelbar-o_gqqnmp.png", alt: "Full length reinforcement bars" },
  },
  {
    name: "Cement",
    description: "High-performance Portland cement offering rapid hardening and extreme durability for load-bearing walls and slabs.",
    tags: ["Bulk supply", "Certified quality"],
    image: { src: "https://res.cloudinary.com/dejzdypyf/image/upload/v1779642417/dangote_cement_dcbjho.png", alt: "50kg Dangote cement" }
  },
  {
    name: "Marine Boards",
    description: "Water-resistant, high-density plywood treated for coastal construction, formwork, and heavy-duty structural applications.",
    tags: ["Phenolic film", "18mm thickness"],
    image: { src: "https://res.cloudinary.com/dejzdypyf/image/upload/v1779641826/marine-board_qrrurp.png", alt: "knl quality marine boards" }
  },
  {
    name: "Binding Wires",
    description: "Built for secure reinforcement tying and dependable structural support.",
    tags: ["Multiple guages", "site delivery"],
    image: { src: "https://res.cloudinary.com/dejzdypyf/image/upload/v1779160378/China_Wire_Mesh_wx0vxy.jpg", alt: "Bundles of binding wires" }
  },
  {
    name: "Contruction Nails",
    description: "Strong and durable construction nails built for reliable fastening across a wide range of building applications",
    tags: ["Multiple sizes", "Bulk Orders"],
    image: { src: "https://res.cloudinary.com/dejzdypyf/image/upload/v1779166234/wire-nail_eifvxa.png", alt: "construction nails of different sizes" }
  }
];




const Products = () => {
  const {openModal, onRequestPrice} = useStateContext()
  return (
    <>
      <section id="products" className="section-padding bg-secondary">
        <div className="container-narrow mx-auto">
          <div className="text-center mb-12">
            <motion.h2 variants={heading} initial="initial" whileInView="inView" viewport={viewport} className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-3">
              What We Supply
            </motion.h2>
            <hr className="w-20 mx-auto border-t-4 border-t-destructive mb-4"></hr>
            <motion.p variants={subText} initial="initial" whileInView="inView" viewport={viewport} className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto">
              Reliable building materials for commercial, residential and large-scale construction projects across Nigeria. We ensure quality standard that stand the test of time
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {products.map(({ image, name, description, tags }, index) => (
              <div
                key={index}
                className="bg-card border border-slate-300  overflow-hidden rounded-xl  w-full space-y-4"
              >
                <div className="bg-black/5 aspect-[4/3] ">
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                </div>
                <div className=" mt-4 p-4 space-y-3">
                  <p className="text-xl text-blue-800 font-semibold">{name}</p>
                  <p className="text-sm text-slate-600 ">{description}</p>
                  <div className="flex gap-6">
                    {
                      tags.map((tag, i) => (
                        <span key={i} className="uppercase text-xs p-2 bg-slate-100 rounded-md">{tag}</span>
                      ))
                    }
                  </div>
                  <hr className="border-t border-t-slate-300"></hr>
                  <button className="text-destructive flex items-center gap-2 pb-4" onClick={() => onRequestPrice()}>Request price <RiArrowDropRightLine className="" /> </button>
                </div>
                {/* <div className="aspect-[4/3] overflow-hidden">
                <motion.img
                  variants={cardImage}
                  initial="initial"
                  whileInView="inView"
                  viewport={viewport}
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-5">
                <h3 className="font-heading font-semibold text-destructive ">
                  {name}
                </h3>
                <div className="flex flex-wrap gap-1.5 ">
                  {thickness.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-muted text-muted-foreground text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                  <Button variant="outline" size="sm" className="group w-full" onClick={() => onRequestPrice({productName: name, image})}>
                    Request price
                    <FiArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
              </div> */}
              </div>
            ))}
          </div>
          {
            openModal && <RequestPrice />
          }
        </div>
      </section>
    </>

  );
};

export default Products;