import { RiTruckLine } from "react-icons/ri";
import { RiBuildingLine } from "react-icons/ri";
import { GoShieldCheck } from "react-icons/go";
import { LuPackageCheck } from "react-icons/lu";
import { BsCheckCircle } from "react-icons/bs";
import { FiAlertCircle } from "react-icons/fi";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import RequestPrice from "../components/RequestPrice";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { useStateContext } from "../context/StateContext";

const pricingRows = [
  { brand: "Dangote 3X (3X)", price: "₦8,200", availability: "", trend: "+1.4%", up: true },
  { brand: "BUA Cement", price: "₦7,950", availability: "Limited Stock", trend: "-0.5%", up: false },
  { brand: "Lafarge Elephant", price: "₦8,150", availability: "Reginal Only", trend: "—" },
  { brand: "Ibeto Cement", price: "₦7,800", availability: "Promo Only", trend: "No Chg" },
  { brand: "Dangote Block", price: "₦7,400", availability: "", trend: "+1.4%", up: true },
];

// const brands = [
//   {
//     name: "Dangote 3X",
//     tag: "Premium",
//     desc: "High-strength cement, ideal for high-rise construction and structural integrity in unique projects.",
//   },
//   {
//     name: "BUA Cement",
//     tag: "Standard",
//     desc: "Versatile cement for general-purpose building and residential projects across regions.",
//   },
//   {
//     name: "Lafarge Elephant",
//     tag: "Trusted",
//     desc: "A trusted, reliable name in cement with consistent quality and high performance in tough conditions.",
//   },
// ];

const deliveryAreas = [
  "Ikeja & Environs",
  "Lekki / Phase 1 & 2",
  "Victoria Island",
  "Yaba & Surulere",
  "Yaba area",
  "Ikoyi & Banana Island",
  "Apapa Wharfs",
  "Ikorodu / Industrial Area",
  "Badagry Expressway",
  "Alimosho",
  "Ojota / Ikosi",
  "Epe Express",
];

const advantages = [
  { icon: RiTruckLine, title: "Superior Speed", desc: "Same-day or next-day dispatch on most stocked orders." },
  { icon: RiBuildingLine, title: "Factory Prices", desc: "Direct mill pricing, no middlemen, low rates for bulk orders." },
  { icon: GoShieldCheck, title: "Authenticity", desc: "Every cement bag is 100% factory-fresh, sealed, and verified." },
  { icon: LuPackageCheck, title: "Always Stocked", desc: "Inventory ready, no waiting, no surprises during peak season." },
];



const faqs = [
  {
    q: "What is the minimum order quantity for delivery?",
    a: "Our minimum order is 50 bags within Lagos. For locations outside Lagos, a minimum of 100 bags applies to cover logistics. We can also arrange smaller pickups directly from our depot.",
  },
  { q: "Do you offer credit facilities for construction firms?", a: "Yes, qualified contractors and registered firms can apply for trade credit after a short verification." },
  { q: "How do I know the cement is not expired or re-bagged?", a: "All cement is factory-sealed, sourced directly from the manufacturer, with production batch codes clearly visible." },
  { q: "Does the price include offloading at my site?", a: "Standard delivery covers drop-off at site. Offloading labour can be arranged at an additional fee." },
];

