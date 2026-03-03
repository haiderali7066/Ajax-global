export default function AIVideoSection() {
  return (
    <section className="relative w-full px-4 py-4 md:px-8">
      <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden rounded-3xl shadow-2xl bg-slate-900">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/video-placeholder.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/aivideo.mp4" type="video/mp4" />
          <source src="/your-video.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />
      </div>
    </section>
  );
}
