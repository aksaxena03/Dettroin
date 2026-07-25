import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiArrowRight,
  FiAward,
  FiStar,
} from 'react-icons/fi';
import { SCHOOL_IMAGES } from '../data/assets';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { SectionHeader } from '../components/ui/SectionHeader';

export const Home = () => {
  return (
    <main className="flex-grow">
      <section className="relative bg-gradient-to-br from-rose-950 via-rose-900 to-slate-950 text-white overflow-hidden py-20 lg:py-28">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-rose-700/20 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-amber-500/15 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-500/30 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
                <FiStar className="text-amber-400" />
                <span>Admissions Open for Academic Year 2026-27</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight font-heading">
                Inspiring <span className="text-amber-400">Excellence</span>, Shaping Tomorrow's Leaders
              </h1>

              <p className="text-rose-100/90 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Welcome to Excellence International School — empowering students with concept-based learning, STREAM education, traditional values, and state-of-the-art facilities.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <Link to="/admissions">
                  <Button variant="secondary" size="lg" icon={FiArrowRight}>
                    Apply for Admission
                  </Button>
                </Link>
                <Link to="/academics">
                  <Button variant="outline" size="lg" className="border-rose-300 text-rose-100 hover:bg-rose-800 hover:text-white">
                    Explore Academics
                  </Button>
                </Link>
              </div>

              <div className="pt-6 border-t border-rose-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center lg:text-left">
                <div>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-heading">1500+</h4>
                  <p className="text-xs text-rose-200 mt-0.5">Active Students</p>
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-heading">100%</h4>
                  <p className="text-xs text-rose-200 mt-0.5">Academic Record</p>
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-heading">12:1</h4>
                  <p className="text-xs text-rose-200 mt-0.5">Student-Teacher Ratio</p>
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-heading">15+</h4>
                  <p className="text-xs text-rose-200 mt-0.5">Acre Green Campus</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-rose-800/50 bg-slate-900 group">
                <img
                  src={SCHOOL_IMAGES.hero.visionMission}
                  alt="Excellence International School Vision"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md text-slate-900 border border-white/40 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                      <FiAward className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">Vision & Mission</h4>
                      <p className="text-xs text-slate-600">Empowering student potential in a caring ecosystem.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Academic Wings"
            title="Educational Pathways Tailored for Growth"
            subtitle="From early childhood nurturing to primary and middle school excellence, our structured curriculum fosters intellectual curiosity."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SCHOOL_IMAGES.academicWings.map((wing, idx) => (
              <Card
                key={idx}
                image={wing.image}
                title={wing.title}
                subtitle="Curriculum Program"
                description={`Comprehensive developmental framework designed for ${wing.title.toLowerCase()} students.`}
                badge="Enrolling"
              >
                <Link to="/academics" className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-rose-900 hover:text-amber-600 transition-colors">
                  <span>Learn More</span>
                  <FiArrowRight />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Campus Highlights"
            title="World-Class Facilities for Holistic Learning"
            subtitle="We provide a secure, tech-enabled, and stimulating ecosystem designed for academic mastery and physical well-being."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SCHOOL_IMAGES.facilities.map((facility, idx) => (
              <Card
                key={idx}
                image={facility.image}
                title={facility.title}
                badge="Featured"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-rose-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            badge="Curriculum Excellence"
            title="Innovative Learning Methodology"
            subtitle="Combining Science, Technology, Reading, Engineering, Arts, and Mathematics with hands-on experiential discovery."
            titleColor="text-white"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SCHOOL_IMAGES.curriculum.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-rose-900/60 border border-rose-800/80 p-6 rounded-2xl backdrop-blur-sm flex flex-col justify-between"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-xl border border-amber-400/40 bg-white/10"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-white font-heading">{item.title}</h3>
                    <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider">Core Pillar</span>
                  </div>
                </div>
                <p className="text-rose-100/80 text-sm leading-relaxed mb-4">
                  Engaging students through inquiry-based projects, practical laboratory work, and creative expression.
                </p>
                <Link to="/academics" className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-white transition-colors">
                  <span>View Curriculum</span>
                  <FiArrowRight />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Ethical Foundation"
            title="Core Values We Instill in Every Child"
            subtitle="Character development and moral integrity form the bedrock of our educational philosophy."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {SCHOOL_IMAGES.coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-stone-200 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={val.image}
                  alt={val.title}
                  className="w-14 h-14 object-contain mx-auto mb-3"
                />
                <h4 className="font-bold text-sm text-slate-900 font-heading">{val.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Life at EIS"
            title="Campus Gallery & Student Activities"
            subtitle="Take a peek into daily life, celebrations, sports competitions, and learning moments at Excellence International School."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SCHOOL_IMAGES.gallery.slice(0, 4).map((imgUrl, idx) => (
              <div key={idx} className="relative aspect-square overflow-hidden rounded-2xl shadow-md group">
                <img
                  src={imgUrl}
                  alt={`Campus Activity ${idx + 1}`}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-rose-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link to="/gallery" className="bg-white text-rose-950 text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                    View Photo
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/gallery">
              <Button variant="outline" size="md" icon={FiArrowRight}>
                View Full Photo Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 text-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="space-y-2">
              <span className="bg-rose-950 text-amber-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                Limited Seats Available
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-950">
                Ready to Join the Excellence Family?
              </h2>
              <p className="text-slate-900 text-sm sm:text-base font-medium max-w-xl">
                Enroll your child today for the 2026-27 academic session. Schedule a campus tour or apply online.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/admissions">
                <Button variant="crimson" size="lg" icon={FiArrowRight}>
                  Apply Online Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="ghost" size="lg" className="bg-slate-950/10 hover:bg-slate-950/20 text-slate-950">
                  Book Campus Visit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
