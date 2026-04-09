import React from 'react';

const Contact = () => {
  return (
    <div className="relative">
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-surface-dim px-12 pt-40 pb-24 md:pb-32 overflow-hidden min-h-[500px]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative z-10">
            <div>
              <h1 className="text-5xl md:text-7xl font-headline text-on-surface leading-tight tracking-tight mb-8">
                Let's Build <br/><span className="italic text-primary">Something Together</span>
              </h1>
              <p className="text-on-surface-variant text-lg max-w-md mb-10 leading-relaxed">
                Precision-engineered manufacturing at your fingertips. Our specialist team guarantees a comprehensive B2B response within 24 hours.
              </p>
              <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6">
                <div className="flex items-center space-x-3 group cursor-pointer bg-primary/10 border border-primary/30 p-4 rounded-xl hover:bg-primary/20 hover:border-primary transition-all shadow-[0_0_15px_rgba(200,168,75,0.1)]">
                  <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">call</span>
                  <span className="font-label text-[10px] md:text-xs tracking-[0.2em] uppercase text-primary">+880 1915 095 744</span>
                </div>
                <div className="flex items-center space-x-3 group cursor-pointer bg-primary/10 border border-primary/30 p-4 rounded-xl hover:bg-primary/20 hover:border-primary transition-all shadow-[0_0_15px_rgba(200,168,75,0.1)]">
                  <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">mail</span>
                  <span className="font-label text-[10px] md:text-xs tracking-[0.2em] uppercase text-primary">info@trendythreadsbd.com</span>
                </div>
              </div>
            </div>
            <div className="relative hidden md:block max-w-md ml-auto">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Close-up of industrial sewing machine stitching high-quality dark denim fabric with golden thread" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi2ozCpqHmXB810yPmJs0chNA_NoJNkKsXZ07W6uLpUylIcLzcLTECGI1Ls_4B9mKYdpRo68P1Hx0AZn2uqR2uQWrhcxgA07ixhsEAij819hTzPNPse4BIVlO58PqTlBA3kLE7kQDQ1vmKzNSfr8dt4gGEMConljRuOPi-7zjCepsHYqiz3HCvfitTkPD2NfMZLOnNFEEa4C5UbL3iCwjkwnfvpeihiMdHMSRwDEx4-ez9fOzQ7fvvae14W-tQxrR1ri7qkDJ8ebE" 
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary p-8 rounded-sm text-on-primary max-w-[200px]">
                <p className="font-headline text-2xl italic leading-none mb-2">Since 2009</p>
                <p className="font-label text-[10px] tracking-widest uppercase">Heritage of Precision</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Strip */}
        <section className="bg-surface-container-lowest py-16 px-12 border-y border-outline-variant/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: 'chat', label: 'WhatsApp Support', val: '+880 1915 095 744' },
              { icon: 'drafts', label: 'Direct Inquiry', val: 'info@trendythreadsbd.com' },
              { icon: 'location_on', label: 'Global HQ', val: 'Dhaka, Bangladesh' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <span className="material-symbols-outlined text-primary text-4xl">{item.icon}</span>
                <h3 className="font-label text-xs tracking-widest uppercase text-on-surface-variant">{item.label}</h3>
                <p className="text-on-surface font-semibold tracking-wide">{item.val}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Form Section */}
        <section className="py-24 px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7 bg-on-surface-variant/5 backdrop-blur-sm p-8 md:p-12 rounded-xl border border-outline-variant/20">
              <h2 className="font-headline text-3xl text-on-surface mb-8">Send Us an Inquiry</h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                {[
                  { id: 'name', label: 'Full Name', type: 'text' },
                  { id: 'company', label: 'Company Entity', type: 'text' },
                  { id: 'email', label: 'Business Email', type: 'email' },
                  { id: 'quantity', label: 'Estimated MOQ', type: 'text' },
                ].map((field) => (
                  <div key={field.id} className="relative group">
                    <input 
                      className="peer w-full bg-transparent border-0 border-b border-outline-variant py-2 focus:ring-0 focus:border-primary transition-colors text-on-surface placeholder-transparent" 
                      id={field.id} 
                      placeholder=" " 
                      type={field.type} 
                    />
                    <label 
                      className="absolute left-0 -top-3.5 text-on-surface-variant text-xs font-label uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-xs" 
                      htmlFor={field.id}
                    >
                      {field.label}
                    </label>
                  </div>
                ))}
                <div className="relative group">
                  <select className="peer w-full bg-transparent border-0 border-b border-outline-variant py-2 focus:ring-0 focus:border-primary transition-colors text-on-surface/60 font-label text-xs uppercase tracking-widest cursor-pointer" id="category">
                    <option disabled defaultValue="" value="">Product Category</option>
                    <option className="bg-surface-dim" value="knitwear">Knitwear & Basics</option>
                    <option className="bg-surface-dim" value="outerwear">Outerwear</option>
                    <option className="bg-surface-dim" value="athleisure">Performance Athleisure</option>
                  </select>
                </div>
                <div className="relative group flex items-center border-b border-outline-variant py-2 hover:border-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-on-surface-variant text-sm mr-2">upload_file</span>
                  <label className="text-on-surface-variant text-xs font-label uppercase tracking-widest cursor-pointer" htmlFor="techpack">Upload Tech Pack</label>
                  <input className="hidden" id="techpack" type="file" />
                </div>
                <div className="md:col-span-2 relative group">
                  <textarea 
                    className="peer w-full bg-transparent border-0 border-b border-outline-variant py-2 focus:ring-0 focus:border-primary transition-colors text-on-surface placeholder-transparent resize-none" 
                    id="message" 
                    placeholder=" " 
                    rows="4"
                  />
                  <label 
                    className="absolute left-0 -top-3.5 text-on-surface-variant text-xs font-label uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-xs" 
                    htmlFor="message"
                  >
                    Project Details
                  </label>
                </div>
                <div className="md:col-span-2 pt-6">
                  <button className="w-full md:w-auto px-12 py-5 bg-primary text-on-primary font-label text-xs tracking-[0.2em] uppercase font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/10" type="submit">
                    Dispatch Inquiry
                  </button>
                </div>
              </form>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-center space-y-12">
              <div>
                <h2 className="font-headline text-3xl text-on-surface mb-2">The Atelier Promise</h2>
                <div className="w-12 h-1 bg-primary mb-12"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
                {[
                  { icon: 'workspace_premium', title: 'Free Sample Prototype', desc: 'Qualifying B2B orders receive initial tech-pack samples at no cost.' },
                  { icon: 'support_agent', title: '24/7 Global Liaison', desc: 'Dedicated account managers for EU, North America, and Asian timezones.' },
                  { icon: 'verified', title: 'Quality Guarantee', desc: 'Rigorous QC standards with a comprehensive credit-back policy.' },
                  { icon: 'trending_down', title: 'Factory Direct Pricing', desc: 'Eliminate middlemen margins with our transparent manufacturing model.' },
                ].map((point, i) => (
                  <div key={i} className="space-y-3">
                    <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>{point.icon}</span>
                    <h4 className="font-label text-xs tracking-widest uppercase text-on-surface">{point.title}</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{point.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-surface-container rounded-lg border-l-2 border-primary italic text-on-surface-variant text-sm leading-relaxed">
                "Precision in every stitch, transparency in every transaction. We aren't just manufacturers; we are your strategic production partners."
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