const CementSupplier = () => {
  const {onRequestPrice, openModal} = useStateContext()
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-4">
        {/* Hero */}
        <section className="px-4 py-10 md:py-16 ">
          <div className="container-narrow mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium text-accent border border-accent mb-5">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Lagos #1 Cement Distributor
                </div>
                <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground leading-tight mb-5">
                  Cement Supplier in Lagos –{" "}
                  <span className="text-accent">Affordable Prices</span>{" "}
                  &amp; Fast Delivery
                </h1>
                <p className="text-muted-foreground text-sm md:text-base mb-6 max-w-lg">
                  Direct distribution to your site. We aim to be the middleman so you get the best daily market rates on Dangote, BUA, and Lafarge cement.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <Button className="bg-primary hover:bg-primary-light  text-primary-foreground p-6 rounded-xl" onClick={() => onRequestPrice()}>Get Today's Price</Button>
                  <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-destructive-foreground p-6 rounded-xl">
                    Contact Sales
                  </Button>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><BsCheckCircle className="w-4 h-4 text-primary" /> 100% original products</li>
                  <li className="flex items-center gap-2"><BsCheckCircle className="w-4 h-4 text-primary" /> Same-day delivery available</li>
                  <li className="flex items-center gap-2"><BsCheckCircle className="w-4 h-4 text-primary" /> Verified distributor</li>
                </ul>
              </div>

              <div className="relative">
                <div className="bg-secondary rounded-2xl overflow-hidden flex items-center justify-center">
                  <div className="w-full">
                    <img src="https://res.cloudinary.com/dejzdypyf/image/upload/v1779551677/knl-cement_esjtwx.png" alt="KNL cement supply" className="w-full h-full object-cover" />
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </section>

        {/* Supplying foundation */}
        <section className="section-padding bg-secondary">
          <div className="container-narrow mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="overflow-hidden rounded-2xl aspect-square">
               <img src="https://res.cloudinary.com/dejzdypyf/image/upload/v1779555602/construction-site_ac6tei.jpg" alt="active construction site" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Supplying the Foundation of Lagos
                </h2>
                <div className="w-12 h-0.5 bg-accent mb-4" />
                <p className="text-muted-foreground text-sm md:text-base mb-6">
                  At KNL Building Materials, we understand that every minute on the construction site is money. A delay in cement delivery can halt an entire process. That's why we built the most reliable distribution network across Lagos Mainland and Island.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-4">
                  <div>
                    <p className="font-heading text-2xl md:text-3xl font-bold text-primary">150k+</p>
                    <p className="text-xs text-muted-foreground">Bags delivered monthly</p>
                  </div>
                  <div>
                    <p className="font-heading text-2xl md:text-3xl font-bold text-primary">100+</p>
                    <p className="text-xs text-muted-foreground">Active construction clients</p>
                  </div>
                </div>
                <a href="/about" className="text-sm text-accent font-medium hover:underline">
                  Learn more about our history →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing table */}
        <section className="section-padding">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                Real-Time Pricing Table
              </h2>
              <p className="text-muted-foreground text-sm max-w-xl mx-auto">
                We update our prices for cement daily based on factory rates. All prices are per 50kg bag. Delivery rates are quoted on a per-trip basis.
              </p>
            </div>

            <div className="border border-border rounded-lg overflow-hidden bg-background">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-secondary">
                      <TableHead>Brand / Manufacturer</TableHead>
                      <TableHead>Price (50kg Bag)</TableHead>
                      <TableHead>Availability / Notes</TableHead>
                      <TableHead className="text-right">Market Trend</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pricingRows.map((row) => (
                      <TableRow key={row.brand}>
                        <TableCell className="font-medium">{row.brand}</TableCell>
                        <TableCell className="text-primary font-semibold">{row.price}</TableCell>
                        <TableCell className="text-muted-foreground text-sm">{row.availability || "—"}</TableCell>
                        <TableCell className={`text-right text-sm ${row.up === true ? "text-emerald-600" : row.up === false ? "text-destructive" : "text-muted-foreground"}`}>
                          {row.trend}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="border-t border-border bg-destructive/5 p-4 flex items-start gap-2">
                <FiAlertCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-destructive mb-1">IMPORTANT MARKET DISCLAIMER</p>
                  <p className="text-xs text-muted-foreground">
                    Cement prices fluctuate daily based on factory release, fuel cost, and demand. Please call to confirm the live price before placing your order.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brands */}
        {/* <section className="section-padding bg-secondary">
          <div className="container-narrow mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Our Premium Brands
                </h2>
                <p className="text-muted-foreground text-sm max-w-xl">
                  We work only with the highest-grade 42.5N and 32.5N cement types for blocks, plastering, and heavy structural work.
                </p>
              </div>
              <Button variant="outline" size="sm" className="w-fit">View all catalog</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {brands.map((b) => (
                <div key={b.name} className="bg-background border border-border rounded-xl overflow-hidden">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <RiBuildingLine className="w-12 h-12 text-muted-foreground/40" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-heading font-semibold text-foreground">{b.name}</h3>
                      <span className="text-xs bg-secondary text-muted-foreground px-2 py-0.5 rounded">{b.tag}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">{b.desc}</p>
                    <a href="#" className="text-xs text-sky-500 font-medium hover:underline">
                      Technical Specs →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Delivery */}
        <section className="section-padding">
          <div className="container-narrow mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Prompt Delivery Across Lagos
                </h2>
                <p className="text-muted-foreground text-sm mb-6">
                  Our fleet of specialised trucks ensures your construction site is never out of supply. We can dispatch from the central Lagos warehouse to every corner of the state with standard delivery windows of 12–24 hours.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {deliveryAreas.map((area) => (
                    <div key={area} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BsCheckCircle className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                      {area}
                    </div>
                  ))}
                </div>

                <div className="bg-sky-50 border border-sky-200 rounded-lg p-4 flex items-center gap-3">
                  <RiTruckLine className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Next-Day Delivery Guarantee</p>
                    <p className="text-xs text-muted-foreground">For orders placed before 12pm.</p>
                  </div>
                </div>
              </div>

              <div className="aspect-square bg-muted rounded-2xl overflow-hidden flex items-center justify-center relative">
                <img src="https://res.cloudinary.com/dejzdypyf/image/upload/v1779556822/tow-truck_kgipge.jpg" alt="delivery truck" className="w-full h-full object-cover"/>
                <div className="absolute top-4 left-4 right-4 bg-background rounded-lg p-2 flex items-center justify-between shadow-sm">
                  <span className="text-xs font-medium">15 Trucks Currently Active</span>
                  <span className="text-xs bg-primary text-white px-2 py-0.5 rounded">Live</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="section-padding bg-secondary">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
                The KNL Building Materials Advantage
              </h2>
              <p className="text-muted-foreground text-sm max-w-xl mx-auto">
                Why most construction firms and contractors in Lagos rely on us for their cement supply needs.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {advantages.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-background border border-border mx-auto mb-3 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground text-sm mb-1">{title}</h3>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding">
          <div className="container-narrow mx-auto max-w-3xl">
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-sm">
                Find answers to common questions about orders, payments, and delivery.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-sm font-medium">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-12 md:py-16 mb-6 ">
          <div className="container-narrow mx-auto p-8 bg-primary rounded-2xl flex flex-col gap-6 justify-center items-center">
            <div className="text-muted-foreground">
              <h2 className="font-heading text-3xl text-primary-foreground md:text-3xl font-bold mb-2">
                Ready to Start Your Next Project?
              </h2>
              <p className="text-sm text-primary-foreground max-w-md text-center">
                Don't let cement price hikes catch you off guard. Lock in today's best rate and schedule your delivery now.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Button className="bg-accent  border-muted hover:bg-accent text-white/90 hover:text-white rounded-xl p-6" onClick={() => onRequestPrice()}>Get Today's Price</Button>
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-primary-foreground rounded-xl p-6">
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
        {
          openModal && (
            <RequestPrice />
          )
        }
      </main>

      <Footer />
    </div>
  );
};

export default CementSupplier;