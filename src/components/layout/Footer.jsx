import { Link } from 'react-router-dom';
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiCheckCircle,
} from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { NAV_LINKS } from '../../constants/navigation';
import { SITE_CONFIG } from '../../constants/siteConfig';

export const Footer = () => {
  return (
    <footer className="bg-rose-950 text-rose-100 pt-16 pb-8 border-t-4 border-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-rose-900/80">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={SITE_CONFIG.logo}
                alt={SITE_CONFIG.name}
                className="h-14 w-auto bg-white p-1.5 rounded-xl shadow-md"
              />
              <div>
                <h3 className="text-xl font-extrabold text-white tracking-tight font-heading">
                  EXCELLENCE
                </h3>
                <p className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  International School
                </p>
              </div>
            </div>
            <p className="text-rose-200/80 text-sm leading-relaxed max-w-sm">
              Nurturing young minds through holistic education, concept-based learning, world-class infrastructure, and traditional ethical values.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-rose-900/60 border border-rose-800 flex items-center justify-center text-rose-200 hover:text-amber-400 hover:border-amber-400 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF size={14} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-rose-900/60 border border-rose-800 flex items-center justify-center text-rose-200 hover:text-amber-400 hover:border-amber-400 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={14} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-rose-900/60 border border-rose-800 flex items-center justify-center text-rose-200 hover:text-amber-400 hover:border-amber-400 transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube size={14} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-rose-900/60 border border-rose-800 flex items-center justify-center text-rose-200 hover:text-amber-400 hover:border-amber-400 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={14} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-rose-200/80 hover:text-amber-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span className="text-amber-400 font-bold">&rsaquo;</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider font-heading">
              Academic Wings
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/academics" className="text-rose-200/80 hover:text-amber-400 transition-colors inline-flex items-center gap-1.5">
                  <FiCheckCircle className="text-amber-400 text-xs" />
                  <span>Pre-Primary School</span>
                </Link>
              </li>
              <li>
                <Link to="/academics" className="text-rose-200/80 hover:text-amber-400 transition-colors inline-flex items-center gap-1.5">
                  <FiCheckCircle className="text-amber-400 text-xs" />
                  <span>Primary School</span>
                </Link>
              </li>
              <li>
                <Link to="/academics" className="text-rose-200/80 hover:text-amber-400 transition-colors inline-flex items-center gap-1.5">
                  <FiCheckCircle className="text-amber-400 text-xs" />
                  <span>Middle School</span>
                </Link>
              </li>
              <li>
                <Link to="/academics" className="text-rose-200/80 hover:text-amber-400 transition-colors inline-flex items-center gap-1.5">
                  <FiCheckCircle className="text-amber-400 text-xs" />
                  <span>Day Care & Foundation</span>
                </Link>
              </li>
              <li>
                <Link to="/academics" className="text-rose-200/80 hover:text-amber-400 transition-colors inline-flex items-center gap-1.5">
                  <FiCheckCircle className="text-amber-400 text-xs" />
                  <span>STREAM Labs</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider font-heading">
              Contact School
            </h4>
            <ul className="space-y-3 text-sm text-rose-200/80">
              <li className="flex items-start gap-2.5">
                <FiMapPin className="text-amber-400 text-lg flex-shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FiPhone className="text-amber-400 text-lg flex-shrink-0" />
                <a href={`tel:${SITE_CONFIG.contact.phone}`} className="hover:text-amber-300">
                  {SITE_CONFIG.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <FiMail className="text-amber-400 text-lg flex-shrink-0" />
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-amber-300">
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <FiClock className="text-amber-400 text-lg flex-shrink-0" />
                <span>{SITE_CONFIG.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-rose-200/70">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/about" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-amber-400 transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-amber-400 transition-colors">Campus Map</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
