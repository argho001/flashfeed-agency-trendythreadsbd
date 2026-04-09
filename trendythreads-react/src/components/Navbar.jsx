import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on location change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/products' },
    { name: 'Factory', path: '/factory' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled 
          ? 'py-3 bg-[#091421]/90 backdrop-blur-md border-b border-primary/20 shadow-2xl' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-12">
          <Link to="/" className="group relative transition-transform duration-500 hover:scale-105">
            <img src="/logo.png" alt="Trendy Threads BD Logo" className="h-10 md:h-12 w-auto object-contain" />
            <div className={`absolute -bottom-2 left-0 w-0 h-[1px] bg-primary transition-all duration-500 group-hover:w-full ${scrolled ? 'hidden' : 'block'}`}></div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[11px] font-label uppercase tracking-[0.2em] font-bold transition-all duration-300 relative group px-2 py-1 ${
                  isActive(link.path)
                    ? 'text-primary'
                    : 'text-on-surface/60 hover:text-primary'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-primary origin-right scale-x-0 transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left ${isActive(link.path) ? 'scale-x-100' : ''}`}></span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden xl:flex flex-col items-end gap-0.5 pointer-events-none">
            <span className="text-[9px] font-label uppercase tracking-[0.1em] text-on-surface/40">Direct Factory Access</span>
            <span className="text-[10px] font-label font-bold text-primary tracking-wider">info@trendythreadsbd.com</span>
          </div>
          
          <div className="h-8 w-[1px] bg-outline-variant/30 hidden md:block"></div>

          <div className="flex items-center gap-4">
            <button className="material-symbols-outlined text-on-surface/60 hover:text-primary transition-all text-xl cursor-pointer">
              search
            </button>
            <Link 
              to="/contact" 
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary text-on-primary text-sm font-label font-bold uppercase tracking-wider hover:bg-white hover:text-surface transition-all duration-500 rounded-sm shadow-lg shadow-primary/10"
            >
              <span className="material-symbols-outlined text-base">call</span>
              +8801915095744
            </Link>
            
            {/* Mobile Menu Trigger */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden material-symbols-outlined text-primary text-3xl active:scale-95 transition-all focus:outline-none select-none bg-transparent border-none appearance-none"
              style={{ WebkitTapHighlightColor: 'transparent', outline: 'none' }}
            >
              {isMenuOpen ? 'close' : 'menu'}
            </button>
          </div>
        </div>
      </div>
    </header>

    {/* Mobile Menu Overlay - Moved outside header to prevent style conflicts */}
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[120] bg-surface/95 backdrop-blur-xl flex flex-col px-12 pb-20 overflow-y-auto"
        >
          {/* Dedicated Mobile Menu Top Bar */}
          <div className="flex justify-between items-center py-8">
            <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="material-symbols-outlined text-primary text-4xl active:rotate-90 transition-transform duration-300 focus:outline-none"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              close
            </button>
          </div>

          <nav className="flex flex-col gap-8 pt-12">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={link.path}
                  className={`text-4xl font-headline font-bold transition-all ${
                    isActive(link.path) ? 'text-primary italic underline underline-offset-8' : 'text-on-surface'
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="mt-auto pb-20 space-y-8">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant/40">Direct Factory Access</span>
              <span className="text-xl font-headline font-bold text-primary tracking-wide">+8801915095744</span>
              <span className="text-sm text-on-surface-variant">info@trendythreadsbd.com</span>
            </div>
            
            <div className="pt-8 border-t border-primary/10">
              <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant/40 mb-4">Follow Our Journey</p>
              <div className="flex gap-6">
                {['Facebook', 'LinkedIn', 'Instagram'].map(social => (
                  <a key={social} href="#" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">{social}</a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </>
  );
};

export default Navbar;
