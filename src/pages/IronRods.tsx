import { Link } from "react-router-dom"
import Header from "../components/Header"
import { MotionButton } from "../components/ui/button"
import {heroButton, viewport } from "../animation/animation"
import { useStateContext } from "../context/StateContext"
import RequestPrice from "../components/RequestPrice"
import { IoLayersOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { GoShieldCheck } from "react-icons/go";
import { CiCalendarDate } from "react-icons/ci";
import Footer from "../components/Footer"
import { IoIosArrowRoundForward } from "react-icons/io";
const IronRodImg = "https://res.cloudinary.com/dejzdypyf/image/upload/v1781002600/visily-iron-rod-image_oa8iqd.png";


const IronRods = () => {
    const { onRequestPrice, openModal } = useStateContext()
    return (
        <div className="bg-background">
            <Header />
            <div className="min-h-screen bg-background max-w-7xl mx-auto">
                <div className="pt-8 px-4 lg:flex justify-center items-center gap-10 space-y-10">
                    <div className="space-y-6 lg:max-w-3xl flex-1">
                        <p className="uppercase font-semibold text-xs md:text-sm text-destructive">Iron rods supply</p>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-foreground ">Reliable Iron Rod Supplier in Lagos</h1>
                        <p className="text-sm md:text-base text-slate-600">Iron rods, also known as steel reinforcement bars (rebar), are essential materials used to strengthen concrete in construction projects. From residential buildings to large commercial structures, using the right size and quality of iron rods is critical for durability and safety.

                            At KNL Building Materials, we supply high-quality iron rods in Lagos at competitive prices.<br /> Our products are available in multiple sizes including 8mm, 10mm, 12mm, 16mm, and 20mm, suitable for foundations, columns, slabs, and structural work.

                            Whether you’re a contractor, builder, or individual working on a project, we provide reliable supply and fast delivery across Lagos to ensure your work continues without delay.</p>
                        <div className="flex flex-col sm:flex-row gap-3 animate-fade-in" >
                            <MotionButton variants={heroButton} initial="initial_l" animate="animate" viewport={viewport} onClick={() => onRequestPrice()} className="max-sm:w-full bg-primary hover:bg-primary-light text-primary-foreground rounded-xl p-6">
                                Get current price
                            </MotionButton>
                            <Link to="/" >
                                <MotionButton variants={heroButton} initial="initial_r" animate="animate" variant="outline" viewport={viewport} onClick={() => onRequestPrice()} className="max-sm:w-full border-2 border-accent text-accent p-6 rounded-xl ">
                                    View products
                                </MotionButton>
                            </Link>
                        </div>
                        <hr className=" border-t border-slate-300" />
                        <div className="space-y-4">
                            <p className="flex items-center gap-2"><IoLayersOutline className="text-destructive" /> Multiple sizes available</p>
                            <p className="flex items-center gap-2"> <TbTruckDelivery className="text-destructive" /> Fast delivery in Lagos and accross the states</p>
                            <p className="flex items-center gap-2"> <GoShieldCheck className="text-destructive" /> Quality assured materials</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-[450px] aspect-square bg-slate-200 shadow-lg rounded-xl overflow-hidden">
                        <img src={IronRodImg} alt="iron rod" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="pt-[7.5rem] space-y-6 px-4">
                    <div className="text-sm flex justify-center items-center gap-10">
                        <p className="text-destructive px-3 py-2 bg-red-50 rounded-2xl border border-destructive">Updated Monthly</p>
                        <p className="px-3 py-2 border border-slate-200 rounded-2xl flex items-center gap-1"> <CiCalendarDate /> April, 2026</p>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-foreground ">Current Iron Rod Prices in Lagos</h2>
                    <p className="text-sm md:text-base text-slate-600"> The price of iron rods in Lagos varies depending on size, quantity, and market conditions. Below is an estimated price range for available sizes</p>
                    <div>
                        {/* Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">

                                {/* Table Head */}
                                <thead className="bg-gray-100 text-left">
                                    <tr>
                                        <th className="p-4 text-sm font-semibold text-gray-700">Size</th>
                                        <th className="p-4 text-sm font-semibold text-gray-700">Common Use</th>
                                        <th className="p-4 text-sm font-semibold text-gray-700">Price Range</th>
                                    </tr>
                                </thead>

                                {/* Table Body */}
                                <tbody className="divide-y">
                                    {[
                                        { size: "8mm", type: "TMT", price: "₦830,000 – ₦1,300,000" },
                                        { size: "10mm", type: "Lion", price: "₦900,000 – ₦1,400,000" },
                                        { size: "12mm", type: "Local", price: "₦770,000 – ₦880,000" },
                                        { size: "16mm", type: "LCI", price: "₦920,000 – ₦1,250,000" },
                                        { size: "20mm", type: "Tiger", price: "₦950,000 – ₦1,400,000" },
                                    ].map((item, index) => (
                                        <tr key={index} className="hover:bg-gray-50">
                                            <td className="p-4 text-gray-800 font-medium">{item.size}</td>
                                            <td className="p-4 text-gray-600">{item.type}</td>
                                            <td className="p-4 text-primary font-semibold">{item.price}</td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                            <p className="text-sm text-slate-600 mt-4">
                                Note: Prices may vary based on quantity and current market conditions.
                            </p>
                        </div>
                    </div>
                </div>
                {
                    openModal && (
                        <RequestPrice />
                    )
                }

            </div>
            {/* Call to action  */}
            <div className="px-4">
                <div className="my-[7.5rem] max-w-7xl mx-auto bg-primary flex flex-col justify-center items-center gap-6 rounded-3xl  p-8">
                <div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl text-center max-w-xl mx-auto font-heading font-semibold text-primary-foreground mb-4">Get the Latest Iron rod prices and fast delivery across Nigeria</h3>
                <p className="text-center text-primary-foreground max-w-xl mx-auto">We source directly from major manufacturers and ensure door step delivery to your contruction site</p>
                </div>
                <MotionButton variants={heroButton} initial="initial_r" animate="animate" variant="outline" viewport={viewport} onClick={() => onRequestPrice()} className="max-sm:w-full p-6 border-2 border-accent  text-accent  rounded-xl">
                  Request Price <IoIosArrowRoundForward className="mr-2" />
                </MotionButton>
            </div>
            </div>
            <Footer />
        </div>

    )
}

export default IronRods