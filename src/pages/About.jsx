import { FiTarget, FiEye } from 'react-icons/fi';
import { SCHOOL_IMAGES } from '../data/assets';
import { SectionHeader } from '../components/ui/SectionHeader';

export const About = () => {
  return (
    <main className="flex-grow bg-stone-50">
      <section className="bg-rose-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 inline-block mb-3">
            About EIS
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight mb-4">
            Legacy of Educational Excellence
          </h1>
          <p className="text-rose-100 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Discover our mission, core values, leadership vision, and commitment to preparing global citizens.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                badge="Our Ethos"
                title="Building Character, Cultivating Knowledge"
                subtitle="Excellence International School stands as a beacon of academic rigor and moral values."
                centered={false}
              />
              <div className="space-y-6 text-slate-600 text-base leading-relaxed">
                <p>
                  At Excellence International School, we believe that education extends beyond textbooks. Our holistic curriculum blends intellectual inquiry, creative expression, STREAM education, and physical education.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <FiEye className="text-amber-500 text-2xl mb-2" />
                    <h4 className="font-bold text-slate-900 mb-1">Our Vision</h4>
                    <p className="text-xs text-slate-600">To nurture empathetic, creative, and resilient leaders capable of thriving in a global environment.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <FiTarget className="text-rose-800 text-2xl mb-2" />
                    <h4 className="font-bold text-slate-900 mb-1">Our Mission</h4>
                    <p className="text-xs text-slate-600">Delivering concept-based education, modern infrastructure, and moral grounding.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={SCHOOL_IMAGES.hero.visionMission}
                alt="Excellence International School Vision"
                className="rounded-3xl shadow-xl border-4 border-slate-100 w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Why Choose Us"
            title="The 4 Pillars of Excellence"
            subtitle="Our commitment ensures every child receives individualized attention and comprehensive development."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm text-center">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-900 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                1
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2 font-heading">Concept-Based Learning</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Fostering deep comprehension rather than rote learning.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm text-center">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                2
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2 font-heading">Experienced Faculty</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Dedicated mentors guiding students towards success.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm text-center">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-900 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                3
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2 font-heading">Safe & Secure Campus</h3>
              <p className="text-xs text-slate-600 leading-relaxed">CCTV surveillance, gated perimeter, and trained security.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm text-center">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                4
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2 font-heading">STREAM & Co-Curriculars</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Robotics, arts, sports, and life skills integration.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
