import React from 'react';

const Blog = () => {
  return (
    <div className="relative">
      <main className="pt-32 pb-24 min-h-screen">
        {/* Page Hero */}
        <section className="px-6 md:px-12 max-w-screen-2xl mx-auto mb-20">
          <div className="bg-on-surface-variant/5 py-24 px-12 relative overflow-hidden border-l-4 border-primary">
            <h1 className="font-headline text-5xl md:text-7xl text-on-surface-variant font-bold tracking-tight mb-6 relative z-10">
              The Trendy Threads Journal
              <span className="block w-48 h-1 bg-primary mt-4"></span>
            </h1>
            <p className="text-xl text-on-surface-variant/80 max-w-2xl font-body leading-relaxed z-10 relative">
              Industry insights, manufacturing guides, and garment sourcing knowledge for global buyers in the evolving textile landscape.
            </p>
          </div>
        </section>

        {/* Featured Article */}
        <section className="px-6 md:px-12 max-w-screen-2xl mx-auto mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden bg-surface-container-high group">
            <div className="relative h-[400px] lg:h-full overflow-hidden">
              <img 
                alt="Featured Article" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="/blog_image.png" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-surface-dim/40 to-transparent"></div>
            </div>
            <div className="p-8 md:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-8 h-px bg-primary"></span>
                <span className="text-primary font-label uppercase tracking-widest text-xs font-bold">Featured</span>
              </div>
              <h2 className="font-headline text-4xl md:text-5xl text-on-surface mb-6 leading-tight font-bold">The Future of Circular Manufacturing in South Asia</h2>
              <p className="text-on-surface-variant/70 text-lg mb-8 leading-relaxed font-body">
                Exploring how sustainable loops and ethical waste management are redefining the production floors of modern garment factories.
              </p>
              <div className="flex items-center gap-6 mb-10 text-sm text-on-surface-variant/50 font-label uppercase tracking-wider">
                <span>By Arshad Rahim</span>
                <span className="w-1 h-1 rounded-full bg-primary-container"></span>
                <span>May 12, 2024</span>
                <span className="w-1 h-1 rounded-full bg-primary-container"></span>
                <span>12 Min Read</span>
              </div>
              <a className="inline-flex items-center gap-3 text-primary font-bold uppercase tracking-widest text-sm group" href="#">
                Read Article 
                <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-2">arrow_right_alt</span>
              </a>
            </div>
          </div>
        </section>

        {/* Blog Grid & Sidebar */}
        <section className="px-6 md:px-12 max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-16">
          {/* Left Column: Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-16 gap-x-8">
              {[
                { title: "Optimizing Lead Times: The Logistics of Speed", category: "Manufacturing", date: "April 28, 2024", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBin1pQm_GzllMRxf1DVO1vH-m3bBZ5NoEdav0e4S_DMwjlYjlfn8IHiflHUNzQ1OabflRIx0uYNRzqNsmgTn0j5yZQ_vEjHu4Lw_ZQC3ItEWxzLvqv7y55MvgrcEzzrbR-4Mngf9sjORHR0Jjl7Ojnqdv8K7W14SXJ02IgeBicEPD_TiJIDOKpeKH3ZyhUhemQonm09AA3mMaTEKnvn4TTkLJm-j0NibGXlzeiycTlN0OykO28_dbUJ-f-dbitlJidiCleuANEns8" },
                { title: "The New Standards of Global Labor Ethics", category: "Compliance", date: "April 22, 2024", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGR3EAzGdcgbITi2Kaoh7qiIHQ8_7ISj8xOIZR30DP4Mv1_u62UscfHOtT1Bl8Q68M0Fx1_3JJPYuQrjABbOf3UfLvSTw6WDMmIK-ytmQMxxXap_URrNYt5gcvNG_jQs4lQSHAnwiXHkubC9N6wbZU0TYDUqNJL9g7h2ICX3Ve85ncCRi_lBJW9XmcVlgLlWkT8ro2yg1VRGyu963Wfe-KkArKtH_TBFHi3mka38BBklMuJXHRpS0qxRQSLkQNNuHFseI6PRxN5J4" },
                { title: "Organic vs. Recycled: Deciphering the Labels", category: "Fabric Knowledge", date: "April 15, 2024", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCznswXR7NjtVp7U14zPIlcC1fkDFZNAx4mVrbtosPhrlQCeNQldur-jnTrgvQWQigSY9cP1Ejf8vfHX7aq9K216KmWXZmEIUoYuikTGZeZ6_OpR04jv4YENP0YpRXp1XniuUjYy82YTVpFpWTqyJSTASTkbOudx9QLGLWJSbWiRop2HpvgzyqwDaZKcHZYQv9kMcwzskfenjiom35ffd9L1qexI7fSzAJihpSi2RdV53335BnavIizDJ5N6qEmSiDSvmHiebxPXcs" },
                { title: "Navigating Trade Tariffs in 2024", category: "Export Guide", date: "April 08, 2024", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnMit7MdMqPW4BDjl7mFMLWwJET-ezQEVbbsX-3cwHUa0luE9EhS3YZATzA6pS8mk3C_EBxpMzM_zfpcpyBBKLHkgtOvOczN19GMXyh6MlsIZjz0q9x05tD9A7CAbYhOb6b7TWttuL3mYqljKvMzNL4cc-2PlhydoT_HqPHGsIyyoWR68Eql2VBBL8ljek4ts8j0PVEdS2xmMYhdPxKRGv0nCnn06kubRhJoKxx4I_v4YZS6_8NqtqCz7VapF5GrB8KANZnFgBQ28" },
                { title: "The Rise of Bespoke Manufacturing", category: "Industry News", date: "March 30, 2024", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4Ch_730PwKyckJY912hQ3TeV4XcoGJBaZ3b-D8vFLkXjPjYlfJVI5QLHr-EakQ4PEcM2o5Bw8CDbmGrBboYszWAYC1wgDLWZuiKVrJ5rIW4XZjhWb0q27izOAlL-qLB-JQR7879pCrBZ-Y1xZs_VsGD08wUlGHpIEIYFZcMgr8HxRAuvkROGXIV-1ceHCWPGPdlCR9SMt-Gy6llhJfalethAavxqGLraMxeOLFm6gVi9iqUAh3LXvHkoM2z48dKeowKD60Di9BIc" },
                { title: "Technical Fabrics: Beyond the Basics", category: "Fabric Knowledge", date: "March 15, 2024", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBH2wgY2GYpUB0p_CtWwmedNW7A7uveYr_Qiou6V2TBtDBWMcEj5yu7Rd_EHU8PBNxoMRjwblFy43USLZGmtxboATZ4EU6XiW4s3n1C0kgX1zPoxaBPQkd15Tp26VijIWoWQjvcVfvBJvbhO9ecZedfLY3fD-p3Qe9M0LSPFZHkuCrFfuCDKGrRfBGUZGeRseE0iPd49CBuThKtPfqwy07AehmPARu52uuk0SB2x7a73mmewp9gVrPhHOJxe0qJ3hCEbhdR5jPyVYo" },
              ].map((art, i) => (
                <article key={i} className="flex flex-col">
                  <div className="aspect-[4/5] overflow-hidden mb-6 rounded-xl relative group">
                    <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={art.img} alt={art.title} />
                    <span className="absolute top-4 left-4 bg-primary text-on-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1">{art.category}</span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold mb-4 text-on-surface hover:text-primary transition-colors cursor-pointer">{art.title}</h3>
                  <time className="text-[10px] text-on-surface-variant/40 font-label uppercase tracking-widest">{art.date}</time>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-16">
            <div>
              <h4 className="font-headline text-xl text-on-surface font-bold mb-8 flex items-center gap-4">
                Popular Articles
                <span className="flex-grow h-px bg-outline-variant"></span>
              </h4>
              <ul className="space-y-8">
                {[
                  "Risk Management in the Apparel Supply Chain",
                  "The 2024 Sourcing Guide for European Brands",
                  "Digital Twins: Transforming Garment Prototyping"
                ].map((post, i) => (
                  <li key={i} className="group cursor-pointer">
                    <span className="text-primary font-label text-[10px] font-bold uppercase tracking-widest block mb-2">{String(i + 1).padStart(2, '0')}</span>
                    <h5 className="text-on-surface font-headline font-bold leading-tight group-hover:text-primary transition-colors">{post}</h5>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-surface-container-highest p-8 border border-outline-variant/30">
              <h4 className="font-headline text-xl text-on-surface font-bold mb-4">Subscribe</h4>
              <p className="text-on-surface-variant/60 text-sm mb-6">Weekly insights on market trends and production innovation.</p>
              <div className="space-y-4">
                <input className="w-full bg-transparent border-b border-outline-variant py-3 px-1 text-on-surface focus:outline-none focus:border-primary transition-colors" placeholder="Email Address" type="email" />
                <button className="w-full bg-primary text-on-primary font-bold py-4 uppercase tracking-widest text-xs hover:scale-x-[1.02] transition-transform">Join the Circle</button>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default Blog;
