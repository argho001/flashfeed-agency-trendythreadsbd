import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { staggerChildren: 0.15 }
  };

  const itemFade = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="relative">
      {/* Cinematic Hero Section */}
      <section className="relative min-h-[600px] flex items-start pt-40 pb-24 px-8 md:px-16 overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity" 
            alt="dramatic wide angle shot of a modern clean industrial garment factory interior with soft moody lighting and fabric rolls" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7FTV5uUKkFsI_Nz5vWq2EZpq7WvKXkdKDGoswsgn7BiryTy9pfvH0PZ54yXNfbW9CL0xqQmOvOwiAfaW61RlhpwtykCt7BcCsMzKa3l8fT7VtnJI48WjkIc_0c0BhmfrpKNrd30r8FDNLXtbstYIB1xsqPFPuWI_2xZ68VIAtABHNqee0iGylXqsmm3_kpWk9E3dq8f-y3xLh_b_Ppi_TG2CNxXd6Ip1XVwv27cOjQKpeZUxWYyVQjY4Ys6gTgcu7VhlyyexW6cc" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60"></div>
        </div>
        <div className="relative z-20 max-w-4xl space-y-8">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-headline font-bold leading-tight tracking-tighter text-on-surface"
          >
            Bangladesh's Premier <span className="text-primary italic">Garment</span> Manufacturer
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-on-surface-variant font-light leading-relaxed max-w-2xl"
          >
            Custom clothing manufacturing & global export — T-shirts, Hoodies, Jackets, Knitwear and more. Serving Europe & USA since 2009.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <button className="w-full sm:w-auto bg-primary text-on-primary px-10 py-4 font-label uppercase tracking-widest text-sm font-bold shadow-lg hover:scale-105 active:scale-95 transition-all text-center">
              Schedule a Meeting
            </button>
            <button className="w-full sm:w-auto border border-outline-variant text-on-surface px-10 py-4 font-label uppercase tracking-widest text-sm hover:bg-on-surface/5 transition-all text-center">
              Explore Products
            </button>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-outline-variant/20"
          >
            {[
              { title: "Since 2009", sub: "Proven Heritage" },
              { title: "Direct Factory", sub: "Vertical Integration" },
              { title: "Global Export", sub: "Worldwide Shipping" },
              { title: "Free Sample", sub: "Quality Assurance" }
            ].map((stat, i) => (
              <motion.div key={i} variants={itemFade} className="space-y-1">
                <p className="text-primary font-headline text-3xl font-bold">{stat.title}</p>
                <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant">{stat.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-24 px-8 bg-surface">
        <div className="max-w-7xl mx-auto space-y-12">
          <motion.div {...fadeIn} className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="space-y-4">
              <h2 className="text-xs uppercase tracking-[0.3em] font-label text-primary">Manufacturing Portfolio</h2>
              <h3 className="text-4xl md:text-5xl font-headline font-bold">Product Categories</h3>
            </div>
            <p className="text-on-surface-variant max-w-md font-light">Precision engineered garments across all segments, utilizing high-grade fabrics and ethical production methods.</p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* Category Cards */}
            {[
              { title: "Men's Apparel", label: "Professional", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwBDOHynT0x3Zf0QWx3JEJVAFRgtomdD30q0fOXpWFqEpChFzZNVjj4VeglaN_yMCzybxskgB0u6rosUINHXOiyyAXa-HFw653m8kNpRALbuarVsZgoZV5AM6mpLZMcynMa6ng4ag2fQWzkf-zX27VRBFSiOGEDgHzX-a6F6JMd5UN2QEeLe2dd_xx-SSEv6xd5Fyk42WVpSx8ON0sixsE5lln0mqmk05K5IeAWraqZiKuxApzMlmK6BbMxnC5fEZ8Oyxr17Uo11o" },
              { title: "Women's Fashion", label: "Tailored", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSL0NM8lbH_u9KcpRLPcHyhKoaE6NNSuhfDrEUWd_uROosSTrLwE_ObVjHuG60Btq9_LCgKkLOBbjr_yvRih1yP2jF6zBYrrGkk0JOA8qbo7qv9tvm7tz9hpZ0bc07h-15d1LS-ZVJDOVVxU43KrlFBxfTCbrPVRuQSwBgZeaqkcOQcHCOtshHXgE4kFp6Gld-OAdy-bo9hRLwEw0CrJvN8Puql_BUL_YXZgrAPzje0YzpCsKRycB844mahQV5zbAlUnRQUfGRQlM" },
              { title: "Premium T-Shirts", label: "Essentials", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD81-UHh9YUx7gm2tR10tADC6QEPqtgnCD68xBnBAIyEG7fbRPWSSn_hZPl-_wEXd3QJ6_COWEu0zGjPiDK3XBWfpO5Y2x_iFSPsXCyTLSpID0KJX1aaSpz0dRpWLS5bS0hLAH4tHbxUWJmu4lBmEjUxOQs5RjTygZYBQnJnTJDYlrZCNepILjTfcN1OYkz4GcBdVQrogs6tcM3YHJ6ER74nn2O7c4jfQXV-UouIGVb6Jtk_DbXorIYABR-1fzu9cRqjoebqQChjXc" },
              { title: "Kids Clothing", label: "Quality", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuApNUFlc5vby-iNM75EAZWUgcJYeP7MK1gPjlpVRA4uhFqV0PLQBkxVm7h6MRwkTdnOAmEGFLWf_V-JgvRZzHVsrQ8XuQ2uU90FJbseyhAxO5eoC8IEBdPc8vZUjcm8CjJPD0g1lc8fscgzDK7L1hC5XQ9LvkItKubEAjxYKYRniX7lE_ykk08LEzIylHV_TUjRBlz2zfSOzmddceyWNEQZ7Q0t-D1g5SfzwJA1igNLyjBRK8en1DZRojoN5z4uN8KAh61KkRWpPBk" },
              { title: "Hoodies", label: "Outerwear", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0lnJhBuUrfU0jDKcJs5kp6YZu03ebUyYhb-cqCuGdHKsBOsM9v-mzPygOcvs484SGWLuPkzLJCzMHdDpsDewGnoTvYP6U-OaUhzbJNCrYkKRQ9z8nds2PzjYB_7-4bAp8BihJ8CIqQHC9GdNOTtcFgIHKeMncTaHBX69j4_K0C4kYfsRrC4YwvTRugKbwY_ppWrs_emc-pPXiyTq96p37X7UU3iH90-erlTJ1VwyXtSocIlkfr-KsAxzRhTFN99XF9iM2sh3J8ek" },
              { title: "Technical Jackets", label: "Utility", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCirAuJKy2CjyZkAe8huvSHSewjkaXHqT4ajtsUg6z5NjfAI5u3d4UnxiysnrZcODcA3sIdkBL0hO8AyCVM_WvZE7sE6WA3--z_dLIolTzGtsTnOavS35KLfFDxTGoz_17FtB4iuP5fDLsxGQNEi5aG5fVQE2i2m3QNHXD57RtnILygcYOLgbsVXwylAVRL61ul2qbz01pi7zId7GEcEerjZRdfClG2nYmh87E3gXm_b7FyR9DIrno3GnDXpr-w1z83CRocZ1qsD_Y" },
              { title: "Sweatpants", label: "Comfort", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVjzgMzWRIxOOOQAdrYQ_JzqKjtz__rIpnh9_jvsFhS24anHG5y6eJ2Tfa1LSX1uS48UPu9FJeus0XHSQI3N-EOnbZ2S0LgphhOGqi-zwzs7hjQm-31ksonzNpvYGlYoHSlBp9VgMJEHwerY3gK-UfKKzZ7_JizqdnUu-bt5xCxPFdyvCDHDpJfd7mVy_kXuALsH5SREabzFndICNYF-LlZbvSrss_SXnvyLdom6GtfHng7kU2IJzVyX5zr060cPrZPPQ7jG9xDoc" },
              { title: "Premium Shorts", label: "Active", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuALgD28AGOxOAU2yIusz4tEv83ShDRASsl1izVbQ7Jn7N-PzDzTbL9xJPm4XGd_gdUv88dtKEUk8jBqDz7wC7z7wENr_1lmgvqrDi6wSvBdaSJjkMpuaRNlurEylxtUnIS18E3ZjPK6D4HZD-3BPANX3IjyL1xXSu8DwSR6K_j1pMXL5wipmFaTJ-sAnpDb4OFakQCDMzQGgeIhoMDMiWraWY3yjtxfgRtNBQoACqurlf8oeC7Tt7K9J_1EXn1gFSA0C9ZjHctOblM" },
            ].map((cat, i) => (
              <motion.div key={i} variants={itemFade} className="group relative aspect-[4/5] overflow-hidden bg-surface-container-high cursor-pointer">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-100" src={cat.img} alt={cat.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <p className="text-primary font-label text-xs uppercase tracking-widest mb-1">{cat.label}</p>
                  <h4 className="text-2xl font-headline font-bold text-on-surface">{cat.title}</h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-on-surface-variant text-surface px-8">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          <motion.div variants={itemFade} className="space-y-6 bg-surface/5 p-10 border border-surface/10 hover:bg-surface/10 transition-all duration-500">
            <span className="material-symbols-outlined text-5xl text-[#141a24]">factory</span>
            <h4 className="text-2xl font-headline font-bold">Direct Factory Access</h4>
            <p className="text-surface/70 leading-relaxed">Skip the middlemen. We own our production units, ensuring direct communication, competitive B2B pricing, and full oversight of the supply chain.</p>
          </motion.div>
          <motion.div variants={itemFade} className="space-y-6 bg-surface/5 p-10 border border-surface/10 hover:bg-surface/10 transition-all duration-500">
            <span className="material-symbols-outlined text-5xl text-[#141a24]">architecture</span>
            <h4 className="text-2xl font-headline font-bold">Free Sample Available</h4>
            <p className="text-surface/70 leading-relaxed">Test our quality before you commit. We offer prototype development and fabric swatches to ensure your designs meet international standards.</p>
          </motion.div>
          <motion.div variants={itemFade} className="space-y-6 bg-surface/5 p-10 border border-surface/10 hover:bg-surface/10 transition-all duration-500">
            <span className="material-symbols-outlined text-5xl text-[#141a24]">public</span>
            <h4 className="text-2xl font-headline font-bold">Global Export Ready</h4>
            <p className="text-surface/70 leading-relaxed">Experience in shipping to Europe and the USA. Our logistics team handles international documentation and customs for a seamless delivery.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* About Strip */}
      <section className="relative py-20 px-8 bg-surface-container-lowest overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div {...fadeIn} className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Part of the WEFTEX GROUP</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl">
              A vertically integrated manufacturing powerhouse. We operate multiple production units specializing in diverse garment categories, maintaining a commitment to 100% quality assurance and ethical sourcing standards.
            </p>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="flex-shrink-0 grid grid-cols-2 gap-8 text-center bg-surface-container-high p-10 shadow-2xl"
          >
            {[
              { val: "15+", label: "Years Exp" },
              { val: "3", label: "Factories" },
              { val: "100%", label: "Quality" },
              { val: "50+", label: "Global Clients" },
            ].map((stat, i) => (
              <motion.div key={i} variants={itemFade}>
                <p className="text-primary text-4xl font-headline font-bold">{stat.val}</p>
                <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Order Process */}
      <section className="py-24 px-8 bg-[#0b1624] border-t border-outline-variant/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-30"></div>
        <div className="max-w-7xl mx-auto text-center space-y-16 relative z-10">
          <motion.div {...fadeIn} className="space-y-4">
            <h2 className="text-xs uppercase tracking-[0.3em] font-label text-primary">Workflow</h2>
            <h3 className="text-4xl md:text-5xl font-headline font-bold">Our Seamless Process</h3>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-6 relative"
          >
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hidden lg:block absolute top-[40px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent z-0 origin-left"
            ></motion.div>
            
            {[
              { icon: "edit_note", title: "Place Order", desc: "SUBMIT SPECIFICATIONS" },
              { icon: "architecture", title: "Sample Dev", desc: "PROTOTYPE APPROVAL" },
              { icon: "fact_check", title: "Quality Inspection", desc: "FABRIC TESTING" },
              { icon: "precision_manufacturing", title: "Production", desc: "MASS MANUFACTURING" },
              { icon: "local_shipping", title: "Global Shipment", desc: "DOORSTEP DELIVERY" },
            ].map((step, i) => (
              <motion.div key={i} variants={itemFade} className={`relative z-10 flex flex-col items-center group ${i === 4 ? 'col-span-2 md:col-span-1' : ''}`}>
                <div className="w-16 h-16 md:w-20 md:h-20 bg-surface-container-highest flex items-center justify-center mb-4 md:mb-6 border border-primary/20 group-hover:bg-primary group-hover:text-on-primary transition-all duration-500">
                  <span className="material-symbols-outlined text-2xl md:text-3xl">{step.icon}</span>
                </div>
                <h5 className="text-base md:text-lg font-headline font-bold mb-1 md:mb-2">{step.title}</h5>
                <p className="text-[10px] md:text-xs text-on-surface-variant font-label tracking-wide uppercase text-center">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
