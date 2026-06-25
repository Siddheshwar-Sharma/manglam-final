import "./HeroSection.css";

export const HeroSection = () => {
  return (
    <section className="hero-section container-fluid p-0">
      <video
        className="hero-video w-100"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls
      >
        <source src="/videos/Videoo-689.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay">{/* Future content */}</div>
    </section>
  );
};