import "./TestimonialsSection.css";

export const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-heading text-center mx-auto">
          <h5>CLIENT TESTIMONIALS</h5>

          <h2>
            What Our <span>Clients Say</span>
          </h2>

          <p>
            Hear directly from our valued clients about their experience with
            Manglam Group and how our projects have exceeded their expectations.
          </p>
        </div>

        <div className="testimonial-video-box">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Clients Testimonial Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};