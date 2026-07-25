import { SCHOOL_IMAGES } from '../data/assets';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Card } from '../components/ui/Card';

export const Academics = () => {
  return (
    <main className="flex-grow bg-stone-50">
      <section className="bg-rose-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 inline-block mb-3">
            Academic Excellence
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight mb-4">
            Curriculum & Educational Wings
          </h1>
          <p className="text-rose-100 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Empowering students from early foundational years to middle school with concept-driven learning and STREAM labs.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Academic Divisions"
            title="School Wings & Programs"
            subtitle="Each division offers age-tailored learning environments designed to foster creativity, analytical thinking, and confidence."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SCHOOL_IMAGES.academicWings.map((wing, idx) => (
              <Card
                key={idx}
                image={wing.image}
                title={wing.title}
                subtitle="Academic Wing"
                description={`Comprehensive curriculum focusing on core concepts, interactive projects, and character growth in ${wing.title}.`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-50 border-t border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Innovative Pedagogy"
            title="STREAM & Experiential Learning"
            subtitle="Integrating Science, Technology, Reading, Engineering, Arts, and Mathematics for modern problem solving."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SCHOOL_IMAGES.curriculum.map((curr, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex items-start gap-4">
                <img
                  src={curr.image}
                  alt={curr.title}
                  className="w-16 h-16 object-cover rounded-xl border border-amber-400/40 flex-shrink-0"
                />
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1 font-heading">{curr.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Designed to inspire hands-on experimentation, critical thinking, and collaborative learning.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Academics;
