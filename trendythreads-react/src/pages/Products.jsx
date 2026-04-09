import React from 'react';

const Products = () => {
  return (
    <div className="relative">
      <main className="pt-24 min-h-screen">
        {/* Page Header */}
        <header className="relative w-full h-[460px] flex flex-col justify-center items-start px-12 bg-surface-container-lowest overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <img 
              className="w-full h-full object-cover" 
              alt="Industrial sewing" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPEbML0j0QVjtw7CKyJfLPujXK_inGhEoCho6pYCdLqzP3rQ4YhU44_Ukvo-Cfgey0Z64SxNXHieDOxjA2Sr61V7nEXBggEnS7GMxu6AEek-1Egbu4pNXwRPnoHGWwjwIDzRHLIw8RqbqRZSHparQooTsBYOTu1Nip4raKx2fH47KypBVCqoujHUBD1l1O_bO_YcgMMiitpRpCxg8wE2n-d1wktJY2u8CpnAclqTn0LhL2sIFFkVozd-4HCFd-xRpItUOQAvMf72A" 
            />
          </div>
          <div className="relative z-10 max-w-4xl">
            <nav className="flex gap-2 text-xs font-label uppercase tracking-widest text-primary mb-4">
              <span className="opacity-60">Home</span>
              <span className="opacity-60">/</span>
              <span>Shop</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-headline text-on-surface-variant mb-6 leading-none">Our Product Catalog</h1>
            <p className="text-lg md:text-xl text-on-surface-variant/80 max-w-2xl font-body leading-relaxed">
              Premium manufacturing solutions for global retailers. Bulk orders starting from 500 units. Certified sustainable materials and industrial-grade craftsmanship.
            </p>
          </div>
        </header>

        {/* Catalog Layout */}
        <div className="flex flex-col md:flex-row min-h-screen">
          {/* Sidebar Filters */}
          <aside className="md:sticky md:top-24 h-fit md:h-[calc(100vh-6rem)] w-full md:w-80 bg-[#091421] border-r border-white/5 flex flex-col py-8 px-8 gap-8">
            <div className="space-y-1">
              <h2 className="text-lg font-headline text-stone-200">Product Filters</h2>
              <p className="text-xs font-label text-stone-400 uppercase tracking-tighter">Refine by Specification</p>
            </div>
            <div className="space-y-10 overflow-y-auto pr-2">
              <section>
                <h3 className="text-primary font-label text-xs uppercase tracking-widest mb-4 border-b border-outline-variant/30 pb-2">Categories</h3>
                <div className="space-y-3">
                  {["Men's Apparel", "Women's Collection", "Children's Wear", "Active & Outerwear"].map((cat) => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                      <input className="w-4 h-4 rounded-sm border-primary text-primary focus:ring-0 focus:ring-offset-0 bg-transparent" type="checkbox" />
                      <span className="text-sm text-stone-300 group-hover:text-primary transition-colors">{cat}</span>
                    </label>
                  ))}
                </div>
              </section>
              <section>
                <h3 className="text-primary font-label text-xs uppercase tracking-widest mb-4 border-b border-outline-variant/30 pb-2">Fabric Types</h3>
                <div className="space-y-3">
                  {["Organic Cotton", "Sustainable Linen", "Recycled Polyester", "Technical Blends"].map((fabric) => (
                    <label key={fabric} className="flex items-center gap-3 cursor-pointer group">
                      <span className="material-symbols-outlined text-stone-400 text-lg">texture</span>
                      <span className="text-sm text-stone-300">{fabric}</span>
                    </label>
                  ))}
                </div>
              </section>
            </div>
            <div className="mt-auto pt-6">
              <button className="w-full bg-primary text-on-primary py-4 font-label uppercase text-xs tracking-widest hover:brightness-110 transition-all">
                Request Bulk Quote
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <section className="flex-1 bg-[#fcfbf7] text-stone-900 py-16 px-8 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16">
              {[
                { title: "Heritage Cotton Blazer", desc: "Structured tailoring meets sustainable organic fibers. Reinforced seams for industrial durability.", label: "Organic Series", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOW8aUiglJq2Tz_hDJ8Kdhxw7hfox2xtU4Se9JkScsYRIiIyF-W_i7-GV5bKLp2Izp6MxDmdRtjs_qecgifolYXY-rqyP-zWO2FsNWIsMKUG1NxOgd3h6VFyFT8AhLkstsKlg6R8QGBpNB41yvckck7N6WLNapgiKiJZBsPxoRHklWqTn7LgXuM2PqYrlIXDpuhS8IWeBkVftStnMvdQ5Uvnf8zc70pWMVgSAn8PK55vu5A96D_rGQ_s2OeDQz22XVT1ld0XIXFRs" },
                { title: "Architectural Knit Pull", desc: "High-gauge technical knit designed for shape retention and thermal efficiency in cold climates.", label: "Knitwear", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBop8ecw-7je_kBbbjwWg8b4qBsXfKAge1eZvPCDSLNA6astXDYj-0gU19OkXNGNfVu35dCxbzb7Em5cYOmk-tlSqPIomuqGVN1DhdQRTeCedtvpvpy_Cd3lf5sKkow_oXL0az-9RA1e_miHyIB6pIBIOdryYdng4dsCh3uA6xvDBD_2NWqOz3zxro1MNpK1D0_1i41qPloH4PvNAlMPOCYSxXVgn2JqldHkUinWC_SUMGcYQ4UiytMh3jxVGP0gYg6WTQB_O6y774" },
                { title: "Industrial Wool Overcoat", desc: "Heavyweight wool blend featuring water-resistant treatment and bespoke internal finishing.", label: "Outerwear", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVHCjX95Y5JZkuYSVkOYK889cQodylKamdjGH7JXRMYy4-s3Rzc950hztbF4aToSXrEXMDX47H971fGSFAsmVmezoTx1f_pfFKbZviCnwPTV_k4c03imngVrzN_Gcd3Hr73WHz8y1e8NxgtunDkwLW_CtcirhygkbnkCNSeDXQXMcVMyPP37bXpTm3H7xHsHynVYPqeiSVPp2GRtu2lGyFNw0Voe8s5v-BL6IGxGTrm-yg85GwK_hP-Vy7umPXgrAUjbTkt8R8FO0" },
              ].map((prod, i) => (
                <article key={i} className="group cursor-pointer">
                  <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-xl bg-stone-200 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/10 group-hover:-translate-y-2 group-hover:outline group-hover:outline-2 group-hover:outline-primary/50">
                    <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={prod.img} alt={prod.title} />
                    <span className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 text-[10px] font-label uppercase tracking-widest">{prod.label}</span>
                  </div>
                  <h3 className="text-2xl font-headline text-slate-900 mb-2">{prod.title}</h3>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">{prod.desc}</p>
                  <button className="w-full py-4 border border-outline-variant text-slate-900 font-label uppercase text-[10px] tracking-widest hover:bg-slate-900 hover:text-white transition-all duration-300">
                    Get Quote
                  </button>
                </article>
              ))}

              {/* Banner */}
              <div className="col-span-1 lg:col-span-3 py-12">
                <section className="bg-surface-container-low rounded-xl p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden text-on-surface border border-white/5">
                  <div className="relative z-10 max-w-2xl">
                    <h2 className="text-3xl md:text-5xl font-headline mb-6 text-on-surface">Need a Custom Design? We manufacture to your exact specifications.</h2>
                    <p className="text-on-surface/70 font-light mb-8 max-w-lg">From custom patterns to proprietary fabric blends, our atelier can scale your vision into high-volume production.</p>
                    <button className="bg-primary text-on-primary px-10 py-5 rounded-sm font-label uppercase tracking-widest text-xs font-bold hover:px-12 transition-all duration-500 flex items-center gap-4">
                      Start Your Custom Order
                      <span className="material-symbols-outlined text-sm">mail</span>
                    </button>
                  </div>
                  <div className="relative z-10 w-full md:w-1/3 aspect-square bg-[#16202e] backdrop-blur-sm rounded-xl p-8 border border-white/5 flex flex-col items-center justify-center group cursor-pointer hover:bg-[#1a293b] transition-all duration-500">
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary/20 transition-all duration-500">
                      <span className="material-symbols-outlined text-5xl text-primary">mail</span>
                    </div>
                    <div className="text-center">
                      <h4 className="text-primary font-label uppercase tracking-[0.2em] text-sm mb-2">Contact Our Atelier</h4>
                      <p className="text-[10px] text-on-surface/40 font-label uppercase tracking-widest">Inquire about bespoke manufacturing</p>
                    </div>
                  </div>
                </section>
              </div>

              {[
                 { title: "Selvedge Utility Jacket", desc: "Raw selvedge denim built for resilience. Featuring antique brass hardware and reinforced pockets.", label: "Denim", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVpUpC5zPF9Rb4wxAnn1pBZEk8pEyIldWM79mACJWxnPidDmKtTKzAqKETOOoIF90rTuyD_329FfukeZRwtI8gP04xokO1C2iigRIonyKz91Hn-mMlg8a7eYAxvr4IP3Li6IkFJbyMJex3s96Y8nhxO0eVHgnsQ6UiPupQRz-kCIF7xsH3Xd_S8xvq7sccV2REHkZeP2LgBwmTuuZsQrWtL7hsOaGxF_HDxbmpwXemFP1omZ8jBCLA87s4AQOW3zS6QWC_7tEEqEc" },
                 { title: "Supima Cotton Tee", desc: "The pinnacle of basic apparel. Extra-long staple cotton for unmatched softness and longevity.", label: "Basics", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4lGLLqoGSaLrE656RXypXXmzsmApmvq1B7-LtMpwKXFpLCL4W5auYSyLfkJuoIpz4UJXiE2--rxNF9qfJxxJash-FmCWFFfyM998sfAmeLrYE1pPTZaHNIC_AAB4HFP2Tl72pOKG1W5SSZiz-Z9-ChoKqmLhrBGjOk6fHQUxmqoSAi5ZM8nZDw3jiKc_yjWEaxXEtjevEH_xQAcCWc9Evs00SxDyTrNTpO1w4TQCjkIyIrUEeVdwlFQof1ZLRz1nCUzthaKnZIm8" },
                 { title: "Tech-Flex Legging", desc: "Moisture-wicking recycled nylon with 4-way stretch and interlocking seams for high-performance use.", label: "Active", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6zdNLrDndZw_OwCSbnf6ETiQo6OQm1napSs5fmvrPvmo3J0AZS4L9tZ1owps1ZDOoOaazTGwATWR0wh0Y8gaaF8GKkgGlbl0anDSjtmStsNMABfajAipQej6UkqTgtEqkvTISwlEyX-1BYNbUpMpA10ptGM_mf4DL8kQsUAaB3QENdyUD1oZ0R4zlsTIyksg6zYmYgLhSB8YgR76epwLgWvGvYyYcrRcbEeh6lfWf1Snz5DmgL3RJJ81cWcDI2_g3PPezGD1lv38" },
              ].map((prod, i) => (
                <article key={i} className="group cursor-pointer">
                  <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-xl bg-stone-200 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/10 group-hover:-translate-y-2 group-hover:outline group-hover:outline-2 group-hover:outline-primary/50">
                    <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={prod.img} alt={prod.title} />
                    <span className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 text-[10px] font-label uppercase tracking-widest">{prod.label}</span>
                  </div>
                  <h3 className="text-2xl font-headline text-slate-900 mb-2">{prod.title}</h3>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">{prod.desc}</p>
                  <button className="w-full py-4 border border-outline-variant text-slate-900 font-label uppercase text-[10px] tracking-widest hover:bg-slate-900 hover:text-white transition-all duration-300">
                    Get Quote
                  </button>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-24 flex justify-center">
              <button className="flex flex-col items-center group">
                <span className="text-primary font-label uppercase tracking-widest text-xs mb-4 group-hover:translate-y-1 transition-transform">Load More Products</span>
                <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent"></div>
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Products;
