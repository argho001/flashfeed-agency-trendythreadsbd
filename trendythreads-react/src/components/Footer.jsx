import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#040f1b] border-t border-primary/20 pt-16 md:pt-24 pb-12 px-6 md:px-8 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-x-8 gap-y-12 mb-16 md:mb-20">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-4 space-y-6 md:space-y-8">
            <Link to="/">
              <img src="/logo.png" alt="Trendy Threads BD Logo" className="h-14 w-auto object-contain brightness-110" />
            </Link>
            <p className="text-on-surface-variant/70 text-base font-light leading-relaxed max-w-sm">
              Global leaders in premium garment manufacturing. From knitting to export, we integrate every stage to deliver unparalleled quality.
            </p>
            <div className="flex gap-4">
              {['facebook', 'linkedin', 'instagram', 'youtube'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="w-10 h-10 flex items-center justify-center border border-primary/20 rounded-full text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all duration-500"
                >
                  <span className="material-symbols-outlined text-xl">{social === 'youtube' ? 'play_circle' : social === 'linkedin' ? 'work' : 'public'}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="col-span-1 lg:col-span-2 space-y-6 md:space-y-8">
            <h4 className="text-primary font-label text-xs uppercase tracking-[0.3em] font-bold">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Shop', 'Factory', 'About', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <Link 
                    to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '')}`} 
                    className="text-on-surface-variant/60 hover:text-primary transition-colors text-sm tracking-wide font-label uppercase"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-2 space-y-6 md:space-y-8">
            <h4 className="text-primary font-label text-xs uppercase tracking-[0.3em] font-bold">Solutions</h4>
            <ul className="space-y-4">
              {['Knitwear', 'Outerwear', 'Activewear', 'Accessories', 'Custom OEM'].map((item) => (
                <li key={item}>
                  <Link to="/products" className="text-on-surface-variant/60 hover:text-primary transition-colors text-sm tracking-wide font-label uppercase">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact Column */}
          <div className="col-span-2 lg:col-span-4 space-y-6 md:space-y-8">
            <h4 className="text-primary font-label text-xs uppercase tracking-[0.3em] font-bold">Newsletter</h4>
            <p className="text-on-surface-variant/60 text-sm leading-relaxed">
              Stay updated with our latest manufacturing innovations and sustainability reports.
            </p>
            <div className="flex flex-col gap-4">
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Business Email" 
                  className="w-full bg-surface-container-high/30 border border-primary/10 py-4 px-6 text-on-surface text-sm focus:outline-none focus:border-primary transition-all rounded-sm"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </button>
              </div>
              <div className="flex items-center gap-3 text-on-surface-variant/40 text-[10px] uppercase tracking-widest font-bold">
                <span className="material-symbols-outlined text-sm">verified</span>
                100% Secure & Private
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-y border-primary/10 mb-12">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-primary">local_phone</span>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant/40">Inquiry Line</p>
              <p className="text-on-surface font-bold">+8801915095744</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-primary">mail</span>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant/40">Direct Email</p>
              <p className="text-on-surface font-bold">info@trendythreadsbd.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-primary">location_on</span>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant/40">Headquarters</p>
              <p className="text-on-surface font-bold">Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
          <p className="text-xs">© 2024 Trendy Threads BD. All Rights Reserved.</p>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold">
            <Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-primary transition-colors">Safety Standards</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
