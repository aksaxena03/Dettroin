import { useState } from 'react';
import { FiCheckCircle, FiSend } from 'react-icons/fi';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';

export const Admissions = () => {
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
            Join EIS Family
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight mb-4">
            Admissions Open 2026-27
          </h1>
          <p className="text-rose-100 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Take the first step towards your child's bright future. We invite applications across Pre-Primary, Primary, and Middle School divisions.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Simple 4-Step Process"
            title="How to Apply for Admission"
            subtitle="Our admission procedure is simple, transparent, and student-focused."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 text-center relative">
              <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 font-bold flex items-center justify-center mx-auto mb-4 text-xl shadow-md">
                1
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2 font-heading">Submit Inquiry</h3>
              <p className="text-xs text-slate-600">Fill out the online application or visit the campus admission desk.</p>
            </div>

            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 text-center relative">
              <div className="w-12 h-12 rounded-xl bg-rose-900 text-white font-bold flex items-center justify-center mx-auto mb-4 text-xl shadow-md">
                2
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2 font-heading">Campus Tour</h3>
              <p className="text-xs text-slate-600">Schedule an interactive campus walk with our admission counselors.</p>
            </div>

            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 text-center relative">
              <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 font-bold flex items-center justify-center mx-auto mb-4 text-xl shadow-md">
                3
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2 font-heading">Interaction</h3>
              <p className="text-xs text-slate-600">Informal assessment & interaction with the student and parents.</p>
            </div>

            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 text-center relative">
              <div className="w-12 h-12 rounded-xl bg-rose-900 text-white font-bold flex items-center justify-center mx-auto mb-4 text-xl shadow-md">
                4
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2 font-heading">Enrollment</h3>
              <p className="text-xs text-slate-600">Submit required documents and confirm enrollment.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-6">
              <SectionHeader
                badge="Requirements"
                title="Documents & Checklist"
                subtitle="Please keep the following ready during admission verification."
                centered={false}
              />

              <ul className="space-y-3.5 text-sm text-slate-700">
                <li className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-stone-200">
                  <FiCheckCircle className="text-rose-800 text-lg flex-shrink-0" />
                  <span>Student Birth Certificate (Self-Attested copy)</span>
                </li>
                <li className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-stone-200">
                  <FiCheckCircle className="text-rose-800 text-lg flex-shrink-0" />
                  <span>4 Passport-sized recent photographs of student</span>
                </li>
                <li className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-stone-200">
                  <FiCheckCircle className="text-rose-800 text-lg flex-shrink-0" />
                  <span>Transfer Certificate (TC) from previous school</span>
                </li>
                <li className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-stone-200">
                  <FiCheckCircle className="text-rose-800 text-lg flex-shrink-0" />
                  <span>Parents' Aadhar Card & Passport photos</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-md">
                <h3 className="text-2xl font-bold text-slate-900 mb-2 font-heading">
                  Online Admission Inquiry Form
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Fill out your details below and our counselors will get in touch shortly.
                </p>

                {submitted ? (
                  <div className="p-6 bg-rose-50 border border-rose-200 text-rose-950 rounded-2xl text-center space-y-2">
                    <FiCheckCircle className="w-12 h-12 mx-auto text-rose-800" />
                    <h4 className="font-bold text-lg">Inquiry Submitted Successfully!</h4>
                    <p className="text-sm">Thank you for expressing interest in Excellence International School. Our admission counselor will call you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Parent's Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-rose-800 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Student's Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ananya Sharma"
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
                        <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                        <input
                          type="email"
                          placeholder="parent@example.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-rose-800 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Grade Seeking Admission *</label>
                      <select
                        required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-rose-800 focus:outline-none bg-white"
                      >
                        <option value="">Select Grade</option>
                        <option value="DayCare">Day Care</option>
                        <option value="PrePrimary">Pre-Primary (Nursery / LKG / UKG)</option>
                        <option value="Primary">Primary School (Grades 1 - 5)</option>
                        <option value="Middle">Middle School (Grades 6 - 8)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Additional Notes / Questions</label>
                      <textarea
                        rows="3"
                        placeholder="Mention any specific queries regarding transportation, fees, etc."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-rose-800 focus:outline-none"
                      />
                    </div>

                    <Button type="submit" variant="primary" size="lg" icon={FiSend} className="w-full">
                      Submit Admission Inquiry
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Admissions;
