import React from 'react';

const About = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex flex-col justify-start items-center text-center px-6 overflow-hidden pt-48">
        <div className="absolute inset-0 bg-surface">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #16202e 0%, transparent 100%)' }}></div>
        </div>
        <div className="relative z-10 max-w-5xl">
          <h1 className="font-headline text-5xl md:text-8xl text-primary leading-none tracking-tighter mb-8 italic">
            Crafted in Bangladesh.<br/>Trusted Worldwide.
          </h1>
          <p className="font-body text-on-surface-variant text-lg md:text-xl max-w-3xl mx-auto leading-relaxed tracking-wide opacity-80">
            Since 2009, Trendy Threads BD has been manufacturing premium garments for global buyers — with our own factories, knitting units, and dyeing facilities.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-surface-container-lowest py-24 border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-12 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { val: "15+", label: "Years in Business" },
            { val: "3", label: "Production Facilities" },
            { val: "2", label: "Continents Served" },
            { val: "100%", label: "Quality Commitment" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-2">
              <span className="text-5xl font-headline text-primary font-bold">{stat.val}</span>
              <span className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant opacity-60">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-on-surface-variant py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-12">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="w-full lg:w-1/2 space-y-8 text-surface">
              <span className="opacity-40 text-[10px] font-bold uppercase tracking-[0.4em]">The WEFTEX Legacy</span>
              <h2 className="font-headline text-4xl md:text-5xl leading-tight italic">A direct path from fabric to storefront.</h2>
              <div className="space-y-6 opacity-80 text-lg leading-relaxed font-body">
                <p>Under the banner of the WEFTEX GROUP, we operate on a direct factory model that eliminates the noise of middlemen. This ensures total transparency and control over every stitch.</p>
                <p>Our integrated knitting and dyeing facilities serve as the backbone of our operations, allowing us to provide bespoke textile solutions to high-end brands across Europe and the USA.</p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-4 border border-surface-dim/5 translate-x-4 translate-y-4"></div>
                <img 
                  alt="Industrial manufacturing floor" 
                  className="relative z-10 w-full h-[600px] object-cover rounded-xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9ZrcaUlDckycCrO7ypW2-vBQvJMASKBMSLCk0TRJUYCznuh6ibzfs5ecDKSUlAYPASTJ7IY3H261th73EYixSieryefbHt3gljD12kxVcdaFLnLEUqb7unuvvZYGa_rYqDHgg5rjhaLqZMuy_FJpeCda8ueaWKLo2r9pJIOzbxRTldJgJ2l78aqk0P-A0aN5Xlq2RR6TvZXSn4mg9cSZAG8SRRKzwoo9xqGTbA5cjLtuykyhWg0wTKn5TrlLOOopcDZ51kNFVbxY"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vertical Integration Advantages */}
      <section className="bg-surface py-32">
        <div className="max-w-7xl mx-auto px-12">
          <div className="text-center mb-24 space-y-4">
            <h2 className="font-headline text-4xl text-primary italic">Vertical Integration Advantages</h2>
            <div className="w-24 h-px bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {[
              { icon: 'payments', title: 'Cost Savings', desc: 'Direct manufacturing pricing by removing trading house margins and overheads.' },
              { icon: 'precision_manufacturing', title: 'Custom Manufacturing', desc: "Bespoke technical specifications tailored to your brand's unique design language." },
              { icon: 'apparel', title: 'Free Samples', desc: 'Experience our craftsmanship firsthand with complimentary prototyping services.' },
              { icon: 'fact_check', title: 'Quality Inspections', desc: 'Rigorous multi-stage QA protocols ensuring every shipment meets international standards.' },
              { icon: 'public', title: 'Global Shipping', desc: 'Streamlined logistics and freight management for reliable delivery across continents.' },
              { icon: 'handshake', title: 'Long-Term Partnership', desc: 'We grow with our clients, offering scalability and dedicated account management.' },
            ].map((adv, i) => (
              <div key={i} className="space-y-4">
                <span className="material-symbols-outlined text-primary text-4xl">{adv.icon}</span>
                <h3 className="font-headline text-2xl text-on-surface">{adv.title}</h3>
                <p className="text-on-surface-variant/70 text-sm leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO's Message */}
      <section className="bg-surface-container-low py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-5 -translate-y-1/2 translate-x-1/4">
          <span className="material-symbols-outlined text-[40rem] text-primary">format_quote</span>
        </div>
        <div className="max-w-4xl mx-auto px-12 relative z-10">
          <span className="material-symbols-outlined text-primary text-6xl mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
          <blockquote className="font-headline text-3xl md:text-4xl text-on-surface italic leading-relaxed mb-12">
            "We believe in sharing ownership with our team members — minimizing complacency and ensuring every order reflects our commitment to excellence."
          </blockquote>
          <div className="flex items-center gap-6">
            <div className="w-12 h-px bg-primary"></div>
            <div>
              <p className="text-primary font-bold uppercase tracking-widest text-xs">CEO</p>
              <p className="text-on-surface-variant font-headline text-xl">Trendy Threads BD</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="bg-on-surface-variant py-32 text-surface">
        <div className="max-w-7xl mx-auto px-12">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="font-headline text-4xl italic">Responsible Production</h2>
              <p className="opacity-80 text-lg leading-relaxed">Our dedication to social compliance is the cornerstone of our factory operations. We adhere to the most stringent international labor standards, ensuring a safe, equitable, and empowering environment for our 2,000+ artisans.</p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="border-l border-surface/10 pl-6 py-2">
                  <p className="font-bold text-2xl">Ethical</p>
                  <p className="opacity-60 text-xs uppercase tracking-widest mt-1">Labor Practices</p>
                </div>
                <div className="border-l border-surface/10 pl-6 py-2">
                  <p className="font-bold text-2xl">Safe</p>
                  <p className="opacity-60 text-xs uppercase tracking-widest mt-1">Work Environment</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
              {[
                { icon: 'verified_user', label: 'BSCI COMPLIANT' },
                { icon: 'eco', label: 'OEKO-TEX CERTIFIED' },
                { icon: 'diversity_3', label: 'SEDEX MEMBER' },
                { icon: 'factory', label: 'ACCORD MEMBER' },
              ].map((cert, i) => (
                <div key={i} className="aspect-square bg-surface/5 flex flex-col items-center justify-center p-8 space-y-4">
                  <span className="material-symbols-outlined text-5xl">{cert.icon}</span>
                  <p className="text-[10px] font-bold uppercase tracking-tighter text-center">{cert.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
