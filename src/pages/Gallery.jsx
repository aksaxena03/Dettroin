import { useState } from 'react';
import { SCHOOL_IMAGES } from '../data/assets';
import { SectionHeader } from '../components/ui/SectionHeader';

export const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const allPhotos = [
    ...SCHOOL_IMAGES.gallery,
    SCHOOL_IMAGES.hero.visionMission,
    ...SCHOOL_IMAGES.facilities.map((f) => f.image),
    ...SCHOOL_IMAGES.academicWings.map((w) => w.image),
  ];

  return (
    <main className="flex-grow bg-stone-50">
      <section className="bg-rose-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 inline-block mb-3">
            Visual Memories
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight mb-4">
            School Photo & Event Gallery
          </h1>
          <p className="text-rose-100 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Capturing moments of learning, athletic triumphs, cultural celebrations, and campus life at EIS.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Moments at EIS"
            title="Explore Our Campus & Events"
            subtitle="Click on any photo to view in high resolution."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allPhotos.map((url, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImg(url)}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group bg-stone-100"
              >
                <img
                  src={url}
                  alt={`EIS Photo ${idx + 1}`}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-rose-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-xs font-bold px-4 py-2 rounded-full border border-white/40 bg-white/20 backdrop-blur-sm">
                    Expand Photo
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImg && (
        <div
          onClick={() => setSelectedImg(null)}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl">
            <img
              src={selectedImg}
              alt="Enlarged Campus View"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl border-2 border-white/20"
            />
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-4 right-4 text-white bg-slate-950/60 hover:bg-slate-950 p-2.5 rounded-full border border-white/30 text-sm font-bold"
            >
              ✕ Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Gallery;
