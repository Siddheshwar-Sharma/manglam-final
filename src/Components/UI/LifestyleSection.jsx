import "./LifestyleSection.css";

import Life1 from "../../assets/images/Life1.jpg";
import Life2 from "../../assets/images/Life2.jpg";
import Life33 from "../../assets/images/Life33.jpg";
import Life4 from "../../assets/images/Life4.jpg";

export const LifestyleSection = () => {
  return (
    <section className="lifestyle-section">

      <div className="lifestyle-heading">
        <h5>MANGLAM LIFESTYLE</h5>

        <h2>
          Enriching Lives Through
          <span> Diverse Experiences.</span>
        </h2>

        <p>
          Manglam Lifestyle brings together Real Estate, Hospitality,
          Medical, and Entertainment to create meaningful experiences
          that enhance everyday living, foster well-being, and build
          vibrant communities.
        </p>
      </div>

      <div className="lifestyle-gallery">

        <div className="lifestyle-card">
          <img src={Life1} alt="Lifestyle 1" />
        </div>

        <div className="lifestyle-card">
          <img src={Life2} alt="Lifestyle 2" />
        </div>

        <div className="lifestyle-card">
          <img src={Life33} alt="Lifestyle 3" />
        </div>

        <div className="lifestyle-card">
          <img src={Life4} alt="Lifestyle 4" />
        </div>

      </div>

    </section>
  );
};