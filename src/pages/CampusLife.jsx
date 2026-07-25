import { SCHOOL_IMAGES } from '../data/assets';
import { SectionHeader } from '../components/ui/SectionHeader';

export const CampusLife = () => {
  return (
    <main className="flex-grow bg-stone-50">
      <section className="bg-rose-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 inline-block mb-3">
            Vibrant Community
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight mb-4">
            Campus Life & Co-Curriculars
          </h1>
          <p className="text-rose-100 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Beyond academics, students explore passion projects, athletic endeavors, performing arts, and community leadership.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Clubs & Activities"
            title="Enriching Student Experiences"
            subtitle="Engaging every learner through diverse co-curricular activities, leadership opportunities, and physical sports."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
              <img
                src={SCHOOL_IMAGES.facilities[4].image}
                alt="Sports & Physical Ed"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">Sports & Athletics</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Basketball, Football, Cricket, Badminton, Martial Arts, and Track & Field under certified coaches.
              </p>
            </div>

            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
              <img
                src={SCHOOL_IMAGES.facilities[5].image}
                alt="Cultural & Creative Activities"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">Visual & Performing Arts</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Music, Classical and Modern Dance, Fine Arts, Theater, and Annual Cultural Fest presentations.
              </p>
            </div>

            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
              <img
                src={SCHOOL_IMAGES.facilities[6].image}
                alt="Personality Development"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">Personality & Life Skills</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Debating societies, Model UN, public speaking, ethics workshops, and community service projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                badge="Student Care"
                title="Safe Campus & Transport Infrastructure"
                subtitle="We maintain strict safety protocols to ensure complete peace of mind for parents."
                centered={false}
              />
              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-900 font-bold flex items-center justify-center text-xs mt-0.5">✓</span>
                  <div>
                    <h4 className="font-bold text-slate-900">GPS-Tracked Bus Fleet</h4>
                    <p className="text-xs text-slate-500">Buses equipped with GPS tracking, speed governors, and trained attendants.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-900 font-bold flex items-center justify-center text-xs mt-0.5">✓</span>
                  <div>
                    <h4 className="font-bold text-slate-900">24/7 CCTV & Security</h4>
                    <p className="text-xs text-slate-500">Comprehensive camera coverage across entry points, corridors, and play zones.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-900 font-bold flex items-center justify-center text-xs mt-0.5">✓</span>
                  <div>
                    <h4 className="font-bold text-slate-900">On-Campus Medical Infirmary</h4>
                    <p className="text-xs text-slate-500">First-aid trained staff and emergency medical tie-ups with leading hospitals.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <img
                src={SCHOOL_IMAGES.facilities[7].image}
                alt="Transportation Facility"
                className="rounded-3xl shadow-lg border-4 border-white w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CampusLife;
