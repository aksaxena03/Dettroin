import { useState } from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiCheckCircle } from 'react-icons/fi';
import { SITE_CONFIG } from '../constants/siteConfig';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="flex-grow bg-stone-50">
      <section className="bg-rose-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 inline-block mb-3">
            Reach Out
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight mb-4">
            Contact Excellence International School
          </h1>
          <p className="text-rose-100 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Have questions about admissions, campus tours, or academics? We are here to assist you.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 text-center">
              <FiMapPin className="w-8 h-8 text-amber-500 mx-auto mb-3" />
              <h4 className="font-bold text-slate-900 text-base mb-1 font-heading">Campus Address</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{SITE_CONFIG.contact.address}</p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 text-center">
              <FiPhone className="w-8 h-8 text-rose-900 mx-auto mb-3" />
              <h4 className="font-bold text-slate-900 text-base mb-1 font-heading">Phone Helpline</h4>
              <a href={`tel:${SITE_CONFIG.contact.phone}`} className="text-xs text-slate-600 hover:text-rose-900 font-semibold">
                {SITE_CONFIG.contact.phone}
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 text-center">
              <FiMail className="w-8 h-8 text-amber-500 mx-auto mb-3" />
              <h4 className="font-bold text-slate-900 text-base mb-1 font-heading">Email Address</h4>
              <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-xs text-slate-600 hover:text-rose-900 font-semibold">
                {SITE_CONFIG.contact.email}
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 text-center">
              <FiClock className="w-8 h-8 text-rose-900 mx-auto mb-3" />
              <h4 className="font-bold text-slate-900 text-base mb-1 font-heading">Visiting Hours</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{SITE_CONFIG.hours}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-md">
                <SectionHeader
                  badge="Send a Message"
                  title="We'd Love to Hear From You"
                  subtitle="Please complete the form below and our administrative team will respond promptly."
                  centered={false}
                />

                {submitted ? (
                  <div className="p-6 bg-rose-50 border border-rose-200 text-rose-950 rounded-2xl text-center space-y-2">
                    <FiCheckCircle className="w-12 h-12 mx-auto text-rose-800" />
                    <h4 className="font-bold text-lg">Message Sent Successfully!</h4>
                    <p className="text-sm">Thank you for writing to us. We will respond to your query shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Priya Sharma"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-rose-800 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="priya@example.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-rose-800 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-rose-800 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Subject</label>
                        <input
                          type="text"
                          placeholder="General Inquiry / Admission Inquiry"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-rose-800 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Message *</label>
                      <textarea
                        rows="4"
                        required
                        placeholder="Write your message here..."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-rose-800 focus:outline-none"
                      />
                    </div>

                    <Button type="submit" variant="primary" size="lg" icon={FiSend} className="w-full">
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="bg-rose-950 text-white p-8 rounded-3xl space-y-4">
                <span className="bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-block">
                  Campus Location
                </span>
                <h3 className="text-2xl font-bold font-heading text-white">Visit Our Campus</h3>
                <p className="text-rose-100 text-sm leading-relaxed">
                  Located in a serene and accessible campus setting in Aligarh, Excellence International School provides an ideal environment for learning.
                </p>
                <div className="p-4 rounded-2xl bg-white/10 border border-white/10 text-xs text-rose-200 space-y-2">
                  <p className="font-bold text-white">Office Helpdesk:</p>
                  <p>Monday - Saturday: 8:00 AM to 3:30 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-slate-300 bg-stone-200 relative flex items-center justify-center text-center p-6">
                <div className="space-y-2">
                  <FiMapPin className="w-10 h-10 text-rose-900 mx-auto" />
                  <h4 className="font-bold text-slate-900 text-base">Interactive Location Map</h4>
                  <p className="text-xs text-slate-600">Aligarh Campus, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
