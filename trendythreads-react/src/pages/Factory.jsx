import React from 'react';
import { motion } from 'framer-motion';

const Factory = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const stats = [
    { val: "03", label: "State-of-the-Art Facilities", desc: "Strategically located industrial hubs in Dhaka." },
    { val: "20T", label: "Daily Knitting Capacity", desc: "Production of premium jersey and interlock fabrics." },
    { val: "100%", label: "In-House Embellishment", desc: "Integrated printing, embroidery, and finishing." },
    { val: "AQL 1.5", label: "Quality Standard", desc: "Rigorous global compliance and testing protocols." },
  ];

  const facilities = [
    {
      label: "Phase 01",
      title: "Textile Engineering",
      subtitle: "Knitting & Dyeing Mastery",
      desc: "Our high-gauge circular knitting units produce textiles with unmatched structural integrity. Paired with automated dyeing systems, we achieve precise color calibration and superior wash-fastness.",
      img: "/images/textile-engineering.jpg",
      tags: ["Swiss Tech", "24/7 Ops", "Zero-Waste"]
    },
    {
      label: "Phase 02",
      title: "Precision Assembly",
      subtitle: "The Cutting & Sewing Floor",
      desc: "Architectural precision in garment construction. We utilize CAD/CAM pattern optimization and 40+ specialized sewing lines to scale complex designs into market-ready high-volume production.",
      img: "/images/precision-assembly.jpg",
      tags: ["Lean Mfg", "Skill-Tech", "Automated"]
    },
    {
      label: "Phase 03",
      title: "Artisanal Scale",
      subtitle: "Printing & Embroidery Lab",
      desc: "Where technology meets aesthetic detail. Our multi-head Tajima systems and high-definition screen printing units provide deep tactile texture and vibrant, durable finishes.",
      img: "/images/artisanal-scale.jpg",
      tags: ["Reactive Dyes", "3D Puff", "Bespoke"]
    }
  ];

  return (
    <div className="bg-surface text-on-surface overflow-x-hidden">
      <main>
        {/* Immersive Hero */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden border-b border-white/5">
          <div className="absolute inset-0">
            <img 
              alt="Industrial Engineering" 
              className="w-full h-full object-cover scale-105" 
              src="/images/factory-hero-v2.png" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#091421]/90 via-[#091421]/40 to-[#091421]"></div>
          </div>
          
          <div className="relative z-10 text-center px-6 max-w-6xl">
            <motion.div {...fadeIn}>
              <span className="text-primary font-label uppercase tracking-[0.4em] text-xs mb-8 block">Dhaka, Bangladesh · Manufacturing Hub</span>
              <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl mb-10 leading-[0.95] tracking-tighter">
                Industrial <span className="italic text-primary font-light">Elegance.</span><br/>
                Precision at <span className="text-white/40">Scale.</span>
              </h1>
              <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto font-body font-light leading-relaxed">
                Experience a vertical manufacturing ecosystem where heritage craftsmanship meets avant-garde industrial technology.
              </p>
            </motion.div>
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
            <span className="text-[10px] font-label uppercase tracking-widest translate-x-1">Scroll to Explore</span>
            <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent"></div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-32 px-12 md:px-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
               {stats.map((stat, i) => (
                 <motion.div 
                   key={i}
                   {...fadeIn}
                   transition={{ delay: i * 0.1 }}
                   className="group"
                 >
                   <div className="text-primary font-headline text-5xl mb-4 group-hover:-translate-y-1 transition-transform duration-500">{stat.val}</div>
                   <div className="h-px w-12 bg-primary/30 mb-6 transition-all duration-500 group-hover:w-full"></div>
                   <h3 className="text-on-surface font-label uppercase tracking-widest text-xs font-bold mb-3">{stat.label}</h3>
                   <p className="text-on-surface-variant text-sm font-light leading-relaxed">{stat.desc}</p>
                 </motion.div>
               ))}
             </div>
          </div>
        </section>

        {/* Facility Tour Sections */}
        <section className="py-40 space-y-60 px-6 md:px-12">
          {facilities.map((fac, i) => (
            <div key={i} className={`max-w-7xl mx-auto flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 md:gap-32`}>
              <motion.div 
                {...fadeIn}
                className="w-full md:w-[55%] relative group"
              >
                <div className={`absolute -top-8 ${i % 2 !== 0 ? '-right-8' : '-left-8'} w-full h-full bg-surface-container -z-10 rounded-xl transition-transform duration-700 group-hover:scale-105`}></div>
                <div className="overflow-hidden rounded-xl aspect-[16/10] shadow-2xl border border-white/5">
                  <img alt={fac.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src={fac.img} />
                </div>
                <div className="absolute top-6 left-6 flex gap-2">
                  {fac.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-black/60 backdrop-blur-md text-[10px] font-label uppercase tracking-widest text-primary border border-primary/20">{tag}</span>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                {...fadeIn}
                transition={{ delay: 0.2 }}
                className="w-full md:w-[45%]"
              >
                <span className="text-primary font-label text-xs uppercase tracking-[0.4em] block mb-6">{fac.label}</span>
                <h2 className="font-headline text-5xl md:text-6xl mb-4 leading-none">{fac.title}</h2>
                <h4 className="text-on-surface-variant font-label text-sm uppercase tracking-widest mb-10 opacity-60">{fac.subtitle}</h4>
                <div className="w-16 h-1 bg-primary mb-10"></div>
                <p className="text-on-surface-variant leading-relaxed text-lg font-light mb-12 max-w-md">
                  {fac.desc}
                </p>
                <button className="flex items-center gap-6 group">
                  <span className="text-on-surface font-label uppercase text-[10px] tracking-[0.3em] group-hover:text-primary transition-colors">Digital Tour</span>
                  <div className="w-12 h-px bg-on-surface/30 group-hover:w-20 group-hover:bg-primary transition-all duration-500"></div>
                </button>
              </motion.div>
            </div>
          ))}
        </section>

        {/* Production Process: Seamless Precision */}
        <section className="bg-[#040f1b] py-40 px-6 md:px-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-32">
              <span className="text-primary font-label text-xs uppercase tracking-[0.4em] block mb-4">Vertical Integration</span>
              <h2 className="font-headline text-5xl md:text-7xl">Precision <span className="italic text-white/50">Pipeline.</span></h2>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-12">
              {[
                { title: "Fabric Sourcing", sub: "Global Supply Chain" },
                { title: "Knitting Lab", sub: "Textile Engineering" },
                { title: "Precision Cut", sub: "CAD/CAM Spreading" },
                { title: "Industrial Sew", sub: "40+ Lines Active" },
                { title: "Print & Emb", sub: "Bespoke Finishing" },
                { title: "QC Protocols", sub: "AQL 1.5 Standard" },
                { title: "Steam Press", sub: "Form Preservation" },
                { title: "Global Logis", sub: "Door-to-Door Delivery" }
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  {...fadeIn}
                  transition={{ delay: i * 0.05 }}
                  className="group relative"
                >
                  <div className="font-headline text-white text-9xl absolute -top-12 -left-6 opacity-[0.03] select-none group-hover:opacity-[0.07] transition-opacity">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="relative pt-8">
                    <h3 className="text-primary font-label uppercase tracking-widest text-sm mb-2 group-hover:translate-x-2 transition-transform duration-500">{step.title}</h3>
                    <p className="text-on-surface-variant text-[10px] uppercase tracking-[0.2em] font-light opacity-60 transition-opacity group-hover:opacity-100">{step.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Lab Interaction */}
        <section className="py-40 px-6 md:px-12">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2">
               <h2 className="font-headline text-5xl md:text-6xl mb-12">Zero-Tolerance <br/><span className="text-primary italic">QC Infrastructure.</span></h2>
               <div className="space-y-12">
                  {[
                    { title: "Tensile Strength Lab", icon: "architecture", desc: "Rigorous testing of yarn integrity before knitting cycle." },
                    { title: "Color Spectrometer", icon: "palette", desc: "Chromatographic verification of dye consistency across lots." },
                    { title: "Independent Audits", icon: "verified", desc: "Third-party AQL 1.5 inspections for global retail compliance." }
                  ].map((item, i) => (
                    <motion.div key={i} {...fadeIn} className="flex gap-8 group">
                      <div className="w-16 h-16 shrink-0 bg-surface-container flex items-center justify-center border border-white/5 transition-colors group-hover:border-primary/40">
                        <span className="material-symbols-outlined text-primary text-3xl">{item.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-headline text-2xl mb-2 text-on-surface">{item.title}</h4>
                        <p className="text-on-surface-variant font-light leading-relaxed max-w-sm">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
               </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full"></div>
               <div className="relative border border-white/5 bg-surface-container p-12 lg:p-20 rounded-2xl backdrop-blur-xl">
                  <div className="space-y-8 mb-12">
                    <div className="h-2 w-3/4 bg-primary/20 rounded"></div>
                    <div className="h-2 w-full bg-primary/20 rounded"></div>
                    <div className="h-2 w-1/2 bg-primary/20 rounded"></div>
                  </div>
                  <div className="border-2 border-dashed border-primary/20 rounded-xl p-12 text-center group cursor-pointer hover:border-primary/40 transition-all duration-500">
                    <span className="material-symbols-outlined text-6xl text-primary/40 group-hover:text-primary transition-colors mb-4">qr_code_scanner</span>
                    <h5 className="text-primary font-label uppercase tracking-[0.2em] text-xs">Access Lab Reports</h5>
                    <p className="text-[10px] text-on-surface-variant uppercase mt-2">Client authentication required</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Architectural CTA */}
        <section className="py-48 px-6 bg-surface-container relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 mix-blend-overlay">
            <img className="w-full h-full object-cover grayscale" src="/images/factory-hero-v2.png" alt="Factory Footer" />
          </div>
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <motion.div {...fadeIn}>
              <h2 className="font-headline text-5xl md:text-8xl mb-16 leading-[0.9] tracking-tighter">
                Engineering <br/> <span className="text-primary">Your Vision.</span>
              </h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <button className="bg-primary text-on-primary px-16 py-6 font-label uppercase tracking-[0.3em] text-[10px] font-bold shadow-2xl hover:bg-white hover:text-black transition-all duration-500 w-full md:w-auto">
                  Book A Facility Tour
                </button>
                <button className="px-16 py-6 border border-white/10 font-label uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-white/5 transition-all duration-500 w-full md:w-auto">
                  Download Catalog
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Factory;
