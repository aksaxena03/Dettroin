import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  FiPhone,
  FiMail,
  FiClock,
  FiMenu,
  FiX,
  FiArrowRight,
} from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { NAV_LINKS } from '../../constants/navigation';
import { SITE_CONFIG } from '../../constants/siteConfig';

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-stone-200/80">
      <div className="bg-rose-950 text-rose-100 text-xs py-2 px-4 sm:px-8 border-b border-rose-900">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 justify-center sm:justify-start">
            <a
              href={`tel:${SITE_CONFIG.contact.phone}`}
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
            >
              <FiPhone className="text-amber-400" />
              <span>{SITE_CONFIG.contact.phone}</span>
            </a>
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="hidden md:flex items-center gap-1.5 hover:text-amber-300 transition-colors"
            >
              <FiMail className="text-amber-400" />
              <span>{SITE_CONFIG.contact.email}</span>
            </a>
            <div className="hidden lg:flex items-center gap-1.5 text-rose-200">
              <FiClock className="text-amber-400" />
              <span>{SITE_CONFIG.hours}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded-full font-medium border border-amber-500/30">
              Admissions Open 2026-27
            </span>
            <div className="flex items-center gap-3 text-rose-200">
              <a href="#" className="hover:text-amber-300 transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-amber-300 transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-amber-300 transition-colors">
                <FaYoutube />
              </a>
              <a href="#" className="hover:text-amber-300 transition-colors">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={SITE_CONFIG.logo}
              alt={SITE_CONFIG.name}
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl text-rose-950 tracking-tight font-heading leading-tight group-hover:text-rose-800 transition-colors">
                EXCELLENCE
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-amber-600 tracking-widest uppercase">
                International School
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-rose-950 bg-rose-50 border-b-2 border-rose-900 font-bold'
                      : 'text-slate-700 hover:text-rose-950 hover:bg-slate-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/admissions"
              className="hidden sm:inline-flex items-center gap-2 bg-rose-900 hover:bg-rose-950 text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-md shadow-rose-900/15 hover:shadow-lg transition-all duration-300"
            >
              <span>Apply Now</span>
              <FiArrowRight />
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-rose-950 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-lg">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2.5 text-base font-semibold rounded-xl transition-colors ${
                  isActive
                    ? 'text-rose-950 bg-rose-50 font-bold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-rose-950'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="pt-2 border-t border-slate-100">
            <Link
              to="/admissions"
              onClick={() => setMobileOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-rose-900 text-white font-bold py-3 rounded-xl shadow-md"
            >
              <span>Apply Now</span>
              <FiArrowRight />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
